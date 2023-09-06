"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// for keepers
const slides = [
  {
    img: "/home/globe.png",
    id: 1,
  },
  {
    img: "/home/Europe-scehme.png",
    id: 2,
  },
  {
    img: "/nav/bg-Europe-footer.png",
    id: 3,
  },
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-w-screen flex items-center justify-center">
      <div className="w-full px-5 py-6 lg:py-10 ">
        <div className="w-full max-w-[1320px] mx-auto">
          <Slider {...settings}>
            {slides.map((item) => (
              <div key={item.id} className="">
               
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden  w-full ">
                      <Image
                        width={20}
                        height={20}
                        src={item.img}
                        className="w-full h-72 lg:h-96 object-cover"
                        alt="Testimomials"
                      />
                    </div>
                  </div>
             
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
