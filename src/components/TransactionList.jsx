import React from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t,index)=>(
            <tr key={index}>
              <td>{t.title}</td>
              <td>{t.amount}</td>
              <td>{t.type}</td>
              <td>{t.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
