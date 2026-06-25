import React from "react";

function Dashboard({ transactions }) {

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="dashboard">

      <div className="card income">
        <div className="card-icon">💰</div>
        <h3>Total Income</h3>
        <p>₹{income.toLocaleString()}</p>
      </div>

      <div className="card expense">
        <div className="card-icon">💸</div>
        <h3>Total Expense</h3>
        <p>₹{expense.toLocaleString()}</p>
      </div>

      <div className="card balance">
        <div className="card-icon">📊</div>
        <h3>Available Balance</h3>
        <p>₹{balance.toLocaleString()}</p>
      </div>

    </div>
  );
}

export default Dashboard;