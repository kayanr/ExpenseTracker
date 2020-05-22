import React from "react";

export function ExpenseComponent(props) {
  return (
    <div style={{ border: "1px solid red", margin: "10px 200px" }}>
      <p style={{ float: "left" }}> {props.expense.description}</p>
      <p style={{ float: "right" }}> {props.expense.amount}</p>
      <div style={{ clear: "both" }} />
    </div>
  );
}
