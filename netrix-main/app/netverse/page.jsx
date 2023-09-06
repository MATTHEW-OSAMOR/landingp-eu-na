import Amplify from '@/components/Netverse/Amplify'
import Await from '@/components/Netverse/Await'
import Connect from '@/components/Netverse/Connect'
import Intro from '@/components/Netverse/Intro'
import Last from '@/components/Netverse/Last'
import Possible from '@/components/Netverse/Possible'
import Story from '@/components/Netverse/Story'
import React from 'react'

function Page() {
  return (
    <div>
      <div className="px-3 md:px-20 lg:px-24">
        <Intro />
        <Story />
        <Connect />
        <Possible />
        <Amplify />
        <Await />
        <Last />
      </div>
    </div>
  )
}

export default Page