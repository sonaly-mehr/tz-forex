"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import remiFlow from "../../../public/img/icons/remiflow.svg";
import appStore from "../../../public/img/icons/app-store.svg";
import googlePlay from "../../../public/img/icons/google-play.svg";
import { motion, AnimatePresence } from "framer-motion";
import WindowDetector from "./WindowDetector";

const links = [
  {
    heading: "Usefull Links",
    links: [
      {
        lable: "Home",
        path: "/",
      },
      {
        lable: "About Us",
        path: "/",
      },
      {
        lable: "Send Money",
        path: "/",
      },
      {
        lable: "View Rates",
        path: "/",
      },
      {
        lable: "Contact Us",
        path: "/",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        lable: "Careers",
        path: "/",
      },
      {
        lable: "Creators program",
        path: "/",
      },
      {
        lable: "FAQ",
        path: "/",
      },
      {
        lable: "Customer stories",
        path: "/",
      },
      {
        lable: "Why Remiflow",
        path: "/",
      },
    ],
  },
  {
    heading: "Ressources",
    links: [
      {
        lable: "Community",
        path: "/",
      },
      {
        lable: "Blog",
        path: "/",
      },
      {
        lable: "Refer a Friend",
        path: "/",
      },
      {
        lable: "Partnerships",
        path: "/",
      },
      {
        lable: "Help Center",
        path: "/",
      },
    ],
  },
  {
    heading: "Social Links",
    links: [
      {
        lable: "Facebook",
        path: "/",
      },
      {
        lable: "Twitter (X)",
        path: "/",
      },
      {
        lable: "Linkedin",
        path: "/",
      },
      {
        lable: "Instagram",
        path: "/",
      },
      {
        lable: "Reddit",
        path: "/",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        lable: "Privacy policy",
        path: "/",
      },
      {
        lable: "Terms of service",
        path: "/",
      },
      {
        lable: "Do not sell my data",
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  const [expanded, setExpanded] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = (index) => {
    setExpanded((prev) => (prev === index ? -1 : index));
  };
  const emailPlaceholder = isMobile ? "Email?" : "What's your work email?";

  return (
    <>
      <WindowDetector onMobileChange={setIsMobile} />

      <div className="bg-[#020019] pt-32 pb-4">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between pb-7"
          >
            {links.map((item, index) => (
              <div key={index} className="w-full lg:w-auto">
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center mb-5"
                >
                  <h6 className="font-matter-medium text-white text-xl">
                    {item.heading}
                  </h6>
                  {/* Arrow for mobile */}
                  <span
                    className="lg:hidden transform transition-transform duration-300"
                    style={{
                      transform:
                        expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Links */}
                <AnimatePresence initial={false}>
                  {(expanded === index || window.innerWidth >= 1024) && (
                    <motion.div
                      key={index}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden lg:overflow-visible"
                    >
                      <div className="flex flex-col gap-3">
                        {item.links.map((link, i) => (
                          <Link
                            href={link.path}
                            key={i}
                            className="text-white/60 font-openSans font-normal text-base hover:underline transition-colors duration-300"
                          >
                            {link.lable}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
          <div className="py-10 border-y border-white/15 flex flex-col lg:flex-row justify-between">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <Image src={remiFlow} alt="" className="w-[170px] h-auto mb-4" />
              <p className="font-openSans font-normal text-sm text-white/60 md:w-[65%] leading-6">
                Fast. Secure. Effortless. Now, sending money to India is easier
                than ever with the Remiflow.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="w-full lg:max-w-[550px] relative flex items-center mt-8 lg:mt-0"
            >
              <input
                placeholder={emailPlaceholder}
                className="font-openSans font-normal placeholder:text-white/50 text-white text-sm lg:text-base p-4 lg:p-6 pr-[140px] lg:pr-[210px] rounded-lg lg:rounded-[18px] bg-[#1A182E] border border-white/10 w-full"
              />
              <button className="bg-white rounded-lg lg:rounded-[14px] px-2.5 lg:px-5 h-[44px] lg:h-[60px]  font-matter-medium text-dark  text-sm lg:text-base tracking-[-1%] absolute right-1 lg:right-3 top-1/2 -translate-y-1/2 ">
                Get Started For Free
              </button>
            </motion.div>
          </div>

          <div className="py-10 flex lg:justify-between items-center">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="flex lg:gap-5 items-center justify-between lg:justify-normal w-full"
            >
              <div className="relative inline-block">
                <select
                  id="small"
                  defaultValue="ENG"
                  className="
                
      appearance-none
      block
      w-fit
      pl-2 lg:pl-3
      pr-6 lg:pr-8
      py-2 lg:py-2.5
     /* space for our arrow */
      text-xs lg:text-sm
      rounded-[7px]
      tracking-[-1%]
      bg-[#1B1930]
      font-openSans
      font-normal
      text-white/70
      focus:outline-none
     
    "
                >
                  <option value="ENG">English (US)</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                {/* Custom down‐arrow (using an SVG here) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <p className="font-openSans font-normal text-white/60 text-xs lg:text-sm tracking-[-1%]">
                © 2025 Remiflow. All Rights Reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="hidden lg:flex gap-5 items-center"
            >
              <Link
                href="/"
                className="bg-[#1B1930] rounded-[5px] px-3 py-1.5 border border-white/20"
              >
                <Image src={appStore} alt="" className="w-[100px] h-auto" />
              </Link>
              <Link
                href="/"
                className="bg-[#1B1930] rounded-[5px] px-3 py-1.5 border border-white/20"
              >
                <Image src={googlePlay} alt="" className="w-[100px] h-auto" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
