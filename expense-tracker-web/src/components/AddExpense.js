import React, { Component } from "react";
import "./ExpenseEdit.css";
import axios from "axios";

//start here
export class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: " ",
      amount: 0.0,
      category: " ",
      description: " ",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    //this.setState({ text: event.target.text });
    //this.setState({ color: event.target.color });
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios

      .post("http://localhost:8080/expense", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { id, name, amount, category, description } = this.state;
    return (
      // <div className="row">
      <>
        <h2>Add Expenses form test</h2>
        <div className="container">
          <form onSubmit={this.submitHandler}>
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
              value={this.state.name}
              onChange={this.changeHandler}
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
              value={this.state.amount}
              onChange={this.changeHandler}
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
            <select
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.changeHandler}
            >
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
              value={this.state.description}
              onChange={this.changeHandler}
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
