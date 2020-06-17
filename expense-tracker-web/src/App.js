import React from "react";
import "./App.css";
import { ExpenseListView } from "./components/ExpenseListView";
import { ExpenseEdit } from "./components/ExpenseEdit";
//import { AddExpense } from "./components/AddExpense";
import { AddExpenseFetch } from "./components/AddExpenseFetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      mode: "VIEW",
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({ mode: this.state.mode === "VIEW" ? "EDIT" : "VIEW" });
  }

  componentDidMount() {
    fetch("http://localhost:8080/expenses")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          expenses: data,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Expense Tracker</h1>
        {/* <div hidden={this.setState.mode === "VIEW"}>
          <ExpenseListView
            expenses={this.state.expenses}
            toggle={this.toggleMode}
          />
        </div> */}
        {/* <div hidden={this.state.mode === "VIEW"}> */}
        {/* <ExpenseEdit toggle={this.toggleMode} /> */}
        {/* <AddExpense toggle={this.toggleMode} /> */}
        <AddExpenseFetch />
        {/* </div> */}
        <ExpenseListView expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
