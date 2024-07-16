import React from "react";
import { Line } from "react-chartjs-2";

const LikelihoodChart = ({ data }) => {
  const likelihoodData = {
    labels: data.map((item) => item.likelihood),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((item) => item.likelihood),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Line data={likelihoodData} />
    </div>
  );
};

export default LikelihoodChart;
