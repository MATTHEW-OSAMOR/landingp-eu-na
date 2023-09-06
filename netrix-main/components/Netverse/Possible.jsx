import Image from 'next/image'
import React from 'react'
import img from "./Images/Vector 1.png"

function Pssible() {
  return (
    <div className='py-20 '>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-5 lg:mb-0 w-[90%] lg:w-[50%] mx-auto order-1 lg:order-2">
          <Image src={img} alt="Netrix Connectivity" className='mx-auto' />
        </div>
        <div className="w-full lg:w-[50%] order-2 lg:order-1">
          <h1 className='text-netBlue text-3xl md:text-4xl font-bold mb-5'>Your Portal to Possibilities</h1>
          <p className="font-light opacity-70">
            Enter the Net Trix Verse and discover a space where your needs are
            paramount. Whether you&apos;re exploring our services, managing projects,
            or accessing tools, the Verse becomes your personalized portal. It&apos;s
            where the complexity of technology transforms into the simplicity of
            progress.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Pssible