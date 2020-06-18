import React, { Component } from "react";
import "./ExpenseEdit.css";
import axios from "axios";

//start here
export class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      category: "Food",
      description: "",
      mode: "EDIT",
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
  }

  //This is not working correctly as one changeHandler function so I had to split up and
  //handle each change independently
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  amountChangeHandler = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  categoryChangeHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  descriptionChangeHandler = (event) => {
    this.setState({ description: event.target.value });
  };

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

  toggleMode() {
    this.setState({ mode: this.state.mode === "EDIT" ? "VIEW" : "VIEW" });
  }

  render() {
    const { name, amount, category, description, mode } = this.state;
    return (
      <>
        <div className="container">
          <form onSubmit={this.submitHandler}>
            <label htmlFor="ename">Name: </label>
            <input
              type="text"
              id="ename"
              name="ename"
              value={name}
              onChange={this.nameChangeHandler}
              placeholder="Enter name of expense..."
            />{" "}
            <br />
            <label htmlFor="amount">Amount ($): </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={this.amountChangeHandler}
              placeholder=" Your expense amount..."
            />{" "}
            <br />
            <label htmlFor="category">Category: </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={this.categoryChangeHandler}
            >
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>{" "}
            <br />
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write something..."
              value={description}
              onChange={this.descriptionChangeHandler}
              style={{ height: "170px" }}
            ></textarea>
            <br />
            <input type="reset" value="Cancel" />
            &nbsp; &nbsp; &nbsp;
            <button
              type="submit"
              height="100px;"
              style={{ backgroundColor: "#bbb" }}
              onClick={!mode}
            >
              {" "}
              Create
            </button>
          </form>
        </div>
      </>
    );
  }
}
