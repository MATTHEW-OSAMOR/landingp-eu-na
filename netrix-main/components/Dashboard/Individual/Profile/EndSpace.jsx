import Image from 'next/image'
import React from 'react'
import img from "./Images/looper.svg"

function EndSpace() {
  return (
    <div className='hidden lg:block h-[300px] relative'>
      <div className='-translate-x-0.5 lg:-translate-x-[20%] overflow-hidden w-full h-full'>
        <Image alt="" src={img} className='absolute top-0 left-0' />
      </div>
    </div>
  )
}

export default EndSpace