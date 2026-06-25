import React from "react";

function TransactionList({ transactions = [] }) {
  return (
    <div className="table-container">
      <h2 style={{ marginBottom: "15px", color: "#2c3e50" }}>
        Transaction History
      </h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount (₹)</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((t, index) => (
              <tr key={index}>
                <td>{t.title}</td>

                <td
                  style={{
                    fontWeight: "bold",
                    color:
                      t.type === "Income"
                        ? "#00c853"
                        : "#ff1744",
                  }}
                >
                  ₹{t.amount}
                </td>

                <td>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "20px",
                      color: "#fff",
                      background:
                        t.type === "Income"
                          ? "#00c853"
                          : "#ff1744",
                    }}
                  >
                    {t.type}
                  </span>
                </td>

                <td>{t.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No transactions available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;