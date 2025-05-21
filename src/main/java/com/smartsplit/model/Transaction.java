package com.smartsplit.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User fromUser;

    @ManyToOne
    private User toUser;

    private double amount;

    private LocalDate date;

    private boolean settled;
}
