package com.smartsplit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BalanceDTO {
    private String fromUserName;  // user who owes money (name)
    private String toUserName;    // user who should receive money (name)
    private double amount;
}

