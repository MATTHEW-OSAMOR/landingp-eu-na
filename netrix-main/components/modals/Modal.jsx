"use client";
import Image from "next/image";
import { useState, useContext } from "react";

const Modal = ({ isOpen, setIsModalOpen }) => {
  const regions = [
    { location: "Africa", img: "/nav/nav-africa.png" },
    { location: "International", img: "/nav/nav-world.png" },
    { location: "Noth America", img: "/nav/nav-na.png" },
    { location: "Europe", img: "/nav/nav-europe.png" },
  ];
  return (
    <>
      {isOpen && (
        <div
          className=" fixed z-10 overflow-y-auto top-[80px] md:top-[50px] w-full left-0 "
          id="modal"
        >
          <div className=" flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
              &#8203;
            </span>
            <div></div>
            <div
              className="relative inline-block align-center    text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-3xl w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex lg:flex-row flex-col items-center w-full lg:h-[400px]">
                <div className="lg:w-2/3 bg-[#E0F3E5] flex flex-col gap-y-4 lg:gap-y-8 lg:p-10 p-5 lg:h-[400px] items-start justify-center">
                <Image
                  className="w-10 h-auto object-cover"
                  src="/nav/nav-Europe.svg"
                  width={100}
                  height={50}
                  alt="Netrix Logo"
                />
                  <p className="text-lg text-black text-left">
                    You’re currently on our International page.
                  </p>
                  <p className="text-lg text-black text-left">
                    Choose another region to see content specific to your
                    location or stay here.
                  </p>
                  <a className="underline text-lg text-netBlue" href="http://">Stay here</a>
                </div>
                <div className="lg:w-1/3 w-full bg-netWhite flex flex-col gap-y-4 lg:gap-y-8 py-5 lg:h-[400px] items-start justify-center">
                  {regions.map((region) => (
                    <div
                      key={region.location}
                      className="flex flex-row gap-x-4 hover:bg-gray-200 p-2 w-full cursor-pointer"
                    >
                      <Image
                        className="w-10 h-auto object-cover"
                        src={region.img}
                        width={100}
                        height={50}
                        alt="Netrix Logo"
                      />
                      <p className="text-lg text-black ">{region.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
