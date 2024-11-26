import Exp_form from '@/app/components/form_components/Exp_form'
import Proj_form from '@/app/components/form_components/Proj_form'
import Skills_form from '@/app/components/form_components/Skill_form'
import React from 'react'

export default function page() {
  return (
    <div>
      <Proj_form></Proj_form>
      <Skills_form></Skills_form>
      <Exp_form></Exp_form>
    </div>
  )
}
