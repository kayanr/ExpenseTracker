import React from "react";

let categoryColor = "";
export function ExpenseComponent(props) {
  //alert(props.expense.category);
  if (props.expense.category === "Food") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #d6f5d6",
          margin: "10px 200px",
          backgroundColor: "#D4E8D4",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
  if (props.expense.category === "Transportation") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #ffffcc",
          margin: "10px 200px",
          backgroundColor: "#fff2ce",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
  if (props.expense.category === "Travel") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #f5ccff",
          margin: "10px 200px",
          backgroundColor: "#E2D5E7",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  if (props.expense.category === "Travel") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #f5ccff",
          margin: "10px 200px",
          backgroundColor: "#E2D5E7",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  if (props.expense.category === "Clothing") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #f5ccff",
          margin: "10px 200px",
          backgroundColor: "#33CCFF",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  if (props.expense.category === "Miscellaneous") {
    categoryColor = (
      <div
        style={{
          border: "1px solid #f5ccff",
          margin: "10px 200px",
          backgroundColor: "#FF33CC",
        }}
      >
        <p style={{ float: "left" }}> {props.expense.description}</p>
        <p style={{ float: "right" }}> ${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  //Do for Clothing ...blue and miscellaneous...pink

  return <div>{categoryColor}</div>;

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
