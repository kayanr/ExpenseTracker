package com.example.expensetracker;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Integer> {
List <Expense> findAll();
Expense findById(int id);

List<Expense> findByCategory(String category);



}
