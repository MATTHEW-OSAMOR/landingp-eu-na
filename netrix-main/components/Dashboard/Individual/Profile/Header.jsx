import Image from 'next/image'
import React from 'react'
import pattern from "./Images/pattern.svg"

function Header() {
    return (
        <div>
            <h1 className="text-netBlue text-3xl lg:text-5xl font-bold pb-10">Profile Setup</h1>
            <div className='rounded-3xl overflow-hidden'>
                <div className='bg-gradient-to-r from-blue-400 to-netBlue'>
                    <Image src={pattern} className='ms-auto max-h-[100px] lg:max-h-max w-auto' alt="" />
                </div>
                <div className='bg-white p-10'>
                    <Image width={190} height={190} src="https://th.bing.com/th/id/OIP.h0hPZzAziPf3v-srHQTdWQHaHa?pid=ImgDet&rs=1" alt="profile"
                        className='w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] rounded-full border-[4px] border-white -translate-y-[100px] lg:-translate-y-[150px]' />
                    <div className="flex flex-col lg:flex-row -mt-[90px] lg:-mt-[130px] lg:items-end">
                        <div>
                            <h1 className="font-bold text-xl opacity-80">Edit Profile</h1>
                            <p className="opacity-70">
                                Make changes to your profile and personal details here
                            </p>
                        </div>
                        <div style={{flex:1}} cl></div>
                        <div className="flex pt-5 lg:pt-0">
                            <button className='lg:px-10 px-8 py-2 lg:py-3 border-[1px] border-gray-400 rounded-lg'>Back</button>
                            <button className='lg:px-10 px-8 py-2 lg:py-3 bg-netYellow rounded-lg ms-2 fw-bold'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header