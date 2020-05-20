package com.example.expensetracker.repository;

import com.example.expensetracker.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
