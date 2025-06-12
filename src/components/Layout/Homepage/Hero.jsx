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
      className="min-h-[88vh] flex items-center pb-14 xl:pb-8 bg-primary text-white w-full"
    >
      <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between text-white lg:mt-10 2xl:mt-0">
          <div className="flex flex-col gap-2 lg:gap-5 justify-center items-start lg:w-1/2">
            <motion.h1
              variants={navVariants}
              className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] 2xl:text-8xl font-darkerGrotesque leading-[120%] lg:leading-[110%] xl:leading-[100%] 2xl:leading-[100px] font-bold mt-6 lg:mt-0"
            >
              Send money to India with best rates & zero fees
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="font-darkerGrotesque text-lg lg:text-2xl font-medium text-white/70 mb-4"
            >
              Get more INR for every CAD you send, better than banks, better
              than competitors. No hidden fees. No bad surprises. Just the best
              exchange rates in Canada – every single time!
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button lable="Send Money Now" secondary />
            </motion.div>
          </div>

          <div className="flex flex-col gap-[22px] w-full max-w-[430px] lg:ml-auto mt-10 lg:mt-16 overflow-hidden">
            {rateInfo.map((item, index) => (
              <div
                variants={fadeIn("up", "spring", index * 0.5, 1)}
                key={index}
                className={`bg-white ${
                  index !== 1
                    ? " opacity-50"
                    : " relative z-20 shadow-[0_0px_25px_18px_rgb(2,61,206)] md:shadow-[0_0px_45px_28px_rgb(2,61,206)] opacity-100"
                } border w-full border-[#DEDEDE] flex justify-between items-center px-4 py-3.5 rounded-[16px]`}
              >
                <div className="flex items-center gap-3.5">
                  <Image
                    src={item.icon}
                    alt=""
                    width={54}
                    height={54}
                                        className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                  />
                  <div>
                    <span className="text-[#03012E80]/50 font-normal font-openSans text-base md:text-lg">
                      {item.lable}:
                    </span>
                    <h6
                      className={`text-dark font-semibold ${
                        index === 1 ? "text-base md:text-lg" : "text-[15px] md:text-[17px]"
                      } `}
                    >
                      {item.rate}
                    </h6>
                  </div>
                </div>
                <span className="bg-[#5CB85C26]/15 rounded-full px-5 py-2 font-openSans text-[#5CB85C] font-semibold text-[15px] lg:text-[17px]">
                  {item.pecentage}
                </span>
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
