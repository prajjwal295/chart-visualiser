import React from "react";
import { Pie } from "react-chartjs-2";

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
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={countryData} />
    </div>
  );
};

export default CountryPieChart;
