package com.example.expensetracker.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;

    @JoinColumn(name="name_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Name name;

    @JoinColumn(name = "user_id")
    @OneToMany(cascade=CascadeType.ALL)
    private List<Expense> expenses;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<Expense> expenses) {
        this.expenses = expenses;
    }
}
