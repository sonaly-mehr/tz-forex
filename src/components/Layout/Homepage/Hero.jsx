"use client";
import Button from "@/components/Ui/Button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";
import ButtonOutlined from "@/components/Shared/ButtonOutlined";
import bgEffect from "../../../../public/img/BG.png";
import user1 from "../../../../public/img/user1.png";
import user2 from "../../../../public/img/user2.png";
import user3 from "../../../../public/img/user3.png";
import user4 from "../../../../public/img/user4.jpg";

const rateInfo = [
  {
    lable: "4.9/5 Rating",
    rate: "“Best rates I’ve found!”",
    pecentage: "+1.89%",
    icon: "/img/icons/star.svg",
  },
  {
    lable: "Today's Rate",
    rate: "1 CAD = ₹61.25",
    pecentage: "+1.45%",
    icon: "/img/icons/CAD.svg",
  },
  {
    lable: "99% Repeat Users",
    rate: "Once they try us, they stay.",
    pecentage: "+1.27%",
    icon: "/img/icons/repeat.svg",
  },
];

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      // className="min-h-[88vh] flex items-center pb-14 xl:pb-8 bg-primary text-white w-full"
      className="w-full min-h-screen  md:min-h-[120vh] bg-cover bg-center relative pt-6 lg:pt-20 "
      style={{ backgroundImage: `url(${bgEffect.src})` }}
    >
      <div className="w-full lg:w-[90%] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between  text-white lg:mt-10 2xl:mt-0">
          <div className="flex flex-col gap-3 justify-center items-start lg:w-[60%] ">
            <motion.h1
              variants={navVariants}
              className="text-[40px] sm:text-5xl lg:text-6xl 2xl:text-[72px] font-aeonik-pro leading-[120%] lg:leading-[110%] xl:leading-[100%] 2xl:leading-[80px] mt-6 lg:mt-0"
            >
              Send money to India with best rates & zero fees
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="font-matter-regular text-base lg:text-xl font-medium lg:leading-[30px] text-white/70 mb-5 lg:mb-8"
            >
              Get more INR for every CAD you send, better than banks, better
              than competitors. No hidden fees. No bad surprises. Just the best
              exchange rates in Canada – every single time!
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <ButtonOutlined lable="Send Money Now" />
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col gap-[22px] w-full max-w-[400px] lg:ml-auto mt-10 lg:mt-16 overflow-hidden">
           {rateInfo.map((item, index) => {
              const isActive = index === 1;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.5, 1)}
                  initial="hidden"
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    y: 0,
                  }}
                  transition={{ delay: index * 0.5, type: "spring", duration: 1 }}
                  className={`bg-white ${
                    isActive
                      ? "relative z-20 shadow-[0_0px_25px_18px_rgb(0,6,177)] md:shadow-[0_0px_45px_28px_rgb(0,6,177)] opacity-100"
                      : ""
                  } border w-full border-[#DEDEDE] flex justify-between items-center px-4 py-3.5 rounded-[16px]`}
                >
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={item.icon}
                      alt=""
                      width={54}
                      height={54}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    />
                    <div>
                      <span className="text-[#03012E80]/50 font-matter-regular text-base">
                        {item.lable}:
                      </span>
                      <h6 className="text-dark font-matter-semibold text-base">
                        {item.rate}
                      </h6>
                    </div>
                  </div>
                  <span className="bg-[#5CB85C26]/15 rounded-full px-5 py-2 font-openSans text-[#5CB85C] font-semibold text-[15px]">
                    {item.pecentage}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
 <div
        className="
          absolute -bottom-[6%] lg:-bottom-[20%]
          left-1/2 -translate-x-1/2
          w-full lg:w-[90%] mx-auto px-4 lg:px-0
        "
      >
        {/* 
          Use flex + overflow-x-auto on mobile,
          switch back to grid-cols-4 on lg+
        */}
        <div
          className="
            flex lg:grid lg:grid-cols-4 gap-2 lg:gap-7
            overflow-x-auto lg:overflow-hidden
            snap-x snap-mandatory
            ml-4 lg:ml-0  
            px-4     hide-scrollbar    
          "
        >
          {[user1, user2, user3, user4].map((src, index) => (
            <motion.div
              key={index}
              initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
              className="
                flex-shrink-0 w-[235px] lg:w-auto
                snap-start
                border-b border-[#CDCCDB] pb-7
                mx-2 lg:mx-0        /* spacing in scroll mode */
              "
            >
              <Image
                src={src}
                alt=""
                className="rounded-xl object-cover object-center h-[280px] md:h-[370px] w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
