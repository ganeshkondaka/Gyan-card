"use client"

import { useState } from "react";
import axios from "axios";

type Project = {
  name: string;
  link: string;
};

const Proj_form = () => {
  const [projectlu, setProjectlu] = useState<Project[]>([{ name: "", link: "" }]);

  
  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const updatedProjectlu = [...projectlu];
    console.log('the updated projectlu', updatedProjectlu)
    updatedProjectlu[index][field] = value;
    setProjectlu(updatedProjectlu);
  };


  const addProject = () => {
    setProjectlu([...projectlu, { name: "", link: "" }]);
  };


  const submitProjectlu = async () => {
    console.log('the final projectlu', projectlu)
    const userId = localStorage.getItem("local_userID") || '337c71b3-8e99-44fe-843f-4e438fc137b4'
    const projectswith_userid = projectlu.map((project) => ({ ...project, userId, }));

    try {
      console.log("projectswith_userid from client side:", projectswith_userid);
      const sent_projects = await axios.post("/api/all_data/projs", { projectswith_userid });
      console.log("projects sent successfully", sent_projects)

    } catch (error) {
      console.log("Failed to send projectlu:", error);
    }
  };

  console.log('the projectlu', projectlu)
  return (
    <div>
      <h1>Create Portfolio</h1>
      {projectlu.map((project, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <input
            className="text-black"
            type="text"
            placeholder="Project Name"
            value={project.name}
            onChange={(e) => handleProjectChange(index, "name", e.target.value)}
          />
          <input
            className="text-black"
            type="text"
            placeholder="Project Link"
            value={project.link}
            onChange={(e) => handleProjectChange(index, "link", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addProject}>Add Another Project</button>
      <button onClick={submitProjectlu}>Submit</button>
    </div>
  );
};

export default Proj_form;
