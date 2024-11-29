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
    // console.log('the updated projectlu', updatedProjectlu)
    updatedProjectlu[index][field] = value;
    setProjectlu(updatedProjectlu);
  };


  const addProject = () => {
    setProjectlu([...projectlu, { name: "", link: "" }]);
  };


  const submitProjectlu = async () => {
    // console.log('the final projectlu', projectlu)
    const userId =  localStorage.getItem("local_userID")
    const projectswith_userid = projectlu.map((project) => ({ ...project, userId, }));

    try {
      // console.log("projectswith_userid from client side:", projectswith_userid);
       await axios.post("/api/all_data/projs", { projectswith_userid });
      // console.log("projects sent successfully", sent_projects)

    } catch (error) {
      console.log("Failed to send projectlu:", error);
    }
  };

  // console.log('the projectlu', projectlu)
  return (
    <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
  <h1 className="text-3xl font-bold mb-6 text-center">Add Projects</h1>
  <div className="w-full max-w-lg">
    {projectlu.map((project, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center gap-4 mb-4 bg-gray-800 p-4 rounded-lg shadow-md"
      >
        <input
          className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Project Name"
          value={project.name}
          onChange={(e) =>
            handleProjectChange(index, "name", e.target.value)
          }
        />
        <input
          className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Project Link"
          value={project.link}
          onChange={(e) =>
            handleProjectChange(index, "link", e.target.value)
          }
        />
      </div>
    ))}
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <button
        onClick={addProject}
        className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
      >
        Add Another Project
      </button>
      <button
        onClick={submitProjectlu}
        className="px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all"
      >
        Submit
      </button>
    </div>
  </div>
</div>

  );
};

export default Proj_form;
