'use client'

import Exp_form from '@/app/components/form_components/Exp_form'
import Profile_form from '@/app/components/form_components/Profile_form'
import Proj_form from '@/app/components/form_components/Proj_form'
import Skills_form from '@/app/components/form_components/Skill_form'
import SocialsForm from '@/app/components/form_components/Social_from'
import Link from 'next/link'
// import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Fill_page() {
  const [userId, setUserId] = useState<string>('');

  // const params = useParams(); // Use the hook to fetch params
  // const user_id = params?.user_id;

  useEffect(() => {
    const localUserId = localStorage.getItem('local_userID') || '';
    setUserId(localUserId);
  }, []);

  return (
    <div className='bg-slate-900'>
      <div className='flex flex-col justify-between items-center text-zinc-400 p-1'>
        <p className='my-5'>alredy have a gyan card..? </p>
        <div className=' flex justify-center'>
          <Link className='w-auto rounded-lg p-3 mb-3 bg-blue-500 text-white font-bold' href={`/pages/gyan_card/${userId}`}><button >View Gyan card</button></Link>
        </div>
      </div>
      <hr className='border-1 border-zinc-700' />
      <p className='text-2xl font-bold mt-5'>Create your Gyan card here...</p>
      <Profile_form></Profile_form>
      <Proj_form></Proj_form>
      <Skills_form></Skills_form>
      <Exp_form></Exp_form>
      <SocialsForm></SocialsForm>
      <div className=' flex justify-center'>
        <Link className='w-auto rounded-lg p-3 bg-green-500 text-white font-bold' href={`/pages/gyan_card/${userId}`}><button >View Gyan card</button></Link>
      </div>


    </div>
  )
}
