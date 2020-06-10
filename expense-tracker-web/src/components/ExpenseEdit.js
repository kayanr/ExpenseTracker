import React from "react";
import "./ExpenseEdit.css";

export function ExpenseEdit(props) {
  return (
    <>
      <h1>Edit Page Expense Tracker</h1>
      {/* <p>Expense tracker information:</p> */}
      <div className="row">
        {/* < <div class="column">
          <img src="/w3images/map.jpg" style="width: 100%;" />
        </div> --> */}
        <div className="column">
          <form action="/action_page.php" style={{ alignContent: "center" }}>
            <label htmlFor="ename">Name:</label>
            <input
              type="text"
              id="ename"
              name="ename"
              placeholder="name of expense..."
            />
            <label htmlFor>Amount ($):</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder=" Your expense amount..."
            />
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Transportation">Transportation</option>
              <option value="Travel">Travel</option>
            </select>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Write something.."
              style={{ height: "170px" }}
            ></textarea>
            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    </>
  );
}
