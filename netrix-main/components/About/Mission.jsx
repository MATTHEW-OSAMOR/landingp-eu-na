import React from 'react'
import img from "@/components/About/Images/rocket.svg"
import Image from 'next/image'
function Mission() {
    return (
        <div className='my-40'>
            <div className='flex gap-4 flex-col lg:flex-row'>
                <div className='lg:order-last'>
                    <Image src={img} alt="" />
                </div>
                <div className='flex-1 pb-4'>
                    <h1 className="text-netBlue font-black text-5xl mb-4">Our Mission</h1>
                    <p className="font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
                        lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat
                        lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt
                        tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper
                        quisque in. Magna fermentum, lacus, fermentum arcu
                    </p>
                    <p className="font-light mt-4">
                        Vulputate pellentesque proin facilisis dignissim gravida sed faucibus
                        nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus
                        suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu
                        penatibus congue orci turpis. Enim diam id.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Mission