import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  console.log(formData);
  return (
    <section className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[380px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[60px]">
              <img className="w-full h-full" src="/images/logo.png" alt="" />
            </div>
          </div>
          <h2 className="text-xl mb-3 text-center">
            Let's start a new journey with us
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleInputChange}
                value={formData.name}
                className="px-3 text-[#d0d2d6]  py-2 outline-none border-slate-700 bg-transparent border rounded focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 text-[#d0d2d6]  py-2 outline-none border-slate-700 bg-transparent border rounded focus:border-indigo-500 overflow-hidden"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 text-[#d0d2d6]  py-2 outline-none border-slate-700 bg-transparent border rounded focus:border-indigo-500 overflow-hidden"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center gap-3 mb-3 ">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I agree to privacy and policy and terms
              </label>
            </div>
            <p className="text-sm mb-3">
              Please register to your account and start your business
            </p>
            <button
              type="submit"
              className="bg-blue-600 w-full hover:shadow-ble-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              Sign up
            </button>
            <div className="flex justify-center mb-3 gap-3">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
