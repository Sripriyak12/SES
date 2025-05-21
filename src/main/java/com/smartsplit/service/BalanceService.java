package com.smartsplit.service;

import com.smartsplit.dto.BalanceDTO;
import com.smartsplit.model.Expense;
import com.smartsplit.model.Transaction;
import com.smartsplit.model.User;
import com.smartsplit.repository.ExpenseRepository;
import com.smartsplit.repository.TransactionRepository;
import com.smartsplit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BalanceService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // Calculate and return "who owes whom" balances
    public List<BalanceDTO> calculateBalances() {
        List<User> users = userRepository.findAll();
        List<Expense> expenses = expenseRepository.findAll();

        // Map<User, netBalance> positive means others owe user, negative means user owes others
        Map<Long, Double> netBalances = new HashMap<>();
        for (User user : users) {
            netBalances.put(user.getId(), 0.0);
        }

        // Calculate net balance for each user
        for (Expense expense : expenses) {
            double share = expense.getAmount() / users.size();
            for (User user : users) {
                if (user.getId().equals(expense.getPaidBy().getId())) {
                    netBalances.put(user.getId(), netBalances.get(user.getId()) + (expense.getAmount() - share));
                } else {
                    netBalances.put(user.getId(), netBalances.get(user.getId()) - share);
                }
            }
        }

        // Calculate who owes whom by pairing negative and positive balances
        List<BalanceDTO> balances = new ArrayList<>();

        Map<Long, Double> positiveBalances = new HashMap<>();
        Map<Long, Double> negativeBalances = new HashMap<>();

        for (Map.Entry<Long, Double> entry : netBalances.entrySet()) {
            if (entry.getValue() > 0) {
                positiveBalances.put(entry.getKey(), entry.getValue());
            } else if (entry.getValue() < 0) {
                negativeBalances.put(entry.getKey(), -entry.getValue()); // store positive amount owed
            }
        }

        // Match debtors with creditors
        for (Map.Entry<Long, Double> debtor : negativeBalances.entrySet()) {
            Long debtorId = debtor.getKey();
            double amountOwed = debtor.getValue();

            Iterator<Map.Entry<Long, Double>> creditorsIterator = positiveBalances.entrySet().iterator();

            while (amountOwed > 0 && creditorsIterator.hasNext()) {
                Map.Entry<Long, Double> creditor = creditorsIterator.next();
                Long creditorId = creditor.getKey();
                double creditorAmount = creditor.getValue();

                double settledAmount = Math.min(amountOwed, creditorAmount);

                User debtorUser = userRepository.findById(debtorId).orElse(null);
                User creditorUser = userRepository.findById(creditorId).orElse(null);

                if (debtorUser != null && creditorUser != null) {
                    balances.add(new BalanceDTO(debtorUser.getName(), creditorUser.getName(), settledAmount));
                }

                amountOwed -= settledAmount;
                creditorAmount -= settledAmount;

                if (creditorAmount == 0) {
                    creditorsIterator.remove();
                } else {
                    positiveBalances.put(creditorId, creditorAmount);
                }
            }

        }

        return balances;
    }
}
