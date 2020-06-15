import React, { Component } from "react";
import "./ExpenseEdit.css";

export class AddExpense extends Component {
  submitExpense(event) {
    event.preventDefault();

    let expense = {
      id: this.refs.id.value,
      name: this.refs.name.value,
      amount: this.refs.amount.value,
      category: this.refs.category.value,
      description: this.refs.description.value,
    };

    fetch("http://localhost:8080/expense", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(expense),
    }).then((response) => response.json());

    window.location.reload();
  }

  render() {
    return (
      // <div className="row">
      <>
        <h2>Add Expenses form test</h2>
        <div className="container">
          <form onSubmit={this.submitExpense.bind(this)}>
            <label
              htmlFor="ename"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Name:{" "}
            </label>
            <input
              type="text"
              id="ename"
              name="ename"
              placeholder="Enter name of expense..."
            />{" "}
            <br />
            <label
              htmlFor="amount"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Amount ($):{" "}
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder=" Your expense amount..."
            />{" "}
            <br />
            <label
              htmlFor="category"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Category:{" "}
            </label>
            <select id="category" name="category">
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
            </select>{" "}
            <br />
            <label
              htmlFor="description"
              style={{
                display: "inline-block;",
                width: "140px;",
                textAlign: "right;",
              }}
            >
              Description:{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write something..."
              style={{ height: "170px" }}
            ></textarea>
            <br />
            <input
              type="submit"
              value="Create"
              // style={{ backgroundColor: "#dae8f9" }}
            />
            <input
              type="submit"
              value="Cancel"
              // style={{ backgroundColor: "#dae8f9" }}
            />
          </form>
        </div>
      </>
    );
  }
}
