package com.smartsplit.controller;

import com.smartsplit.dto.BalanceDTO;
import com.smartsplit.service.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/balances")
public class BalanceController {

    @Autowired
    private BalanceService balanceService;

    @GetMapping("/who-owes-whom")
    public ResponseEntity<List<BalanceDTO>> getBalances() {
        List<BalanceDTO> balances = balanceService.calculateBalances();
        return ResponseEntity.ok(balances);
    }
}
