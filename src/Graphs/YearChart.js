import React from "react";
import { Line } from "react-chartjs-2";

const YearChart = ({ data }) => {
  // Filter out null start_year values
  const filteredData = data.filter((item) => item.start_year !== null);

  // Aggregate data by start year
  const yearCounts = filteredData.reduce((acc, item) => {
    acc[item.start_year] = (acc[item.start_year] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data
  const yearData = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: "Number of Occurrences",
        data: Object.values(yearCounts),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            weight: "bold",
          },
          color: "#333",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Start Year",
          color: "#333",
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Occurrences",
          color: "#333",
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            weight: "bold",
          },
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutBounce",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-bold mb-4">Year Chart</h2>
      <Line data={yearData} options={options} />
    </div>
  );
};

export default YearChart;
