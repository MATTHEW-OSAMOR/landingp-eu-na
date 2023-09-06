import Image from "next/image";
import React from "react";

const Stats = () => {
  const stats = [
    { label: "Satisfied Customers", value: "5k+" },
    { label: "Merchant Partners", value: "250+" },
    { label: "Years Experience", value: "18+" },
    { label: "Completed Projects", value: "5k+" },
  ];
  return (
    <>
      <section className="my-10 mx-4 lg:mx-20  ">
        <div className="  ">
          <div className="relative  rounded-3xl lg:rounded-none backdrop-blur-sm w-full mx-auto z-20 md:h-40 gap-2 flex flex-row justify-between p-3 lg:p-10  bg-[#57626C] bg-opacity-20 bg-[url(/home/earth-bg-left.png)] bg-cover   bg-no-repeat">
            <Image
              width={50}
              height={50}
              className="hidden lg:block absolute -top-20 -left-5 z-10 object-cover lg:w-72 lg:h-72"
              src="home/about-blob.png"
              alt=""
            />
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-y-2 items-center z-50"
              >
                <h1 className=" font-[900] lg:text-[38px] text-netWhite text-[28px]">
                  {stat.value}
                </h1>
                <p className="text-xs lg:text-sm text-netBlue text-center lg:text-left">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
