"use client";
import React from "react";
import customerCare from "../../../../public/img/customer-care.jpg";
import securedMoney from "../../../../public/img/secure-money.jpg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../../utils/Motion";

const benefits = [
  {
    title: "No Debit/Credit Card Required",
    descp: "Truly hassle-free payments.",
  },
  {
    title: "Dedicated Support Team",
    descp: "Personalized help, whenever you need it.",
  },
  {
    title: "100% Safe & Secure",
    descp: "Your money is always in trusted hands.",
  },
  {
    title: "Absolute Transparency",
    descp: "No hidden fees, no surprises – just honest service.",
  },
];
const TrustForex = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="layout-container flex flex-col  gap-6 pt-10 pb-12 lg:pt-32 lg:pb-32"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 items-center">
        <motion.h4 initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }} className="lg:flex-1 mt-3 lg:my-5 heading text-left w-full">
          Why Immigrants Trust
          <br /> tz forex
        </motion.h4>
        <motion.p initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }} className="lg:w-[30%] -mt-5 lg:mt-0 font-matter-regular text-[#5A7184B2]/70 text-base lg:text-lg leading-6 lg:leading-[30px] ">
          Sending money home isn’t just a transaction; it’s a connection. we
          know every rupee counts. That’s why we make sure you get the best
          value
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 ">
        <div className="relative lg:p-3 lg:flex-1">
          <Image src={customerCare} alt="bitmap" className="rounded-[20px] w-full object-cover overflow-hidden object-center" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] lg:bottom-[7%] w-[95%] lg:w-[85%] mx-auto">
            <div className="flex flex-col gap-3 lg:gap-4  w-full">
              {benefits?.slice?.(0, 2).map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  key={index}
                  className={`w-full bg-white rounded-lg lg:rounded-xl p-2.5 lg:p-5 shadow-[0px_12px_16px_0px_#00000014] `}
                >
                  <div className="flex gap-3 lg:gap-5 items-start">
                    <FaCheckCircle className="text-[#5CB85C] text-[22px] mt-[6px]" />
                    <div>
                      <h5 className="font-matter-medium text-dark text-base lg:text-[22px] lg:mb-1.5 leading-tight">
                        {item?.title}
                      </h5>
                      <span className="font-matter-regular text-dark/60 text-sm lg:text-lg leading-snug">
                        {item?.descp}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        <div className="relative lg:p-3 lg:flex-1">
          <Image src={securedMoney} alt="bitmap" className="rounded-[20px] w-full object-cover overflow-hidden object-center" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] lg:bottom-[7%] w-[95%] lg:w-[85%] mx-auto">
            <div className="flex flex-col gap-3 lg:gap-4  ">
              {benefits?.slice?.(2, 4).map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  key={index}
                  className={`w-full bg-white rounded-lg lg:rounded-xl p-2.5 lg:p-5 shadow-[0px_12px_16px_0px_#00000014] `}
                >
                  <div className="flex gap-3 lg:gap-5 items-start">
                    <FaCheckCircle className="text-[#5CB85C] text-[22px] mt-[6px]" />
                    <div>
                      <h5 className="font-matter-medium text-dark text-base lg:text-[22px] lg:mb-1.5 leading-tight">
                        {item?.title}
                      </h5>
                      <span className="font-matter-regular text-dark/60 text-sm lg:text-lg leading-snug">
                        {item?.descp}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustForex;
