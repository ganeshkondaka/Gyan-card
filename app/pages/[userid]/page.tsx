// import { useEffect, useState } from "react";
// import axios from "axios";

// interface idtype{
//     userId:string
// }

// const UserProfile = ({ userId }:idtype) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`/api/user/profile?userId=${userId}`);
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error("Failed to fetch user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   if (!userData) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>{userData.name}'s Profile</h1>
//       <h2>Projects</h2>
//       <ul>
//         {userData.projects.map((project) => (
//           <li key={project.id}>
//             {project.name} - <a href={project.link}>{project.link}</a>
//           </li>
//         ))}
//       </ul>
//       <h2>Skills</h2>
//       <ul>
//         {userData.skills.map((skill) => (
//           <li key={skill.id}>{skill.name}</li>
//         ))}
//       </ul>
//       <h2>Work Experience</h2>
//       <ul>
//         {userData.workExp.map((work) => (
//           <li key={work.id}>
//             {work.role} at {work.company}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserProfile;
