import Image from 'next/image'
import React from 'react'
import bg from "./Images/contact.png"
import ring from "./Images/contact_bl.svg"
import blob from "./Images/blob_contact.png"
function Contact() {
    return (
        <div className='relative mt-[20%] mb-10'>
            <Image className='absolute -top-[200px] -left-[200px] z-0' src={blob} alt="" />
            <div className="relative bg-slate-950 flex overflow-hidden rounded-2xl items-stretch">
                <div className="p-7 md:p-12 text-slate-50 md:w-[65%] flex flex-col space-evenly items-start">
                    <div style={{ flex: 1 }}></div>
                    <h1 className="font-bold text-3xl ">Contact Us</h1>
                    <div style={{ flex: 1 }}></div>
                    <div className="my-3 text-4xl font-light z-20">
                        We’re excited about<br />
                        handling your projects
                    </div>
                    <div style={{ flex: 1 }}></div>
                    <button className='bg-yellow-500 text-slate-950 px-6 py-4 rounded-lg z-20 hover:bg-yellow-700'>Contact Us</button>
                    <div style={{ flex: 1 }}></div>
                    <Image className='absolute -bottom-[20px] left-0 z-0' src={ring} alt="" />
                </div>
                <Image src={bg} alt="contact us | Netrix" className='w-0 lg:w-auto' />
            </div>
        </div>
    )
}

export default Contact