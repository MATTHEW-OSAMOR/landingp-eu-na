import Image from 'next/image'
import React from 'react'
import img from "./Images/vr.png"

function Connect() {
  return (
    <div className='py-20 '>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-[50%] mx-auto">
          <Image src={img} alt="Netrix Connectivity" />
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className='text-netBlue text-3xl md:text-4xl font-bold mb-5'>Unveiling Connectivity</h1>
          <p className="font-light opacity-70">
            The Net Trix Verse isn&apos;t just about technology; it&apos;s about empowering
            you. No longer confined by silos, you&apos;ll find a gateway to all our offerings
            with a single click. Seamlessly navigate from one project to another,
            effortlessly switch between apps, and discover new avenues for
            growth—all within the harmonious embrace of the Verse
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect