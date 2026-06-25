import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load saved transactions
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions) {
      try {
        setTransactions(JSON.parse(savedTransactions));
      } catch (error) {
        console.error("Error loading transactions:", error);
        setTransactions([]);
      }
    }
  }, []);

  // Save transactions
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // Add transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      ...prev,
      transaction,
    ]);
  };

  return (
    <div className="container">
      <h1>
        💰 Personal Finance Tracker &
        Analytics Dashboard
      </h1>

      <Dashboard
        transactions={transactions}
      />

      <TransactionForm
        addTransaction={addTransaction}
      />

      <ExpenseChart
        transactions={transactions}
      />

      <TransactionList
        transactions={transactions}
      />
    </div>
  );
}

export default App;