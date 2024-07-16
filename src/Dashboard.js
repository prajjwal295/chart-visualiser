import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./Graphs/IntensityChart";
import LikelihoodChart from "./Graphs/LikelihoodChart";
import RelevanceChart from "./Graphs/RelevanceChart";
import CountryPieChart from "./Graphs/CountryPieChart";
import RegionPieChart from "./Graphs/RegionPieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import TopicsChart from "./Graphs/TopicsChart";
import YearChart from "./Graphs/YearChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/data");
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-white">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IntensityChart data={filteredData} />
        <LikelihoodChart data={filteredData} />
        <RelevanceChart data={filteredData} />
        <CountryPieChart data={filteredData} />
        <RegionPieChart data={filteredData} />
        <YearChart data={filteredData} />
        <TopicsChart data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
