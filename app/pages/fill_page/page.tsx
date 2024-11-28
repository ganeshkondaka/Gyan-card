'use client'

import Exp_form from '@/app/components/form_components/Exp_form'
import Proj_form from '@/app/components/form_components/Proj_form'
import Skills_form from '@/app/components/form_components/Skill_form'
import Link from 'next/link'
// import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  // const params = useParams(); // Use the hook to fetch params
  // const user_id = params?.user_id;

  const user_id: String = localStorage.getItem('local_userID') || ''
  return (
    <div>
      <Proj_form></Proj_form>
      <Skills_form></Skills_form>
      <Exp_form></Exp_form>
      <div className=' flex justify-center'>
        <Link className='w-auto rounded-lg p-3 bg-green-500 text-white font-bold' href={`/pages/gyan_card/${user_id}`}><button >View Gyan card</button></Link>
      </div>


    </div>
  )
}
