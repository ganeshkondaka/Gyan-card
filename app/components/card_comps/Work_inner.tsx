import { Briefcase } from 'lucide-react'
import React from 'react'
import type { Work_exp } from '@prisma/client'

export default function Work_inner({ exp_list }: {
    exp_list: Work_exp[]
}) {
    return (
        <div>
            {
                exp_list.map((a_exp, index) => (
                    <div key={index} className="flex items-center  max-h-auto p-2 border-2 border-zinc-800 rounded-md mt-5">
                        <div className="  p-2">
                            <Briefcase color="#5e0056" />
                        </div>
                        <div className="p-2">
                            <div className="text-zinc-300 font-bold">{a_exp.company}</div>
                            <div className="text-zinc-500">{a_exp.role}</div>
                            <div className="text-zinc-600">{a_exp.duration}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
