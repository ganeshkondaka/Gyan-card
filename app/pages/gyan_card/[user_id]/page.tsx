'use client'

import Prof_inner from "@/app/components/card_comps/Prof_inner";
import Proj_inner from "@/app/components/card_comps/Proj_inner";
import Skills_inner from "@/app/components/card_comps/Skills_inner";
import Socials_inner from "@/app/components/card_comps/Socials_inner";
import Work_inner from "@/app/components/card_comps/Work_inner";
import Loading from "@/app/components/Loading";

import type {
  Projects as project_type,
  Work_exp as work_exp_type,
  Skills as skills_type,
  ImgQuote as profile_type,
  Socials as social_type
} from "@prisma/client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function User_id() {


  const params = useParams(); // Use the hook to fetch params
  const userid = params?.user_id;
  // useEffect(() => {

  // const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true); // Loading state

  const [username, setusername] = useState('');
  const [profile, setprofile] = useState<profile_type[]>([]);
  const [projects, setprojects] = useState<project_type[]>([]);
  const [skills, setskills] = useState<skills_type[]>([]);
  const [work_exprns, setwork_exprns] = useState<work_exp_type[]>([]);
  const [socials, setsocials] = useState<social_type[]>([]);
  // export default function User_id({ params }:
  //   {
  //     params: { user_id: string }
  //   }
  // ) {

  // console.log('teh user id slugpage :', userid)

  useEffect(() => {

    async function handle_click() {

      if (!userid) {
        return console.log("user id not found in client"); // Wait for the query parameter to be available
      }

      try {
        const response = await axios.get(`/api/final_data?userId=${userid}`);
        // console.log(response.data.data)

        // setUserData(response.data.data);

        // console.log('logged state variable is :', userData)
        setprojects(response.data.data.Projects)
        setskills(response.data.data.Skills)
        setwork_exprns(response.data.data.Work_exp)
        setusername(response.data.data.name)
        setprofile(response.data.data.ImgQuote)
        setsocials(response.data.data.Socials)
        // redirect('/')
      } catch (err) {
        console.log("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }

    }

    // useEffect(() => {
    //   console.log('Updated userData:', userData);
    // }, [userData]);

    handle_click()

  }, [userid])


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">
          <Loading></Loading>
        </div>
        {/* Or a custom animation */}
        <p className="text-lg text-gray-500"></p>
      </div>
    );
  }

  // console.log('logged user state variable is :', userData)
  // console.log('logged proje state variable is :', projects)
  // console.log('logged skills state variable is :', skills)
  // console.log('logged work_exp state variable is :', work_exprns)
  // console.log('logged profile state variable is :', profile)


  return (
    <div className="flex justify-center">

      {/* <div> */}
      {/* userid from the param is {params.user_id} <br /> */}
      {/* <button onClick={handle_click}>click</button> */}
      {/* </div> */}

      <div className="flex  flex-col max-w-full md:max-w-[52%] border-2 border-zinc-700 m-3 px-4">
        {/* <h1 className="text-3xl">gyan card</h1> */}
        {/* <Profile ></Profile> */}

        <Prof_inner user_name={username} prof_data={profile[0]}></Prof_inner>
        <div className="w-full my-2">
          <p className="text-2xl md:text-3xl font-bold">Projects</p>
          <div className="text-gray-500 my-3"> All the projects that i have done.</div>
          {/* <Projects proj_list={projects}></Projects> */}
          <Proj_inner proj_list={projects}></Proj_inner>

        </div>
        <div className="w-full my-2">
          <p className="text-2xl md:text-3xl font-bold">Skills</p>
          <div className="text-gray-500 my-3"> My skills are in</div>
          {/* <Skills skills_list={skills}></Skills> */}
          <Skills_inner skills_list={skills}></Skills_inner>

        </div>
        {/* <div className="w-full my-2">
                    <p className="text-2xl md:text-3xl font-bold">Acheivements</p>
                    <div className="text-gray-500 my-3"> These are all my Acheivements</div>
                </div> */}
        <div className="w-full my-2">
          <p className="text-2xl md:text-3xl font-bold">Work-Experience</p>
          <div className="text-gray-500 my-3">My professional Experience as a intern</div>
          {/* <Work_exp exp_list={work_exprns}/> */}
          <Work_inner exp_list={work_exprns}></Work_inner>

        </div>
        <div className="mt-8">
          <hr className=" border-zinc-700" />
          <Socials_inner social_links={socials}></Socials_inner>
      
        </div>
      </div>
    </div>
  )
}
