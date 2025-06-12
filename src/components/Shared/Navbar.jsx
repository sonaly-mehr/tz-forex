"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";

const navLinks = [
  { lable: "Home", href: "/" },
  { lable: "About Us", href: "/about-us" },
  { lable: "Refer a friend", href: "/refer" },
  { lable: "Contact Us", href: "/contact" },
  { lable: "Blog", href: "/blog" },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="w-full  text-white bg-primary py-6"
    >
      <nav className="flex justify-between items-center w-full lg:w-[88%] mx-auto px-4 lg:px-0 ">
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt=""
            width={150}
            height={46}
            className="w-[120px] lg:w-[140px] xl:w-[150px] h-auto"
          />
        </Link>
        <ul className="hidden lg:flex gap-5 xl:gap-10 items-center justify-center">
          {navLinks?.map((link, index) => (
            <motion.li
              key={index}
              className=" text-[17px] lg:text-xl xl:text-[22px] font-semibold font-darkerGrotesque  text-white hover:text-white/90 transition-colors duration-300"
            >
              <Link href={link.href}>{link.lable}</Link>
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6">
          <Link
            href="/login"
            className="text-base lg:text-xl xl:text-[22px] font-semibold font-darkerGrotesque text-white hover:text-white/90 transition-colors duration-300"
          >
            Log in
          </Link>
          <button
            href="/register"
            className="
text-base lg:text-xl xl:text-[22px]
    font-semibold font-darkerGrotesque
    text-primary bg-white
     flex justify-center items-center
    px-3 lg:px-6 rounded-full pt-1 lg:pt-2 pb-2 lg:pb-3
    transform
    transition-transform duration-200 ease-in-out
    hover:scale-105
  "
          >
            Get Started Now
          </button>
        </div>

        {/* Hamburger Icon */}
        <div onClick={handleNav} className="lg:hidden relative z-10">
          <CgMenuRight className="cursor-pointer text-white text-3xl" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="relative z-[100]">
        <div
          className={
            nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-8 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-8 ease-in duration-500 h-screen bg-white"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src="/img/logo.svg"
                    width="80"
                    height="120"
                    alt="/"
                    className=""
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer"
                >
                  <X className="text-white" size={18} />
                </div>
              </div>
            </div>
            <div className="py-9 flex flex-col">
              <ul className="uppercase flex flex-col gap-6">
                {navLinks?.map((link, index) => (
                  <li key={index} onClick={() => setNav(false)}>
                    <a
                      href={link.path}
                      className="text-base font-semibold text-white hover:text-white/90 transition cursor-pointer"
                    >
                      {link.lable}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3.5">
              <Link
                href="/login"
                className="text-2xl font-semibold font-darkerGrotesque text-white hover:text-white/90 transition-colors duration-300"
              >
                Log in
              </Link>
              <button
                href="/register"
                className="
    text-lg
    w-fit
    font-semibold font-darkerGrotesque
    text-primary bg-white
     flex justify-center items-center
    px-4 rounded-full pt-1 pb-2
    transform
    transition-transform duration-200 ease-in-out
    hover:scale-105
  "
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
