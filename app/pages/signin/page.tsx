"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const router = useRouter()

    const handleSubmit = async () => {
        if (!email ||  !password) {
            return alert('fill out the feilds')
          }
        try {
            setLoading(true);
            const response = await axios.post("/api/user/signin", { email, password });
            const user_id= response.data.user_id
            // console.log('response user ',response.data.user_id)

            if (response.data.success) {
                alert("Sign in successful!");
                localStorage.setItem("local_userID",user_id);
                // router.push('/pages/fill_page/')
                router.push(`/pages/fill_page/`)
                // redirect('/pages/fill_page')


            } else {
                alert(response.data.message || "Failed to sign in.");
            }
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("An error occurred. Please try again.");
        }finally {
            setLoading(false);
          }
    };

    if (loading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader">
              <Loading></Loading>
            </div>
            {/* Or a custom animation */}
            <p className="text-lg text-gray-500"></p>
          </div>
        );
      }
      
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center md:text-3xl">Sign In</h1>

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
                            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full py-3 bg-slate-200 text-zinc-600 hover:text-white font-bold rounded hover:bg-blue-700 transition duration-300 md:text-lg">
                        Sign In
                    </button>
                    <div className="text-center text-zinc-400 pt-5">
                        Dont have an account..? <Link className="text-violet-600" href={'/pages/signup'}>Signup</Link>
                    </div>
                </form>

                

            </div>
        </div>
    );
};

export default SignInForm;
