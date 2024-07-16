import React from "react";
import { Pie } from "react-chartjs-2";

const RegionPieChart = ({ data }) => {
  const groupedData = data.reduce((acc, item) => {
    acc[item.region] = (acc[item.region] || 0) + 1;
    return acc;
  }, {});

  const regionData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: "Region",
        data: Object.values(groupedData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={regionData} />
    </div>
  );
};

export default RegionPieChart;

