import Clients from '@/components/About/Clients'
import Contact from '@/components/About/Contact'
import Drives from '@/components/About/Drives'
import Intro from '@/components/About/Intro'
import Mission from '@/components/About/Mission'
import Team from '@/components/About/Team'
import Vision from '@/components/About/Vision'
import React from 'react'

function About() {
  return (
    <div className='px-10 md:px-20 min-h-[4300px]'>
      <Intro />
      <Drives />
      <Mission />
      <Vision />
      <Team />
      <Clients />
      <Contact />
    </div>
  )
}

export default About