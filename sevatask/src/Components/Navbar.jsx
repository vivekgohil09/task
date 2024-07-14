import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between ">
        <h1 className="text-white text-2xl font-black">SEVA</h1>
        <div>
          <Link to="/" className="text-white text-2xl mr-4">
            Login
          </Link>
          <Link to="/" className="text-white text-2xl mr-4">
            Sign-Up
          </Link>
          <Link to="/admin" className="text-white text-2xl mr-4">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
