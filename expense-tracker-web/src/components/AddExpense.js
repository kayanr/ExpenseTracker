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
    };
    //this.changeHandler = this.changeHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
  }

  //This is not working as correctly I will have to split up and
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

  render() {
    const { name, amount, category, description } = this.state;
    return (
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
              value={name}
              onChange={this.nameChangeHandler}
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
              value={amount}
              onChange={this.amountChangeHandler}
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
              value={description}
              onChange={this.descriptionChangeHandler}
              style={{ height: "170px" }}
            ></textarea>
            <br />
            <input
              type="submit"
              value="Create"
              // style={{ backgroundColor: "#dae8f9" }}
            />
            {
              <input
                type="submit"
                value="Cancel"
                // style={{ backgroundColor: "#dae8f9" }}
              />
            }
          </form>
        </div>
      </>
    );
  }
}
