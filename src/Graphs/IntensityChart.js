import React from "react";
import { Bar } from "react-chartjs-2";

const IntensityChart = ({ data }) => {
  const intensityData = {
    labels: data.map((item) => item.intensity),
    datasets: [
      {
        label: "Intensity",
        data: data.map((item) => item.intensity),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={intensityData} />
    </div>
  );
};

export default IntensityChart;
