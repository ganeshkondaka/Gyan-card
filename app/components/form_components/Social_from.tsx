"use client";

import { useState } from "react";
import axios from "axios";

type Social = {
  name: string;
  link: string;
};

const Social_form = () => {
  const [socialLinks, setSocialLinks] = useState<Social[]>([
    { name: "GitHub", link: "" },
    { name: "Mail", link: "" },
    { name: "LinkedIn", link: "" },
    { name: "Twitter", link: "" },
  ]);

  const handleLinkChange = (index: number, value: string) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks[index].link = value;
    setSocialLinks(updatedSocialLinks);
  };

  // console.log('teh social links are :',socialLinks)

  const submitSocialLinks = async () => {
    
    const userId = localStorage.getItem("local_userID");
    // console.log('user id :',userId)
    if (!userId) {
      alert("User ID not found. Please log in.");
      return;
    }
    
    const socialswith_userid = socialLinks.map((social) => ({
      ...social,
      userId,
    }));
    
    try {
      // console.log('the social links before are :',socialLinks)
      await axios.post("/api/all_data/socials", { socialswith_userid });
      // console.log('the social links after are :',socialLinks)
      alert("Social media links submitted successfully!");
    } catch (error) {
      console.error("Failed to send social media links:", error);
      alert("Failed to submit social media links.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Social Media Links</h1>
      <div className="w-full max-w-lg">
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-4 mb-4 bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <label className="flex-1 text-lg font-semibold">{social.name}</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="url"
              required
              placeholder={`Enter your ${social.name} link`}
              value={social.link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={submitSocialLinks}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social_form;


























// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';

// const SocialsForm = () => {
//   const [socialLinks, setSocialLinks] = useState({
//     github: '',
//     mail: '',
//     linkedin: '',
//     twitter: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSocialLinks({ ...socialLinks, [name]: value });
//   };

//   console.log('the social links are :',socialLinks)
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const socialsData = Object.entries(socialLinks).map(([name, link]) => ({
// //       name,
// //       link,
// //       userId,
// //     }));

// //     try {
// //       const response = await axios.post('/api/socials', { socials: socialsData });
// //       console.log('Social media links saved successfully:', response.data);
// //       alert('Social media links saved successfully!');
// //     } catch (error) {
// //       console.error('Error saving social media links:', error);
// //       alert('Failed to save social media links.');
// //     }
// //   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Add Social Media Links</h2>
//       <form onSubmit={()=>{}} className="space-y-4">
//         <div>
//           <label htmlFor="github" className="block font-medium">GitHub</label>
//           <input
//             type="url"
//             id="github"
//             name="github"
//             value={socialLinks.github}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="https://github.com/username"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="mail" className="block font-medium">Mail</label>
//           <input
//             type="email"
//             id="mail"
//             name="mail"
//             value={socialLinks.mail}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="mailto:example@mail.com"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="linkedin" className="block font-medium">LinkedIn</label>
//           <input
//             type="url"
//             id="linkedin"
//             name="linkedin"
//             value={socialLinks.linkedin}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="https://linkedin.com/in/username"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="twitter" className="block font-medium">Twitter</label>
//           <input
//             type="url"
//             id="twitter"
//             name="twitter"
//             value={socialLinks.twitter}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="https://twitter.com/username"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Save Links
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SocialsForm;




























// "use client"

// import { useState } from "react";
// import axios from "axios";

// type socia = {
//   name: string;
//   link: string;
// };

// const Social_form = () => {
//   const [socialu, setsocialu] = useState<socia[]>([{ name: "", link: "" }]);

  
//   const handleProjectChange = (index: number, field: keyof socia, value: string) => {
//     const updatedsocialu = [...socialu];
//     // console.log('the updated projectlu', updatedProjectlu)
//     updatedsocialu[index][field] = value;
//     setsocialu(updatedsocialu);
//   };


//   const addProject = () => {
//     setProjectlu([...projectlu, { name: "", link: "" }]);
//   };


//   const submitProjectlu = async () => {
//     // console.log('the final projectlu', projectlu)
//     if (projectlu[0].name ==='' ){
//       return alert('fill out the form')
//     }
//     const userId =  localStorage.getItem("local_userID")
//     const projectswith_userid = projectlu.map((project) => ({ ...project, userId, }));

//     try {
//       // console.log("projectswith_userid from client side:", projectswith_userid);
//        await axios.post("/api/all_data/projs", { projectswith_userid });
//       // console.log("projects sent successfully", sent_projects)

//     } catch (error) {
//       console.log("Failed to send projectlu:", error);
//     }
//   };

//   // console.log('the projectlu', projectlu)
//   return (
//     <div className="bg-gray-900 min-h-auto flex flex-col items-center py-8 px-4 sm:px-8 text-white">
//   <h1 className="text-3xl font-bold mb-6 text-center">Add Projects</h1>
//   <div className="w-full max-w-lg">
//     {projectlu.map((project, index) => (
//       <div
//         key={index}
//         className="flex flex-col sm:flex-row items-center gap-4 mb-4 bg-gray-800 p-4 rounded-lg shadow-md"
//       >
//         <input
//           className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="text"
//           placeholder="Project Name"
//           required
//           value={project.name}
//           onChange={(e) =>
//             handleProjectChange(index, "name", e.target.value)
//           }
//         />
//         <input
//           className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="text"
//           required
//           placeholder="Project Link"
//           value={project.link}
//           onChange={(e) =>
//             handleProjectChange(index, "link", e.target.value)
//           }
//         />
//       </div>
//     ))}
//     <div className="flex flex-col sm:flex-row justify-between gap-4">
//       <button
//         onClick={addProject}
//         className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
//       >
//         Add Another Project
//       </button>
//       <button
//         onClick={submitProjectlu}
//         className="px-4 py-2 rounded-md bg-slate-200 hover:bg-zinc-500 text-zinc-600  font-semibold shadow-md transition-all"
//       >
//         Submit
//       </button>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Social_form;
