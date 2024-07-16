import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddDataForm from "./AddDataForm";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-data" element={<AddDataForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
