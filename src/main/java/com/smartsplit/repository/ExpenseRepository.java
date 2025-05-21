package com.smartsplit.repository;

import com.smartsplit.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByPaidById(Long userId);
}
