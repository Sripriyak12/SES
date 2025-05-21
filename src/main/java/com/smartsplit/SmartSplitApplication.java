package com.smartsplit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {
    org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration.class
})
public class SmartSplitApplication {
    public static void main(String[] args) {
        SpringApplication.run(SmartSplitApplication.class, args);
    }
}
