import React, { useState } from "react";
import axios from "axios";

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    end_year: "",
    intensity: "",
    sector: "",
    topic: "",
    insight: "",
    url: "",
    region: "",
    start_year: "",
    impact: "",
    added: "",
    published: "",
    country: "",
    relevance: "",
    pestle: "",
    source: "",
    title: "",
    likelihood: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/PostData", formData)
      .then((response) => {
        alert("Data added successfully");
        setFormData({
          end_year: "",
          intensity: "",
          sector: "",
          topic: "",
          insight: "",
          url: "",
          region: "",
          start_year: "",
          impact: "",
          added: "",
          published: "",
          country: "",
          relevance: "",
          pestle: "",
          source: "",
          title: "",
          likelihood: "",
        });
      })
      .catch((error) => {
        console.error("There was an error adding the data!", error);
      });
  };

  return (
    <div
      id="add-data"
      className="min-h-screen bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-center py-12"
    >
      <div className="max-w-3xl w-full p-8 bg-white text-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Data</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "End Year", name: "end_year", type: "text" },
            { label: "Intensity", name: "intensity", type: "number" },
            { label: "Sector", name: "sector", type: "text" },
            { label: "Topic", name: "topic", type: "text" },
            { label: "Insight", name: "insight", type: "text" },
            { label: "URL", name: "url", type: "url" },
            { label: "Region", name: "region", type: "text" },
            { label: "Start Year", name: "start_year", type: "text" },
            { label: "Impact", name: "impact", type: "text" },
            { label: "Added", name: "added", type: "datetime-local" },
            { label: "Published", name: "published", type: "datetime-local" },
            { label: "Country", name: "country", type: "text" },
            { label: "Relevance", name: "relevance", type: "number" },
            { label: "Pestle", name: "pestle", type: "text" },
            { label: "Source", name: "source", type: "text" },
            { label: "Title", name: "title", type: "text" },
            { label: "Likelihood", name: "likelihood", type: "number" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-semibold text-gray-700 mb-2">
                {field.label}:
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-colors duration-300 w-full"
          >
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDataForm;
