import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Energy Data Dashboard</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/add-data" className="hover:underline">
            Add Data
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
