import Image from 'next/image'
import React from 'react'
import img from "./Images/looper.svg"

function Last() {
  return (
    <div className='relative h-[300px] overflow-hidden -left-[100px]'>
        <Image src={img} alt="" className='absolute'/>
    </div>
  )
}

export default Last