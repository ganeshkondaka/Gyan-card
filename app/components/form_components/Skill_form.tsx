"use client"

import { useEffect, useState } from "react";
import axios from "axios";


const Skills_form = () => {
  const [skill_lu, setskill_lu] = useState<string[]>([]);
  const [loacal_userID, setlocaluser_id] = useState('');
  const [indicator, setindicator] = useState(false);

  useEffect(() => {
    // Access localStorage only in the browser
    const userId = localStorage.getItem("local_userID")
    setlocaluser_id(userId || '');
  }, []);

  const handleskills = (csv_value: string) => {
    const updatedskill_lu = csv_value.split(",");
    // console.log('the updated skill_lu', updatedskill_lu)
    setskill_lu(updatedskill_lu);
  };

  const submitskill_lu = async () => {
    // console.log('the final skill_lu', skill_lu)
    if (skill_lu[0] === '' || skill_lu.length === 0) {
      return alert('fill out the form')
    }
    setindicator(true)
    try {
      // console.log("skills_userid from client side:", skill_lu);
      await axios.post("/api/all_data/skills", { skill_lu, loacal_userID });
      // console.log("skills sent successfully", sent_skills)
      alert('skills updated..✅')

    } catch (error) {
      setindicator(false)
      console.log("Failed to send skill_lu:", error);
    }
  };

  // console.log('the skill_lu', skill_lu)
  return (
    <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Skills</h1>
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your skills in CSV format here."
            value={skill_lu}
            onChange={(e) => handleskills(e.target.value)}
          />
        </div>
        <p className="text-zinc-500 text-sm mb-4">wait for alert message after clicking submit for confirmation</p>
        <button
          onClick={submitskill_lu}
          className="w-full px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all"
        >
          Submit
        </button>
        {indicator && (
          <p className="text-green-500 text-right text-sm mt-2">
            Skills uploaded: <span className="font-bold">✅</span>
          </p>
        )}
      </div>
    </div>

  );
};

export default Skills_form;
