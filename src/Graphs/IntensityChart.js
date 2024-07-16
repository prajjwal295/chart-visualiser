import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const IntensityChart = ({ data }) => {
  // Aggregate data by intensity value
  const intensityCounts = data.reduce((acc, item) => {
    acc[item.intensity] = (acc[item.intensity] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data
  const intensityData = {
    labels: Object.keys(intensityCounts),
    datasets: [
      {
        label: "Number of Occurrences",
        data: Object.values(intensityCounts),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: true,
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
          text: "Intensity",
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
          beginAtZero: true,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutBounce",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-bold mb-4">Intensity Chart</h2>
      <Line data={intensityData} options={options} />
    </div>
  );
};

export default IntensityChart;
