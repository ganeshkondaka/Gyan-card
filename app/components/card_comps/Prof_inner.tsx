'use client'

import { CldImage } from 'next-cloudinary'
// import Image from 'next/image'
import React from 'react'
import type { ImgQuote } from '@prisma/client'

interface ProfInnerProps {
    user_name: string;
    prof_data: ImgQuote;
}


export default function Prof_inner({ user_name, prof_data }: ProfInnerProps) {
    // const [public_id, setpublic_id] = useState('gfct5blv8jwpxqbp39nx')

    // console.log('------------',user_name)
    // console.log('------------',prof_data)
    const tag_quote: string = prof_data.quote
    const public_id: string = prof_data.p_id

    // console.log('------------', public_id)
    // console.log('------------', tag_quote)

    return (
        <div className="flex  items-center justify-around py-3">
            <div className="">
                <div className=" text-3xl md:text-5xl font-bold tracking-tight "> {user_name}</div>
                <div className="text-gray-500 mt-2">{tag_quote}</div>
                {/* <div>From concept to creation, coding websites is my greatest joy.</div> */}
            </div>
            <div className="">


                {public_id && (
                    //image prints here
                    <CldImage
                        className=" object-cover rounded-full border-8 md:border-8 border-zinc-800  hover:scale-110 transition-transform duration-300 "
                        src={public_id}
                        alt='user image'
                        width={'200'}
                        height={'200'}
                        priority
                    />
                )}

                {/* <Image 
                src="/dp2.jpg" 
                alt="ganesh image"
                width={200}
                height={200}
                className=" object-cover rounded-full border-4 md:border-8 dark:border-zinc-800 border-zinc-900 hover:scale-110 transition-transform duration-300 " /> */}
            </div>
        </div>
    )
}
