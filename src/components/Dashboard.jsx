import React from "react";

function Dashboard({ transactions }) {

  const income = transactions
    .filter(t => t.type === "Income")
    .reduce((a,b)=>a+b.amount,0);

  const expense = transactions
    .filter(t => t.type === "Expense")
    .reduce((a,b)=>a+b.amount,0);

  const balance = income - expense;

  return (
    <div>
      <h3>Total Income: ₹{income}</h3>
      <h3>Total Expense: ₹{expense}</h3>
      <h3>Balance: ₹{balance}</h3>
    </div>
  );
}

export default Dashboard;