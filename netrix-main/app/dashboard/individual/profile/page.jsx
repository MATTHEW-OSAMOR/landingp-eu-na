"use client"
import CV from '@/components/Dashboard/Individual/Profile/CV'
import Employment from '@/components/Dashboard/Individual/Profile/Employment'
import EndSpace from '@/components/Dashboard/Individual/Profile/EndSpace'
import Header from '@/components/Dashboard/Individual/Profile/Header'
import JobPortCountry from '@/components/Dashboard/Individual/Profile/JobPortCountryBio'
import NameEmail from '@/components/Dashboard/Individual/Profile/NameEmail'
import Photo from '@/components/Dashboard/Individual/Profile/Photo'

import React from 'react'

function Page() {
  
  return (
    <div className='mx-auto max-w-screen-lg pt-14 px-4'>
      <Header />
      <CV />
      <NameEmail />
      <Photo />
      <JobPortCountry />
      <Employment />
      <EndSpace />
    </div>
  )
}

export default Page