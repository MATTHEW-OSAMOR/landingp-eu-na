import Image from "next/image";
import Link from "next/link";
import React from "react";

const Europe = () => {
  return (
    <>
      <main className="flex m flex-col   ">
        <div/>
          
        
        <main className=" sm:px-6 h-screen  px-4  lg:px-20 md:px-12 flex md:flex-row flex-col items-center  ">
          <div
            className=" w-full md:w-1/2  md:mt-12 lg:mt-20 mt-11 flex-1"
            data-aos="fade-up"
          >
            <h2 className="   lg:text-6xl text-4xl  font-extrabold text-center lg:text-left text-netBlue leading-none    ">
              Lorem ipsum dolor sit
              <br /> amet, Consectetur elit
            </h2>

            <p className="mt-3 text-netBlue font-medium sm:mt-5 text-md sm:max-w-xl text-center md:text-left md:mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              <br className="hidden lg:block" /> nulla suspendisse tortor aenean
              dis placerat.
            </p>
            <div className=" mt-10">
              <div className=" flex flex-col  md:justify-start md:items-start  rounded-md justify-center items-center">
                <Link href={"https://forms.gle/57wpJr29sXHRL2jS6"}>
                  <button className="w-[180px] h-[40px] flex items-center justify-center px-4 py-3    leading-6 font-regular  text-netWhite bg-netYellow transition duration-150 ease-in-out md:py-4 md:px-10">
                    Get started
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        
          <div className={`md:w-1/2 md:flex justify-center  h-auto bg-[url("/home/earth-bg-left.png")] bg-cover   bg-no-repeat `}>
            <Image
              alt="Hero Imge"
              src={"/home/europe-scheme.png"}
              width={500}
              height={500}
              className="object-cover lg:w-auto lg:h-auto "
            />
            
          </div>
        </main>
      </main>
    </>
  );
};

export default Europe;
