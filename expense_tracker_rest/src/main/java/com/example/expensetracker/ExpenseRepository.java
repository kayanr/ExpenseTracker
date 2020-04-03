package com.example.expensetracker;

import org.springframework.stereotype.Component;

import javax.swing.text.html.parser.Entity;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExpenseRepository {

    // Step 1:
    // Setting Database properties and credentials
    private final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    private final String DB_URL = "jdbc:mysql://localhost:3306/expense_tracker_db";
    private final String USER = "EXPENSE_APP";
    private final String PASS = "QZ0mcat*";

    private Connection conn;

    public ExpenseRepository(){

        try {
            // Step 2:
            // Loading the driver
            Class.forName(JDBC_DRIVER);

            // Step 3:
            // Establish Database Connection
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
        }

        catch(ClassNotFoundException e){}

        catch(SQLException e){}

    }

    public List<Expense> findAll(){

        List<Expense> expenses = new ArrayList<>();

        try {

            Statement statement = conn.createStatement();
            ResultSet rs = statement.executeQuery("select * from expenses");

            while(rs.next()){

                Expense expense = new Expense();

                expense.setId(rs.getInt("id"));
                expense.setName(rs.getString("name"));
                expense.setAmount(rs.getFloat("amount"));
                expense.setCategory(rs.getString("category"));
                expense.setDescription(rs.getString("description"));
                //System.out.println(rs.getInt("id"));
                expenses.add(expense);

            }

            statement.close();
            rs.close();

        }

        catch(SQLException e){}

        return expenses;
    }

    public Expense findById(int id){

        Expense expense = null;


        return expense;

    }
//
//    public Expense save(Expense expense){
//
//        expense.setId(count);
//        count++;
//        this.expenses.add(expense);
//
//        return expense;
//
//    }
//
//    public void deleteById(int id){
//        Expense expense = this.findById(id);
//        this.expenses.remove(expense);
//    }
//
//    public void delete(Expense expense){
//        this.deleteById(expense.getId());
//    }

}
