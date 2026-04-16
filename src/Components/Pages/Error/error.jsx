import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 text-center">

        {/* 404 Number */}
        <h1 className="text-7xl font-bold text-green-500">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-green-500 mx-auto my-6 rounded-full"></div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;