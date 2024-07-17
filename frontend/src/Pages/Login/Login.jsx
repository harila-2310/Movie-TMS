import React from "react";
import side from "../../assets/side.jpg";

const Login = () => {
  return (
<<<<<<< HEAD
    <div>
      
    </div>
  )
}
=======
    <div
      className="h-screen flex items-center justify-center bg-cover bg-no-repeat"
    >
      <div className="absolute h-screen inset-0 bg-black opacity-40"></div>
      <div className="w-full max-w-4xl flex p-12">
        <div className="hidden md:flex w-2/5">
          <img
            src={side}
            alt="side"
            className="border-slate-400 border-l-8 rounded-l-full object-cover w-full"
          />
        </div>
        <div className="relative bg-slate-400 p-12 shadow-md w-2/5 max-w-sm rounded-lg md:rounded-r-lg md:rounded-none">
          <h2 className="text-2xl font-head font-bold tracking-wider font-title mb-6 text-center">
            LOGIN
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="emailOrPhoneNumber"
                placeholder="Email or Phone Number"
                // value={formData.emailOrPhoneNumber}
                // onChange={handleChange}
                className="w-full font-semibold tracking-wide text-base p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
                className="w-full font-semibold tracking-wide text-base p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
>>>>>>> ac3e7e1ec110d08a4d1019843dd8a96d848a03f7

export default Login;