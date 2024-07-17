import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import side from "../../assets/side.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
    },
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/create-account", formData);
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured");
      }
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center bg-cover bg-no-repeat">
      <div className="absolute h-screen inset-0 bg-black opacity-40"></div>
      <div className="w-full max-w-4xl flex p-12">
        <div className="hidden md:flex w-full">
          <img
            src={side}
            alt="side"
            className="border-white border-l-8 rounded-l-full object-cover w-full"
          />
        </div>
        <div className="relative bg-white p-12 shadow-md w-full max-w-md rounded-lg md:rounded-r-lg md:rounded-none">
          <h2 className="text-2xl font-head font-bold tracking-wider font-title mb-6 text-center">
            CREATE PROFILE
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="username"
                onChange={handleChange}
                className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phonenumber"
                placeholder="phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.street"
                placeholder="street"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.city"
                placeholder="city"
                value={formData.address.city}
                onChange={handleChange}className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.state"
                placeholder="state"
                value={formData.address.state}
                onChange={handleChange}className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.country"
                placeholder="country"
                value={formData.address.country}onChange={handleChange}className="w-full text-black font-semibold tracking-wide text-base border-b-2 border-inherit p-2 rounded focus:outline-none"
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
