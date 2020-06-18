import React from "react";
import "./App.css";
import { ExpenseListView } from "./components/ExpenseListView";
import { AddExpense } from "./components/AddExpense";

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
      <div>
        <h1 align="center">Expense Tracker</h1>
        <div hidden={this.setState.mode === "VIEW"}>
          <ExpenseListView
            expenses={this.state.expenses}
            toggle={this.toggleMode}
          />
        </div>
        <div hidden={this.state.mode === "EDIT"}>
          <AddExpense toggle={this.toggleMode} />
        </div>
      </div>
    );
  }
}

export default App;
