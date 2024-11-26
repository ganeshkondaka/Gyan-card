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


    const handleExpChange = (index: number, field: keyof exptype, value: string) => {
        const updatedexperiencelu = [...experiencelu];
        console.log('the updated experiencelu', updatedexperiencelu)
        updatedexperiencelu[index][field] = value;
        setexperiencelu(updatedexperiencelu);
    };


    const addExp = () => {
        setexperiencelu([...experiencelu, { company: "", role: "", duration: "" }]);
    };


    const submitexperiencelu = async () => {
        console.log('the final experiencelu', experiencelu)
        const userId = localStorage.getItem("local_userID") || '337c71b3-8e99-44fe-843f-4e438fc137b4'
        const exp_userid = experiencelu.map((a_exp) => ({ ...a_exp, userId, }));

        try {
            console.log("exp_userid from client side:", exp_userid);
            const sent_exp = await axios.post("/api/all_data/work_exp", { exp_userid });
            console.log("exps sent successfully", sent_exp)

        } catch (error) {
            console.log("Failed to send experiencelu:", error);
        }
    };

    console.log('the experiencelu', experiencelu)
    return (
        <div>
            <h1>Create Portfolio</h1>
            {experiencelu.map((exp, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <input
                        className="text-black"
                        type="text"
                        placeholder="exp Name"
                        value={exp.company}
                        onChange={(e) => handleExpChange(index, "company", e.target.value)}
                    />
                    <input
                        className="text-black"
                        type="text"
                        placeholder="exp role"
                        value={exp.role}
                        onChange={(e) => handleExpChange(index, "role", e.target.value)}
                    />
                    <input
                        className="text-black"
                        type="text"
                        placeholder="exp duration"
                        value={exp.duration}
                        onChange={(e) => handleExpChange(index, "duration", e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addExp}>Add Another exp</button>
            <button onClick={submitexperiencelu}>Submit</button>
        </div>
    );
};

export default Exp_form;
