import React, { Component } from "react";
import "./ExpenseEdit.css";
import axios from "axios";

//start here
export class AddExpenseFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 14,
      exName: "",
      amount: 19.99,
      category: "Food",
      description: "This is A TEST",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    //this.setState({ [event.target.name]: event.target.value });
    this.setState({ exName: event.target.value });
    // this.setState({ amount: event.target.amount });
    // this.setState({ category: event.target.category });
    // this.setState({ description: event.target.description });
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
    const { exName, amount, category, description } = this.state;
    return (
      <>
        <h2>Add Expenses form test</h2>
        <div className="container">
          <form onSubmit={this.submitHandler}>
            <label>Name:</label>
            <input
              type="text"
              id="ename"
              name="ename"
              value={this.state.exName}
              onChange={this.changeHandler}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
