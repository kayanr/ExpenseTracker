package com.example.expensetracker;

import com.example.expensetracker.model.Expense;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Integer> {
List <Expense> findAll();
Expense findById(int id);

}
