package com.hw.expensetrackerrest.controller;


import com.hw.expensetrackerrest.model.Expense;
import com.hw.expensetrackerrest.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    //    Request: GET /expenses
    //    Response: Expense[]
    @GetMapping("/expenses")
    public List<Expense> getAllExpenses(){
        return expenseRepository.findAll();
    }

    //    Request: GET /expense/{id}
    //    Response: Expense
    @GetMapping("/expense/{id}")
    public Expense getExpenseById(@PathVariable long id){
        return expenseRepository.findById(id);
    }

    //    Request: POST /expense Expense
    //    Response: Expense
    @PostMapping("/expense")
    public Expense saveExpense(@RequestBody Expense expense)
    {
        return expenseRepository.save(expense);
    }

}
