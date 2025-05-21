package com.smartsplit.repository;

import com.smartsplit.model.Transaction;
import com.smartsplit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByFromUserOrToUser(User fromUser, User toUser);
}
