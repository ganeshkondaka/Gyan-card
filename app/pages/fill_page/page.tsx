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
    <div>
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
