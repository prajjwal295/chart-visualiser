import React from "react";
import { Bar } from "react-chartjs-2";

const RelevanceChart = ({ data }) => {
  const relevanceData = {
    labels: data.map((item) => item.relevance),
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => item.relevance),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={relevanceData} />
    </div>
  );
};

export default RelevanceChart;
