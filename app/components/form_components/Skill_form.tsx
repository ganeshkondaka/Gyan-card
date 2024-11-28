"use client"

import { useEffect, useState } from "react";
import axios from "axios";


const Skills_form = () => {
    const [skill_lu, setskill_lu] = useState<string[]>([]);
    const [loacal_userID, setlocaluser_id] = useState('');

    useEffect(() => {
        // Access localStorage only in the browser
        const userId =  localStorage.getItem("local_userID")
        setlocaluser_id(userId||'');
    }, []);

    const handleskills = (csv_value: string) => {
        const updatedskill_lu = csv_value.split(",");
        console.log('the updated skill_lu', updatedskill_lu)
        setskill_lu(updatedskill_lu);
    };

    const submitskill_lu = async () => {
        console.log('the final skill_lu', skill_lu)
        try {
            console.log("skills_userid from client side:", skill_lu);
            const sent_skills = await axios.post("/api/all_data/skills", { skill_lu , loacal_userID});
            console.log("skills sent successfully", sent_skills)
        } catch (error) {
            console.log("Failed to send skill_lu:", error);
        }
    };

    console.log('the skill_lu', skill_lu)
    return (
        <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
  <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
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
    <button
      onClick={submitskill_lu}
      className="w-full px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all"
    >
      Submit
    </button>
  </div>
</div>

    );
};

export default Skills_form;
