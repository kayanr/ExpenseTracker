import React from "react";

export function ExpenseComponent(props) {
  return (
    <div
      style={{
        border: "1px solid blue",
        margin: "10px 200px",
        backgroundColor: "#03fcb1",
      }}
    >
      <p style={{ float: "left" }}> {props.expense.description}</p>
      <p style={{ float: "right" }}> {props.expense.amount}</p>
      <div style={{ clear: "both" }} />
    </div>
  );
}
