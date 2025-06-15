"use client";
import React from "react";
import SendMoney from "../../../../public/img/send-money2.jpg";
import Image from "next/image";
import Button from "@/components/Ui/Button";
import icon1 from "../../../../public/img/icons/verify.svg";
import icon2 from "../../../../public/img/icons/encryption.svg";
import icon3 from "../../../../public/img/icons/money.svg";
import { motion } from "framer-motion";
import {
  fadeIn,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";

const items = [
  {
    icon: icon1,
    text: "FINTRAC Registered (MSB License #XXXXXX)",
  },
  {
    icon: icon2,
    text: "256-bit Bank-Grade Encryption",
  },
  {
    icon: icon3,
    text: "Money-Back Guarantee – Your money is always protected",
  },
];
const MoneySecured = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="layout-container flex flex-col lg:flex-row gap-8 lg:gap-12"
    >
      <div className="lg:flex-1">
        <div className="lg:w-[95%]">
          <motion.h4
            variants={navVariants}
            className="font-aeonik-pro text-[32px] leading-[130%] lg:text-[48px] text-dark lg:leading-[58px] tracking-[-1.5%]"
          >
            Safe & Regulated – Your Money is Secure
          </motion.h4>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="font-matter-regular mt-3 mb-6 text-dark/70 text-base lg:text-lg lg:w-[95%]"
          >
            We follow strict security & compliance standards, so your funds are
            safe with us.
          </motion.p>
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
            <Button
              lable="Send Money to Any Bank"
              className="py-5 px-6  lg:text-xl"
            />
          </motion.div>

          <div className=" flex flex-col gap-5 lg:w-[95%] mt-10 lg:mt-14">
            {items?.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("up", "spring", index * 0.5, 1)}
                className="bg-[#EBF1FF] border border-[#EBF1FF1A] rounded-xl p-3 lg:p-5 flex gap-5 items-center"
                key={index}
              >
                <div
                  className={`${
                    index !== 1 ? "w-[50px] lg:w-[40px]" : "w-[40px]"
                  }  h-[40px] flex justify-center items-center bg-white p-2 rounded-full border border-[#F5F5F5] shadow-[0px_10px_16px_-5px_#5C657829]`}
                >
                  <Image
                    src={item?.icon}
                    alt=""
                    className=" w-[20px] h-[20px] "
                  />
                </div>
                <h4 className="font-matter-regular text-[#0D0A08] font-normal text-base lg:text-xl">
                  {item?.text}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:flex-1 mt-2 lg:mt-0">
        <Image src={SendMoney} alt="" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default MoneySecured;
