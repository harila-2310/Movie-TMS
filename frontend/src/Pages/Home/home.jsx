import React from "react";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between p-4">
        <div className="w-20">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>
        <div className="relative w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 text-sm border rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button className="focus:outline-none">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
