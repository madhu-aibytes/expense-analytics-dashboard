import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        required
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        required
      />

      <select
        value={type}
        onChange={(e)=>setType(e.target.value)}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button>Add</button>
    </form>
  );
}

export default TransactionForm;