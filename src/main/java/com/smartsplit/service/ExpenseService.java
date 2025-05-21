package com.smartsplit.service;

import com.smartsplit.model.Expense;
import com.smartsplit.model.User;
import com.smartsplit.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense addExpense(String description, double amount, User paidBy) {
        Expense expense = Expense.builder()
                .description(description)
                .amount(amount)
                .paidBy(paidBy)
                .date(LocalDate.now())
                .build();
        return expenseRepository.save(expense);
    }

    public List<Expense> getExpensesByUser(Long userId) {
        return expenseRepository.findByPaidById(userId);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
}
