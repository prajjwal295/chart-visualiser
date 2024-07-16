import React from "react";
import { Line } from "react-chartjs-2";

const YearChart = ({ data }) => {
  const yearData = {
    labels: data.map((item) => item.start_year),
    datasets: [
      {
        label: "Year",
        data: data.map((item) => item.start_year),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Line data={yearData} />
    </div>
  );
};

export default YearChart;
