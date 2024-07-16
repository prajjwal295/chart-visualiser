import React from "react";
import { Bar } from "react-chartjs-2";

const TopicsChart = ({ data }) => {
  const groupedData = data.reduce((acc, item) => {
    acc[item.topic] = (acc[item.topic] || 0) + 1;
    return acc;
  }, {});

  const topicsData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: "Topics",
        data: Object.values(groupedData),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={topicsData} />
    </div>
  );
};

export default TopicsChart;
