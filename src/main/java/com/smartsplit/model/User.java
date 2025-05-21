package com.smartsplit.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "app_user")  // <-- Change table name here to avoid 'user' keyword conflict
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;
}
