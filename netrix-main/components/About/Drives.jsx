import React from 'react'
import { FaCompass, FaGlobe, FaGlobeAfrica, FaPeopleCarry, FaSearch, FaUsers } from 'react-icons/fa'
import {  } from 'react-icons/md'

function Drives() {
    return (
        <div>
            <div className='columns-1 lg:columns-2 w-full mx-auto'>
                <h1 className='font-black text-netBlue text-4xl w-100'>What drives Net-Trix? </h1>
                <div className='w-full'></div>
                <div className='max-w-fit opacity-75 font-light lg:ml-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Feugiat nulla suspendisse tortor aene
                </div>
            </div>
            <div className='columns-1 md:columns-2 gap-5 gap-y-5 mt-10'>
                <Item icon={<FaUsers size={40} opacity={0.7} />} title="Open Source" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.worldwideLorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus "} />
                <Item icon={<FaSearch size={40} opacity={0.7} />} title="Transparent" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.worldwideLorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus "} />
                <Item icon={<FaGlobeAfrica size={40} opacity={0.7} />} title="worldwide" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.worldwideLorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus "} />
                <Item icon={<FaCompass size={40} opacity={0.7} />} title="Community Driven" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.worldwideLorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus "} />
            
            </div>
        </div>
    )
}

function Item({ icon, title, content }) {
    return <div className='bg-gray-300 px-6 py-6 rounded-[40px] mb-5 min-h-[250px] flex items-center'>
        <div className="flex flex-col md:flex-row gap-5">
            <div>
                <div className="h-20 w-20 bg-yellow-200 p-3 rounded-[50px] flex items-center justify-center">{icon}</div>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3 uppercase'>{title}</h2>
                <p className='font-light'>{content}</p>
            </div>
        </div>
    </div>
}

export default Drives