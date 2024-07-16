import React from "react";
import { Bar } from "react-chartjs-2";

const RelevanceChart = ({ data }) => {
  // Aggregate data by relevance value
  const relevanceCounts = data.reduce((acc, item) => {
    acc[item.relevance] = (acc[item.relevance] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data
  const relevanceData = {
    labels: Object.keys(relevanceCounts),
    datasets: [
      {
        label: "Number of Occurrences",
        data: Object.values(relevanceCounts),
        backgroundColor: [
          "#FF6384",
          "#FF9F40",
          "#FFCE56",
          "#4BC0C0",
          "#36A2EB",
          "#9966FF",
          "#C9CBCF",
        ],
        borderColor: [
          "#FF6384",
          "#FF9F40",
          "#FFCE56",
          "#4BC0C0",
          "#36A2EB",
          "#9966FF",
          "#C9CBCF",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Relevance",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Occurrences",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={relevanceData} options={options} />
    </div>
  );
};

export default RelevanceChart;
