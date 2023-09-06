import Image from 'next/image'
import React from 'react'
import img from "./Images/laptopclose.png"
function Await() {
  return (
    <div className="max-w-screen-lg mx-auto pt-28 pb-12 lg:text-center">
      <h1 className="text-3xl lg:text-4xl font-black text-netBlue mb-5 lg:mb-0">What Awaits You</h1>
      <div className="flex flex-col rounded-3xl bg-white overflow-hidden lg:bg-transparent lg:rounded-none">
        <Image src={img} alt="" className='block lg:hidden' />
        <div className='font-light relative px-5 py-10'>
          <span className="bg-yellow-400 block lg:hidden px-5 py-2 rounded-3xl absolute -top-[5%]">NET-VERSE</span>
          <p className="opacity-75">
            As we unveil the Net Trix Verse, you&apos;ll find more than just a streamlined interface. You&apos;ll discover a vision brought to life—a vision of cohesion,
            accessibility, and empowerment. The Verse heralds a new era of possibilities, where every interaction becomes an opportunity to thrive.
            Welcome to the Net Trix Verse—where the future unfolds, and connectivity reigns supreme. Embrace the convergence, explore the
            coherence, and journey through a realm where innovation connects. Dive in, experience the transformation, and be a part of our
            interconnected journey. Welcome to the Net Trix Verse. Empowerment Awaits.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Await