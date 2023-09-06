"use client"
import Image from 'next/image'
import React from 'react'
import looper from "@/components/About/Images/looper.svg"
import logo1 from "./Images/Logos/nitda_logo.png"
import logo2 from "./Images/Logos/nidc_logo.png"
import logo3 from "./Images/Logos/effc_logo.png"
import logo4 from "./Images/Logos/9mobile_logo.png"
import logo5 from "./Images/Logos/cbn_logo.png"
import logo6 from "./Images/Logos/cyber_logo.png"
import logo7 from "./Images/Logos/fedd_logo.png"
import logo8 from "./Images/Logos/ndpr_logo.png"
import logo9 from "./Images/Logos/nhgs_logo.png"
import logo10 from "./Images/Logos/smedan_logo.png"
import logo11 from "./Images/Logos/works_logo.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Clients() {
    var settings = {
        speed: 500,
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }
    return (
        <div>
            <div className="relative py-5">
                <Image src={looper} alt="" className='-left-[100px] -top-[300px] absolute' style={{ zIndex: -2 }} />
                <div className="py-16"></div>
                <div className="text-center font-black text-4xl text-netBlue pt-5 pb-10">Our Clients</div>
                <div className="p-6 rounded-3xl  backdrop-blur-sm lg:w-[90%] mx-auto z-20 gap-2 ms-[5%]" style={{ backgroundColor: "rgba(150,150,150,0.5)" }}>
                    <Slider {...settings} className='justify-evenly'>
                        <div><Image src={logo1} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo2} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo3} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo4} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo5} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo6} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo7} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo8} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo9} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo10} className='h-20 mx-auto' alt="nitda" /></div>
                        <div><Image src={logo11} className='h-20 mx-auto' alt="nitda" /></div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Clients