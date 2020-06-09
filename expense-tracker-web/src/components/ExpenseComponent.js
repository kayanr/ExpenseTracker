import React from "react";

let colorToDisplay = "";
export function ExpenseComponent(props) {
  //alert(props.expense.category);
  if (props.expense.category === "Food") {
    colorToDisplay = (
      <div
        style={{
          border: "1px solid #d6f5d6",
          margin: "10px 200px",
          backgroundColor: "#d6f5d6",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
  if (props.expense.category === "Transportation") {
    colorToDisplay = (
      <div
        style={{
          border: "1px solid #ffffcc",
          margin: "10px 200px",
          backgroundColor: "#ffffcc",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
  if (props.expense.category === "Travel") {
    colorToDisplay = (
      <div
        style={{
          border: "1px solid #f5ccff",
          margin: "10px 200px",
          backgroundColor: "#f5ccff",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  return <div>{colorToDisplay}</div>;

  /*  return (
    <div
      style={{
        border: "1px solid blue",
        margin: "10px 200px",
        backgroundColor: "#03fcb1",
      }}
    >
      <p style={{ float: "left" }}> {props.expense.description}</p>
      <p style={{ float: "right" }}> {props.expense.amount}</p>
      <p style={{ float: "center" }}> {props.expense.category}</p>
      <div style={{ clear: "both" }} />
    </div>
  ); */

  /*  const Condition1 = () => {
    return (
      <div>
        <p>If true, display this!</p>
      </div>
    );
  };
  
  const Condition2 = () => {
    return (
      <div>
        <p>If false, display this!</p>
      </div>
    );
  }; */
}
