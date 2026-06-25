import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend
} from "recharts";

function ExpenseChart({ transactions }) {

  const expenses = transactions.filter(
    (t) => t.type === "Expense"
  );

  const categoryData = {};

  expenses.forEach((item) => {
    if (categoryData[item.category]) {
      categoryData[item.category] += item.amount;
    } else {
      categoryData[item.category] = item.amount;
    }
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const COLORS = [
    "#2962ff",
    "#00c853",
    "#ff1744",
    "#ff9100",
    "#9c27b0",
    "#00bcd4",
    "#795548",
    "#607d8b",
  ];

  return (
    <div className="chart-section">
      <h2>Expense Analytics</h2>

      {data.length > 0 ? (
        <PieChart width={600} height={350}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#666",
          }}
        >
          Add expense transactions to view analytics
        </p>
      )}
    </div>
  );
}

export default ExpenseChart;