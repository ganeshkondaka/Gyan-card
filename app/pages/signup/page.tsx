"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const CreateUserForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !name || !password) {
      return alert('fill out the feilds')
    }
    try {
      const response = await axios.post("/api/user/auth", { email, name, password });
      if (response.data.success) {
        localStorage.setItem("local_userID", response.data.userid);
        alert("User created successfully!");
      } else {
        alert(response.data.message || "Failed to create user.");
      }
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-3xl">Sign Up</h1>

        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block mb-1 text-sm font-medium md:text-base" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Name Input */}
          <div>
            <label className="block mb-1 text-sm font-medium md:text-base" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1 text-sm font-medium md:text-base" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 bg-slate-200 text-zinc-600 hover:text-white font-bold rounded hover:bg-blue-700 transition duration-300 md:text-lg">
            Submit
          </button>
          <div className="text-center text-zinc-400 pt-5">
            already have an account..? <Link className="text-violet-600" href={'/pages/signin'}>Signin</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
