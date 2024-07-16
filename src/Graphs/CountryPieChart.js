import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const CountryPieChart = ({ data }) => {
  const groupedData = data.reduce((acc, item) => {
    acc[item.country] = (acc[item.country] || 0) + 1;
    return acc;
  }, {});

  const countryData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: "Country",
        data: Object.values(groupedData),
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
    animation: {
      duration: 2000,
      easing: "easeInOutBounce",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={countryData} options={options} />
    </div>
  );
};

export default CountryPieChart;
