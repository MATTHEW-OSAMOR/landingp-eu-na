"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import styles from "../../utils/styles/Navigation.module.css";
import {
  FaBlog,
  FaDiscord,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { BiDonateHeart, BiUserVoice } from "react-icons/bi";
import { BsFillDoorClosedFill, BsFillQuestionCircleFill } from "react-icons/bs";
import Modal from "../modals/Modal";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  { sm: <FaFacebookF />, url: "Home" },
  { sm: <FaTwitter />, url: "About Us" },
  { sm: <FaInstagram />, url: "Industries" },
  { sm: <FaDiscord />, url: "Services" },
  { sm: <FaTelegramPlane />, url: "Contact Us" },
];
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setNav(true); // Set nav to true initially to make the navbar white
  }, []);

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    console.log(isActive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      //access to window
      const changeBackground = () => {
        if (window.scrollY >= 95) {
          setNav(true);
        } else {
          setNav(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  return (
    <nav
      className={
        nav
          ? `${styles.nav} ${styles.active} ${styles.fixedTop} top-0 lg:bg-netWhite z-[1000] shadow-md `
          : `${styles.nav} ${styles.fixedTop} top-0 lg:bg-netWhite z-[1000] shadow-md `
      }
    >
      <div className="lg:max-w-[1920px] w-full px-4 mx-auto lg:px-20">
        <div className="flex justify-between">
          <div className="flex lg:justify-between lg:items-center lg:w-full">
            <div className="">
              <Link href={"/"}>
                <Image
                  className="w-16 h-auto object-cover"
                  src="/nav/logo.png"
                  width={100}
                  height={50}
                  alt="Netrix Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:block lg:w-[910px] lg:px-14">
              {" "}
              {/* lg:px-48 */}
              <ul className="text-black lg:flex lg:justify-center items-center">
                {links.map((link) => (
                  <li
                    key={link.label}
                    className="lg:text-base lg:mr-6 font-semibold"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                <div className=" grow "></div>
                <div className=" flex gap-2"><button className="px-5 py-1 rounded-lg text-netBlue border-netBlue border-[2px] hover:text-white  hover:bg-netBlue duration-150">Sign Up</button>

                <button className="  w-[100px] px-[10.5px] py-1 bg-yellow-400 rounded-[7px] justify-center items-center gap-5.5 inline-flex  hover:bg-netGreen duration-150">Login</button></div>
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="flex items-center pr-3  ">
            <div
              className="flex gap-x-2 items-center justify-end flex-end"

            // }}
            >
              {/*Toggle locations */}
              <span onClick={() => setIsModalOpen(!isModalOpen)} className="cursor-pointer">
                <Image
                  className="w-10 h-auto object-cover"
                  src="/nav/Europe.svg"
                  width={100}
                  height={50}
                  alt="Netrix Logo"
                />
              </span>

              <span className="lg:block hidden" > 
            
                <svg
                  className="w-10"
                  width="55"
                  height="34"
                  viewBox="0 0 55 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.93457"
                    y="0.115662"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                  <rect
                    x="0.93457"
                    y="25.338"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                  <rect
                    x="0.93457"
                    y="12.7268"
                    width="35.4283"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                </svg>
              </span>

              <span onClick={handleHamburger} className="lg:hidden ">
                <svg
                  className="w-10"
                  width="55"
                  height="34"
                  viewBox="0 0 55 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.93457"
                    y="0.115662"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                  <rect
                    x="0.93457"
                    y="25.338"
                    width="53.7037"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                  <rect
                    x="0.93457"
                    y="12.7268"
                    width="35.4283"
                    height="7.76871"
                    rx="3.88435"
                    fill="#00589F"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {isActive && (
        <aside
          id="sidebar"
          className={`bg-netWhite  text-black md:w-64 w-4/5 space-y-6 h-screen pt-6 px-0 flex-col absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition   flex lg:flex-col lg:justify-between overflow-y-auto" data-dev-hint="sidebar; for frameless; for visually inset the navigation z-[2000]  ease-in-out duration-300 lg:hidden ${isActive ? "translate-x-0 " : "translate-x-full"
            }`}
        >
          <div
            className="flex flex-col"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <div className="flex justify-between items-center pb-20 px-2">
              <Link href={"/"}>
                <Image
                  className="w-20 h-auto object-cover"
                  src={"/nav/logo.png"}
                  width={150}
                  height={50}
                  alt="Tidier Logo"
                />
              </Link>
              <span
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <AiOutlineClose className="text-[#4B64E1]  text-xl" />
              </span>
            </div>

            <nav className="flex flex-col ">
              {links.map((link) => (
                <span
                  key={link.href}
                  onClick={() => {
                    setIsActive(false);
                  }}
                  className="   px-4 transition duration-200 border-t border-gray-300 py-6"
                >
                  <p className="text-xl text-black font-medium">{link.label}</p>
                </span>
              ))}
            </nav>
          </div>

          <div className="flex  items-center px-4 l py-2 gap-x-4">
            {socials.map((social) => (
              <span
                key={social.url}
                onClick={() => {
                  setIsActive(false);
                  // openModal();
                }}
                className="border-gray-400 border p-2 text-lg flex justify-center items-center hover:bg-netYellow"
              >
                <Link href={social.url}>
                  {social.sm}
                </Link>
              </span>
            ))}
          </div>
        </aside>
      )}
      <Modal isOpen={isModalOpen} />
    </nav>
  );
};

export default Header;
