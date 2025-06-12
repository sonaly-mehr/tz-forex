"use client";
import React from "react";
import Bitmap from "../../../../public/img/Bitmap.jpg";
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
const TrustRemiflow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 lg:px-0 lg:w-full flex flex-col lg:flex-row gap-6 lg:gap-16 pt-5 pb-12 lg:pt-32 lg:pb-32"
    >
      <div className="order-2 lg:order-1 lg:flex-1 lg:mr-16">
        <div className="relative">
          <Image
            src={Bitmap}
            alt="bitmap"
            className="hidden lg:block rounded-se-lg rounded-ee-lg"
          />
          <div className="lg:absolute lg:top-24 right-0 w-fit">
            <div className="flex flex-col gap-4  ">
              {benefits?.map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  key={index}
                  className={`w-fit bg-white rounded-lg p-2.5 lg:p-3 shadow-[0px_12px_16px_0px_#00000014] lg:relative ${
                    index === 0
                      ? "-right-[150px]"
                      : index === 1
                      ? "-right-[170px]"
                      : index === 2
                      ? "-right-[220px]"
                      : index === 3
                      ? "-right-[250px]"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 lg:gap-5 items-start">
                    <FaCheckCircle className="text-[#5CB85C] text-[22px] mt-[6px]" />
                    <div>
                      <h5 className="font-matter-medium text-dark text-base lg:text-[22px] lg:mb-1.5 leading-tight">
                        {item?.title}
                      </h5>
                      <span className="font-openSans font-normal text-dark/60 text-sm lg:text-lg leading-snug">
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

      <div className="order-1 lg:order-2 lg:flex-1 lg:pr-[5%]">
        <h4 className="md:w-[85%] my-3 lg:my-5 font-bold text-4xl lg:text-5xl font-darkerGrotesque text-[#183B56] leading-10 lg:leading-[58px] tracking-[-1.5%]">
          Why Immigrants Trust RemiFlow
        </h4>
        <p className="font-figtree font-medium text-[#5A7184B2]/70 text-base lg:text-[25px] leading-6 lg:leading-[165%] ">
          Sending money home isn’t just a transaction; it’s a connection. we
          know every rupee counts. That’s why we make sure you get the best
          value
        </p>
      </div>
    </motion.div>
  );
};

export default TrustRemiflow;
