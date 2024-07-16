import React from "react";
import { Line } from "react-chartjs-2";

const LikelihoodChart = ({ data }) => {
  // Aggregate data by likelihood value
  const likelihoodCounts = data.reduce((acc, item) => {
    acc[item.likelihood] = (acc[item.likelihood] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data
  const likelihoodData = {
    labels: Object.keys(likelihoodCounts),
    datasets: [
      {
        label: "Number of Years",
        data: Object.values(likelihoodCounts),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Years",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Line data={likelihoodData} options={options} />
    </div>
  );
};

export default LikelihoodChart;
