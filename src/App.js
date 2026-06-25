import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) {
      setTransactions(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="container">
      <h1>Expense Analytics Dashboard</h1>

      <Dashboard transactions={transactions} />

      <TransactionForm
        addTransaction={addTransaction}
      />

      <ExpenseChart transactions={transactions} />

      <TransactionList
        transactions={transactions}
      />
    </div>
  );
}

export default App;