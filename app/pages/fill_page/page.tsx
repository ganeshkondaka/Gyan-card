"use client"

import { useState } from "react";
import axios from "axios";
import { prisma } from "@/app/api/user/auth/route";

type Project = {
  name: string;
  link: string;
};

const PortfolioPage = () => {
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

    const userId = localStorage.getItem("local_userID") || 'NA'
    const projectswith_userid = projectlu.map((project) => ({ ...project, userId, }));
    
    try {

      const added_projectlu2 = await prisma.projects.createMany({
        data: projectswith_userid,
      })

      console.log('projectswith_userid ,',projectswith_userid)
      console.log('added_projectlu2 ,',added_projectlu2)

    } catch (error) {
      console.error("Failed to save projectlu:", error);
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

export default PortfolioPage;
