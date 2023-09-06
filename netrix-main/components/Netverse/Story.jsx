import Image from 'next/image'
import React from 'react'
import img from "./Images/laptopclose.png"

function Story() {
  return (
    <div>
      <h1 className="text-netBlue text-3xl font-bold mb-5 block lg:hidden">The Story Behind the Verse</h1>
      <div className="mx-auto max-w-screen-lg rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-white items-center">
        <div className="p-5 lg:p-10 order-2 py-10 lg:order-1 relative">
          <span className="bg-yellow-400 block lg:hidden px-5 py-2 rounded-3xl absolute -top-[10%]">Our Story</span>
          <h1 className="text-netBlue text-3xl font-bold mb-5 hidden lg:block">The Story Behind the Verse:</h1>
          <p className='font-light opacity-70'>
            Our journey began with a vision: to bridge the gaps between
            our platforms, applications, and projects, and weave them
            into an integrated ecosystem. This vision birthed the Net
            Trix Verse—a convergence of brilliance, interconnecting
            the dots to deliver a more unified experience.
          </p>
        </div>
        <Image src={img} alt="Netrix Story" className='lg:w-[50%] order-1 lg:order-2' />
      </div>
    </div>
  )
}

export default Story