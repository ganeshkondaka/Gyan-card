import React from 'react'
import type { Skills } from '@prisma/client'

export default function Skills_inner({ skills_list }: {
    skills_list: Skills[]
}) {
    // const skills:string[]=skills_list
    const skills_raw = skills_list

    // Explicitly type the skills array
    const skills_here: string[] = Array.isArray(skills_raw[0]?.skill)
        ? (skills_raw[0].skill as string[])
        : [];

    // console.log( skills_here)
    return (
        <div className="w-full mt-5">
            <div className="inline ">
                {
                    skills_here.map((skill)=>(
                        <div key={skill} className=" inline-flex text-zinc-300  m-1 md:h-10 p-2 border-2 border-zinc-700 rounded-md hover:bg-zinc-800">{skill}</div>
                    ))
                }
            </div>
        </div>
    )
}
