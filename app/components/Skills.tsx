import { skills_list } from "../data"

export default function Skills() {
    const skills:string[]=skills_list
  return (
    <div className="w-full mt-5">
        <div className="inline ">
            {
                skills.map((skill)=>(
                    <div key={skill} className=" inline-flex text-zinc-400  m-1 md:h-10 p-2 border-2 border-zinc-800 rounded-md hover:bg-zinc-800">{skill}</div>
                ))
            }
        </div>
    </div>
  )
}
