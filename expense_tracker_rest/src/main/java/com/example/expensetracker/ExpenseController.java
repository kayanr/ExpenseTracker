package com.example.expensetracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

//    Request: GET /ping
//    Response: "Up"
    @GetMapping("/ping")
    public String ping(){
        return "Up";
    }

//    Request: GET /expenses
//    Response: Expense[]
    @GetMapping("/expenses")
    public List<Expense> getAllExpenses(){
        return expenseRepository.findAll();
    }

//    Request: GET /expense/{id}
//    Response: Expense
    @GetMapping("/expense/{id}")
    public Expense getExpenseById(@PathVariable int id){
        return expenseRepository.findById(id);
    }

//    Request: POST /expense Expense
//    Response: Expense
   /* @PostMapping("/expense")
    public Expense saveExpense(@RequestBody Expense expense){
        return expenseRepository.save(expense);
    }
*/
//    Request: DELETE /expense/{id}
//    Response: void
  /*  @DeleteMapping("/expense/{id}")
    public void deleteExpenseById(@PathVariable int id){
        expenseRepository.deleteById(id);
    }
*/
//    Request: DELETE /expense Expense
//    Response: void
 /*   @DeleteMapping("/expense")
    public void deleteExpense(@RequestBody Expense expense){
        expenseRepository.delete(expense);
    }
*/
}
