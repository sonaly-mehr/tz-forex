"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import sendMoney from "../../../../public/img/send-money.jpg";
import { fadeIn, staggerContainer } from "../../../../utils/Motion";
import { motion } from "framer-motion";
import Calculator from "../../Ui/Calculator";

const SendMoney = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="pt-24 lg:pt-60 pb-10 layout-container"
    >
      <div className="flex flex-col lg:flex-row gap-5 xl:gap-[70px] items-center justify-between">
        <div className="flex flex-col gap-8 flex-1">
          <motion.h4
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-[32px] lg:text-5xl font-aeonik-pro text-dark tracking-[-1.5%] leading-10 lg:leading-[55px]"
          >
            Send money with confidence see how much they’ll receive instantly!
          </motion.h4>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="font-darkerGrotesque text-xl lg:text-2xl font-medium text-[#5A7184B2]/70 -mt-4 "
          >
            Get more INR for every CAD you send, better than banks, better than
            competitors. No hidden fees. No bad surprises. Just the best
            exchange rates in Canada – every single time!
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            className="hidden lg:flex bg-[#EBF1FF] shadow-[0px_6px_10px_4px_#6060600F] px-3 lg:px-6 py-3 lg:py-5 w-[90%] rounded-lg text-center  gap-4 items-center"
          >
            <FaCheckCircle className="text-[#5CB85C] text-lg lg:text-[20px] min-w-[20px]" />
            <h5 className="text-[#333333] font-normal font-figtree text-[19px] text-left capitalize ">
              Canada’s First Cash Drop-Off & Pickup Service
            </h5>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.9, 1)}
            className="hidden lg:flex bg-[#EBF1FF] shadow-[0px_6px_10px_4px_#6060600F] px-3 lg:px-6 py-3 lg:py-5 w-[90%] rounded-lg text-center gap-4 items-center"
          >
            <FaCheckCircle className="text-[#5CB85C]  text-lg lg:text-[20px] min-w-[20px]" />
            <h5 className="text-[#333333] font-normal font-figtree text-[19px] text-left capitalize ">
              Pay Securely with Interac – We Never Ask for Credit or Debit Card
              Details
            </h5>
          </motion.div>
        </div>

        {/* send money */}
        <div
          className="lg:flex-1 w-full lg:min-h-[820px] rounded-xl lg:rounded-[30px] bg-cover bg-center relative flex justify-center items-center"
          style={{ backgroundImage: `url(${sendMoney.src})` }}
        >
          {/* Calculator Widget */}
          <Calculator/>
        </div>
      </div>

      {/* mobile-view */}
      <motion.div
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="flex lg:hidden bg-[#EBF1FF] shadow-[0px_6px_10px_4px_#6060600F] px-3 lg:px-6 mt-6 mb-4 py-3 lg:py-5 w-full rounded-lg text-center  gap-4 items-center"
      >
        <FaCheckCircle className="text-[#5CB85C] text-lg lg:text-[20px] min-w-[20px]" />
        <h5 className="text-[#333333] font-normal font-figtree text-[19px] text-left capitalize ">
          Canada’s First Cash Drop-Off & Pickup Service
        </h5>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.9, 1)}
        className="flex lg:hidden bg-[#EBF1FF] shadow-[0px_6px_10px_4px_#6060600F] px-3 lg:px-6 py-3 lg:py-5 w-full rounded-lg text-center gap-4 items-center"
      >
        <FaCheckCircle className="text-[#5CB85C]  text-lg lg:text-[20px] min-w-[20px]" />
        <h5 className="text-[#333333] font-normal font-figtree text-[19px] text-left capitalize ">
          Pay Securely with Interac – We Never Ask for Credit or Debit Card
          Details
        </h5>
      </motion.div>
    </motion.div>
  );
};

export default SendMoney;
