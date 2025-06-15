"use client";
import React, { useEffect, useState } from "react";
import userBg from "../../../../public/img/user-bg2.jpg";
import Image from "next/image";
import Button from "@/components/Ui/Button";
import { FaCheckCircle } from "react-icons/fa";
import {
  fadeIn,
  footerVariants,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";
import { motion } from "framer-motion";
import userMobile from "../../../../public/img/user-mobile.svg";

const GetStartedNow = () => {
  const [bgSrc, setBgSrc] = useState(userBg.src);
  useEffect(() => {
    const updateBg = () => {
      // Tailwind's lg breakpoint is 1024px
      setBgSrc(window.innerWidth < 1024 ? userMobile.src : userBg.src);
    };
    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="layout-container py-0 lg:py-16"
    >
      <div
        className="relative w-full lg:h-[700px] bg-cover bg-center rounded-[26px]  overflow-hidden"
        style={{ backgroundImage: `url(${bgSrc})` }}
      >
        {/* Foreground content here */}
        <div className="flex flex-col gap-3 lg:gap-5 pt-4 sm:pt-10 xl:pt-[70px] px-5 sm:px-10 xl:px-[70px]">
          <motion.h2
            variants={navVariants}
            className="md:w-[60%] font-aeonik-pro text-white text-3xl lg:text-5xl xl:text-[70px] tracking-[-1.5%] leading-10 lg:leading-[60px] xl:leading-[80px]"
          >
            Start Sending Money & Saving Today!
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="md:w-[60%] lg:w-[40%] font-matter-regular text-white lg:text-white/70 lg:leading-[30px] text-base  lg:text-lg"
          >
            Make the smart choice – experience tz forex now and enjoy the best
            exchange rates with zero fees.
          </motion.p>
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
            <Button
              lable="Get Started Now"
              className="  font-aeonik-pro w-full lg:w-fit px-8 py-5 mt-8 lg:mt-2 lg:text-xl"
            />
          </motion.div>
        </div>

        <div className=" lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2  w-full px-3 sm:px-10 xl:-px-0 my-6 lg:my-0">
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex lg:items-end  flex-col lg:flex-row gap-2.5 lg:gap-6 justify-center w-full"
          >
            <div className="flex gap-3 p-3 lg:p-5 bg-white w-fit rounded-full">
              <FaCheckCircle className="text-[#5CB85C] text-[22px]" />
              <span className="font-matter-medium text-dark text-sm lg:text-base leading-snug">
                Switch to tz forex Today
              </span>
            </div>
            <div className="flex gap-3 p-3 lg:p-5 bg-white w-fit rounded-full">
              <FaCheckCircle className="text-[#5CB85C] text-[22px]" />
              <span className="font-matter-medium text-dark text-sm lg:text-base leading-snug">
                Send More, Save More
              </span>
            </div>
            <div className="flex gap-3 p-3 lg:p-5 bg-white w-fit rounded-full">
              <FaCheckCircle className="text-[#5CB85C] text-[22px]" />
              <span className="font-matter-medium text-dark text-sm lg:text-base leading-snug">
                Zero Fees, Maximum Happiness!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStartedNow;
