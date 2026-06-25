import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setType("Expense");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>

        <option value="Food">🍔 Food</option>
        <option value="Transport">🚗 Transport</option>
        <option value="Shopping">🛍 Shopping</option>
        <option value="Education">📚 Education</option>
        <option value="Entertainment">🎬 Entertainment</option>
        <option value="Health">🏥 Health</option>
        <option value="Salary">💼 Salary</option>
        <option value="Freelance">💻 Freelance</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <button type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;