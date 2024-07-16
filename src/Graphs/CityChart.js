import React from "react";
import { Pie } from "react-chartjs-2";

const CityChart = ({ data }) => {
  const groupedData = data.reduce((acc, item) => {
    acc[item.city] = (acc[item.city] || 0) + 1;
    return acc;
  }, {});

  const cityData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: "City",
        data: Object.values(groupedData),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={cityData} />
    </div>
  );
};

export default CityChart;
