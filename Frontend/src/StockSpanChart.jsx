// StockSpanChart.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const StockSpanChart = ({ spans }) => {
  const chartData = spans.map((span, index) => ({
    day: index + 1,
    span: span,
  }));

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Stock Span Line Chart</h3>
      <LineChart width={700} height={350} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" label={{ value: "Day", position: "insideBottom", offset: -5 }} />
        <YAxis label={{ value: "Span", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="span" stroke="#82ca9d" name="Span" />
      </LineChart>
    </div>
  );
};

export default StockSpanChart;
