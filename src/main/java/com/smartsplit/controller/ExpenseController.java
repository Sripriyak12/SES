package com.smartsplit.controller;

import com.smartsplit.model.Expense;
import com.smartsplit.model.User;
import com.smartsplit.service.ExpenseService;
import com.smartsplit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @Autowired
    private UserService userService;

    // Modified: Accepts JSON request body
    @PostMapping("/add")
    public ResponseEntity<?> addExpense(@RequestBody ExpenseRequest request) {
        Optional<User> userOpt = userService.getUserById(request.getPaidByUserId());
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }
        Expense expense = expenseService.addExpense(request.getDescription(), request.getAmount(), userOpt.get());
        return ResponseEntity.ok(expense);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Expense>> getAllExpenses() {
        return ResponseEntity.ok(expenseService.getAllExpenses());
    }

    // DTO class to map incoming JSON
    public static class ExpenseRequest {
        private Long paidByUserId;
        private String description;
        private double amount;

        public Long getPaidByUserId() {
            return paidByUserId;
        }

        public void setPaidByUserId(Long paidByUserId) {
            this.paidByUserId = paidByUserId;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public double getAmount() {
            return amount;
        }

        public void setAmount(double amount) {
            this.amount = amount;
        }
    }
}
