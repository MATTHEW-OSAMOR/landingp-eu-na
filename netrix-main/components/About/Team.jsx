import Image from 'next/image'
import React from 'react'
import img1 from "@/components/About/Images/person1.png"
import img2 from "@/components/About/Images/person2.png"
import img3 from "@/components/About/Images/person3.png"

function Team() {
    return (
        <div>
            <div className="text-center  mx-auto">
                <h1 className="text-netBlue font-black text-5xl">Our Team</h1>
                <p className="font-light my-4">
                    Our team comprises of experienced graduates of Computer Science, Data Analytics, Computer Engineering, Electrical and
                    Electronics Engineering, Telecommunications Engineering, Education Management and Humanities. Their Certifications come from
                    Industry Giants like Cisco, Microsoft, Harris, Mikrotik, Alvarion, Motorola, Panduit, SES Americom, Sky Vision and the City University of
                    New York
                </p>
                <div className='columns-1 flex flex-col md:flex-row flex-wrap gap-2 justify-center'>
                    <Person
                        title="CEO & CO-Founder" name="John UCHE"
                        image={<Image alt="Person" src={img1} className='w-full h-auto' />}
                    />
                    <Person
                        title="Community Lead" name="Sophie RAHEEM"
                        image={<Image alt="Person" src={img2} className='w-full h-auto' />}
                    />
                    <Person
                        title="Operations" name="Alex Turner"
                        image={<Image alt="Person" src={img3} className='w-full h-auto' />}
                    />
                </div>
            </div>
        </div>
    )
}

function Person({ image, name, title }) {
    return <div className='p-4 bg-gray-300 rounded-[50px] w-fit text-start z-20 mb-3 md:mb-0'>
        <div>
            {image}
        </div>
        <div className="text-netBlue uppercase">
            <p className='font-bold text-lg ps-3 mt-3 mb-2'>{name}</p>
            <p className='text-lg ps-3 font-light'>{title}</p>
        </div>
    </div>
}
export default Team