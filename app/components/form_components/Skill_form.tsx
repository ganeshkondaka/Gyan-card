"use client"

import { useEffect, useState } from "react";
import axios from "axios";


const Skills_form = () => {
    const [skill_lu, setskill_lu] = useState<string[]>([]);
    const [loacal_userID, setlocaluser_id] = useState('');

    useEffect(() => {
        // Access localStorage only in the browser
        const userId = localStorage.getItem("local_userID") || "337c71b3-8e99-44fe-843f-4e438fc137b4";
        setlocaluser_id(userId);
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
        <div>
            <h1>Create Portfolio</h1>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    className="text-black"
                    type="text"
                    placeholder="enter your skills in csv format here."
                    value={skill_lu}
                    onChange={(e) => handleskills(e.target.value)}
                />
            </div>

            <button onClick={submitskill_lu}>Submit</button>
        </div>
    );
};

export default Skills_form;
