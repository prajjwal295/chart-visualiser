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
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
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

