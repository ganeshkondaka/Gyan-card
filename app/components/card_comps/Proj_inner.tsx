import { Cable } from 'lucide-react'
import React from 'react'
import type { Projects } from '@prisma/client'

export default function Proj_inner({proj_list}:{
    proj_list:Projects[]
} ) {
    const projects = proj_list
    return (
        <div className="flex justify-center items-center flex-col w-full mt-5">
          {projects.map((project, index) => (
            <a key={index}
              href={project.link}
              className="flex items-center font-bold text-zinc-400 w-full m-2 md:h-10 p-2 border-2 border-zinc-800 rounded-md hover:bg-zinc-800">
              <span className="mr-3">
                <Cable color="#004734" size={20} />
              </span>
              {project.name}</a>
          ))}
        </div>
      )
}
