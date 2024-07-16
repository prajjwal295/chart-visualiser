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
import CityChart from "./Graphs/CityChart";
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
  const [filters, setFilters] = useState({
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

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

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    let filtered = data;

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filtered = filtered.filter((item) =>
          item[key].toString().includes(filters[key])
        );
      }
    });

    setFilteredData(filtered);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-white">Dashboard</h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { label: "End Year", name: "endYear", type: "text" },
          { label: "Topic", name: "topic", type: "text" },
          { label: "Sector", name: "sector", type: "text" },
          { label: "Region", name: "region", type: "text" },
          { label: "PEST", name: "pest", type: "text" },
          { label: "Source", name: "source", type: "text" },
          { label: "SWOT", name: "swot", type: "text" },
          { label: "Country", name: "country", type: "text" },
          { label: "City", name: "city", type: "text" },
        ].map((filter) => (
          <div key={filter.name} className="w-full md:w-1/3 lg:w-1/4">
            <label className="block text-gray-200 mb-1">{filter.label}:</label>
            <input
              type={filter.type}
              name={filter.name}
              value={filters[filter.name]}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>
        ))}
      </div>

      <IntensityChart data={filteredData} />
      <LikelihoodChart data={filteredData} />
      <RelevanceChart data={filteredData} />
      <CountryPieChart data={filteredData} />
      <RegionPieChart data={filteredData} />
      <YearChart data={filteredData} />
      <TopicsChart data={filteredData} />
      <CityChart data={filteredData} />
    </div>
  );
};

export default Dashboard;
