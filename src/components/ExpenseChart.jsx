import React from "react";

import {
 PieChart,
 Pie,
 Tooltip,
 Cell
} from "recharts";

function ExpenseChart({ transactions }) {

 const expenses =
 transactions.filter(
   t => t.type === "Expense"
 );

 const data = expenses.map(e => ({
   name: e.category,
   value: e.amount
 }));

 return (
   <div>
     <h2>Expense Analysis</h2>

     <PieChart width={400} height={300}>
       <Pie
         data={data}
         dataKey="value"
         outerRadius={100}
         label
       >
         {data.map((entry,index)=>(
           <Cell key={index}/>
         ))}
       </Pie>

       <Tooltip />
     </PieChart>
   </div>
 );
}

export default ExpenseChart;
