'use client'

import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';

export const Upload_images = () => {
    // const [public_id, setpublic_id] = useState("gfct5blv8jwpxqbp39nx")
    const [public_id, setpublic_id] = useState("")
    return (
        <>
        {public_id && (
            //image prints here
                <CldImage src={public_id} alt='user image' width={'300'} height={'300'}></CldImage>
            )}
            {/* upload button this is */}
            <CldUploadWidget uploadPreset='guns_preset' onSuccess={(results: any) => {
                    if (results.event === 'success' && results.info?.public_id) {
                        setpublic_id(results.info.public_id);
                    }
                }}>
                {({ open }) => <button className='bg-zinc-800 p-4 rounded-lg' onClick={() => open()}> + </button>}
            </CldUploadWidget>
        </>
    )
}
