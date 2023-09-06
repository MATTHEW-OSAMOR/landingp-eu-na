import Image from 'next/image'
import React from 'react'
import img from "./Images/Vector 2.png"

function Pssible() {
  return (
    <div className='py-20 '>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-5 lg:mb-0 w-[90%] lg:w-[50%] mx-auto">
          <Image src={img} alt="Netrix Connectivity" className='mx-auto' />
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className='text-netBlue text-3xl md:text-4xl font-bold mb-5'>Collaboration Amplified:</h1>
          <p className="font-light opacity-70">
            In the Net Trix Verse, collaboration is key. Share insights, track progress,
            and spark creativity as you connect with colleagues, partners, and
            clients. It&apos;s a vibrant hub where ideas flourish, and the synergy of minds
            fuels innovation.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Pssible