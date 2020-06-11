import React from "react";
import { ExpenseComponent } from "./ExpenseComponent";

export function ExpenseListView(props) {
  let body = [];

  props.expenses.forEach((expense) => {
    body.push(<ExpenseComponent expense={expense} />);
  });

  return (
    <div>
      <p align="center">
        <button
          onClick={props.toggle}
          style={{
            backgroundColor: "#809dff",
            float: "center",
            height: "30px",
            width: "50px",
            borderColor: "#d9e8fb",
          }}
        >
          New
        </button>{" "}
      </p>
      {body}
    </div>
  );
}
