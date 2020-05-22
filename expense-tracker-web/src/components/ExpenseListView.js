import React from "react";
import { ExpenseComponent } from "./ExpenseComponent";

export function ExpenseListView(props) {
  let body = [];

  props.expenses.forEach((expense) => {
    body.push(<ExpenseComponent expense={expense} />);
  });

  return (
    <div>
      <button onClick={props.toggle}>New</button>
      {body}
    </div>
  );
}
