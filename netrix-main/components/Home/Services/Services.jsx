import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="px-4 lg:px-20 py-10 lg:py-20 my-5">
      <header>
        <h1 className="text-netBlue text-2xl lg:text-3xl text-center font-bold ">
          Our Services
        </h1>
      </header>
      <ul className="grid lg:grid-cols-3 grid-cols-1 mt-8 lg:space-x-4">
        <li className="py-2">
          <div className="flex items-start gap-x-4">
            <div>
              <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-xl text-pink-600 bg-netYellow w-12 h-12 mr-3">
                <svg
                  width="32"
                  height="38"
                  viewBox="0 0 32 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_391_9608)">
                    <path
                      d="M14.5462 7.09688C15.3788 6.19943 15.795 5.7507 16.1331 5.69518C16.2662 5.67332 16.3287 5.67346 16.4616 5.69591C16.7994 5.75293 17.2153 6.20527 18.0471 7.10994C18.897 8.03423 19.9763 8.96925 21.0955 9.3201C21.9973 9.60277 23.2187 9.59831 24.2024 9.52547C24.9637 9.4691 25.3443 9.44091 25.6085 9.59068C25.6964 9.64048 25.7704 9.69834 25.84 9.77152C26.0493 9.99159 26.1061 10.3213 26.2197 10.9808C26.625 13.3341 27.1132 17.6656 25.8857 20.4829C24.7547 23.0788 21.6858 25.4937 19.3232 27.0562C18.212 27.791 17.6563 28.1585 16.7455 28.2801C16.5051 28.3121 16.0857 28.3204 15.8443 28.2979C14.9294 28.2124 14.3587 27.8667 13.2175 27.1751C10.6873 25.642 7.33421 23.205 6.12604 20.4829C4.88101 17.6777 5.37345 13.3524 5.78485 10.9941C5.90091 10.3287 5.95894 9.99609 6.17205 9.77543C6.2426 9.70239 6.31856 9.64417 6.40743 9.59503C6.67589 9.44658 7.05742 9.48109 7.82049 9.5501C8.96085 9.65323 10.4457 9.68198 11.515 9.3201C12.6213 8.9457 13.6961 8.01335 14.5462 7.09688Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_391_9608"
                      x="-4"
                      y="0.85498"
                      width="40"
                      height="40"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_391_9608"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_391_9608"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </div>
            <div>
              <h2 className="text-black text-xl font-bold pb-2">Digital</h2>
              <p className="text-[#605B47] md:w-4/5">
                Net-Trix Solutions, Offer Innovative Digital Business Services
                And Digital Process Operations, Which Enable Us to Increase
                Business Resilience, Improve Operational Efficiency And Deepen
                Client Engagements.
              </p>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-start  gap-x-4">
            <div>
              <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-xl text-pink-600 bg-netYellow w-12 h-12 mr-3">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16.8549C27.8881 16.8549 28.0003 16.9669 27.9974 17.1049C27.9531 19.2312 27.3444 21.3091 26.2317 23.1249C25.0754 25.0119 23.4198 26.5423 21.4479 27.547C19.476 28.5517 17.2647 28.9916 15.0585 28.8179C12.8523 28.6443 10.737 27.864 8.94658 26.5631C7.15617 25.2623 5.76036 23.4918 4.91345 21.4471C4.06655 19.4025 3.80154 17.1635 4.14774 14.9777C4.49394 12.7919 5.43786 10.7444 6.87513 9.06156C8.25824 7.44215 10.0464 6.22116 12.0548 5.52199C12.1852 5.4766 12.3264 5.54871 12.3691 5.68002L15.4948 15.3002C15.7961 16.2273 16.66 16.8549 17.6347 16.8549H27.75Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.1446 5.4517C17.102 5.32039 17.1737 5.17892 17.3064 5.14075C18.3365 4.84447 19.4201 4.77732 20.4807 4.94531C21.6237 5.12634 22.7077 5.57533 23.6439 6.25556C24.5802 6.93579 25.3422 7.82795 25.8676 8.85909C26.3551 9.81591 26.626 10.8672 26.6626 11.9384C26.6673 12.0764 26.5549 12.1884 26.4168 12.1884L20.2417 12.1884C19.7002 12.1884 19.2202 11.8397 19.0529 11.3246L17.1446 5.4517Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
            </div>
            <div>
              <h2 className="text-black text-xl font-bold pb-2">Engineering</h2>
              <p className="text-[#605B47] md:w-4/5">
                With decades of experience driving business resiliency across
                asset-light and asset-intensive industries, Net-Trix Solutions
                empowers enterprises to improve time-to-profit, accelerate
                product development and maximize return on investment.
              </p>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-start  gap-x-4">
            <div>
              <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-xl text-pink-600 bg-netYellow w-12 h-12 mr-3">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 28.855H6.66667V24.5026C6.66667 22.2528 6.66667 21.1278 7.23962 20.3392C7.42465 20.0846 7.64863 19.8606 7.90331 19.6755C8.69191 19.1026 9.81683 19.1026 12.0667 19.1026H12.6667V18.9883C12.6667 16.496 12.6667 15.2498 13.2026 14.3216C13.5536 13.7136 14.0586 13.2086 14.6667 12.8575C15.5949 12.3216 16.841 12.3216 19.3333 12.3216V7.85498C19.3333 6.19813 20.6765 4.85498 22.3333 4.85498C23.9902 4.85498 25.3333 6.19813 25.3333 7.85498V28.855H19.3333H12.6667Z"
                    fill="white"
                  />
                  <path
                    d="M28 28.855H25.3333M4 28.855H6.66667M19.3333 28.855H12.6667M19.3333 28.855V12.3216M19.3333 28.855H25.3333M12.6667 28.855H6.66667M12.6667 28.855V19.1026M6.66667 28.855V24.5026C6.66667 22.2528 6.66667 21.1278 7.23962 20.3392C7.42465 20.0846 7.64863 19.8606 7.90331 19.6755C8.69191 19.1026 9.81683 19.1026 12.0667 19.1026H12.6667M12.6667 19.1026V18.9883C12.6667 16.496 12.6667 15.2498 13.2026 14.3216C13.5536 13.7136 14.0586 13.2086 14.6667 12.8575C15.5949 12.3216 16.841 12.3216 19.3333 12.3216V12.3216M19.3333 12.3216V7.85498C19.3333 6.19813 20.6765 4.85498 22.3333 4.85498V4.85498C23.9902 4.85498 25.3333 6.19813 25.3333 7.85498V28.855"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </div>
            <div>
              <h2 className="text-black text-xl font-bold pb-2">Cloud</h2>
              <p className="text-[#605B47] md:w-4/5">
                Powered by over 40,000 cloud professionals and 3,000 use
                casesNet-Trix Solutions offers exclusive smart cloud services
                that enable organizations to optimize the cloud and accelerate
                innovation.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div
        className={` md:flex justify-center  h-auto  bg-cover   bg-no-repeat p-[50px]`}
      >
        <Image
          alt="Grid Image"
          src={"/home/Frame-626022.png"}
          width={500}
          height={500}
          className="object-cover lg:w-auto lg:h-auto "
        />
      </div>
      <div className="flex bg-netBlue w-full">
        <h2 className="   lg:text-4xl text-4xl  font-extrabold text-center lg:text-left text-white leading-none w-[1000px] p-16">
          About Us
          <br />
          <br />
          <br />
          <p className="w-96 text-white text-lg font-normal leading-loose ">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown <br />
            <br />
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            <br />
            <br />
            <button className=" w-[300px] px-[5px] py-1 rounded-md text-white border-netYellow border-[1px] hover:text-white  hover:bg-netBlue duration-150">
              Learn More
            </button>
          </p>
        </h2>

        <div className="bg-netBlue w-[100%] p-10 ">
          <Image
            alt="blue section image"
            src={"/home/Group-55.png"}
            width={600}
            height={600}
            className="object-cover lg:w-auto lg:h-auto "
          />
        </div>
      </div>
      <div>
      <div className={`md:flex justify-center relative h-[600px]]bg-cover w-full p-28`}>
        <Image
          alt="blue section image"
          src={"/home/earth-bg-left.png"}
          width={600}
          height={600}
          className="object-cover lg:w-auto lg:h-auto  "
          text="Hello"
        />
        <h1 className="absolute justify-center p-[100px] mt-3 text-netBlue text-2xl  font-extrabold text-center ">
        <br/>Subscribe For  Our Newsletter
        </h1>
        <p className="mt-3 text-netBlue font-thin text-xs justify-center text-center  absolute p-[170px] ">
        Unsubscribe at any time. Privacy policy↗
            </p>
      </div>
      </div>
    </section>
  );
};

export default Services;
