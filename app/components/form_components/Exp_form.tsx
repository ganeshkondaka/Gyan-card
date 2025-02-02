"use client"

import { useState } from "react";
import axios from "axios";

type exptype = {
    company: string;
    role: string;
    duration: string;
};

const Exp_form = () => {
    const [experiencelu, setexperiencelu] = useState<exptype[]>([{ company: "", role: "", duration: "" }]);
    const [indicator, setindicator] = useState(false);

    const handleExpChange = (index: number, field: keyof exptype, value: string) => {
        const updatedexperiencelu = [...experiencelu];
        // console.log('the updated experiencelu', updatedexperiencelu)
        updatedexperiencelu[index][field] = value;
        setexperiencelu(updatedexperiencelu);
    };


    const addExp = () => {
        setexperiencelu([...experiencelu, { company: "", role: "", duration: "" }]);
    };


    const submitexperiencelu = async () => {
        // console.log('the final experiencelu', experiencelu)
        if (experiencelu[0].company === '' || experiencelu[0].duration === '' || experiencelu[0].role === '') {
            return alert('fill out the form')
        }
        setindicator(true)
        const userId = await localStorage.getItem("local_userID")
        const exp_userid = experiencelu.map((a_exp) => ({ ...a_exp, userId, }));

        try {
            // console.log("exp_userid from client side:", exp_userid);
            await axios.post("/api/all_data/work_exp", { exp_userid });
            // console.log("exps sent successfully", sent_exp)
            alert('Professional experience updated..✅')
        } catch (error) {
            setindicator(false)
            console.log("Failed to send experiencelu:", error);
        }
    };

    // console.log('the experiencelu', experiencelu)
    return (
        <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Professional Experience</h1>
            <div className="w-full max-w-lg">
                {experiencelu.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-wrap gap-4 mb-4 bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                        <input
                            className="flex-1 min-w-[12rem] px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="company"
                            value={exp.company}
                            onChange={(e) =>
                                handleExpChange(index, "company", e.target.value)
                            }
                        />
                        <input
                            className="flex-1 min-w-[12rem] px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder=" Role"
                            value={exp.role}
                            onChange={(e) =>
                                handleExpChange(index, "role", e.target.value)
                            }
                        />
                        <input
                            className="flex-1 min-w-[12rem] px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder=" Duration"
                            value={exp.duration}
                            onChange={(e) =>
                                handleExpChange(index, "duration", e.target.value)
                            }
                        />
                    </div>
                ))}
                <p className="text-zinc-500 text-sm mb-4">wait for alert message after clicking submit for confirmation</p>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                        onClick={addExp}
                        className="w-full sm:w-auto px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
                    >
                        Add Another Experience
                    </button>
                    <button
                        onClick={submitexperiencelu}
                        className="w-full sm:w-auto px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600 font-semibold shadow-md transition-all"
                    >
                        Submit
                    </button>
                </div>
                {indicator && (
                    <p className="text-green-500 text-right text-sm mt-2">
                        professional experience uploaded: <span className="font-bold">✅</span>
                    </p>
                )}
            </div>
        </div>


    );
};

export default Exp_form;
