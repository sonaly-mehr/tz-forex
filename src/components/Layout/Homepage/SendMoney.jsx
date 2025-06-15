"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import sendMoney from "../../../../public/img/send-money.jpg";
import Button from "@/components/Ui/Button";
import cad from "../../../../public/img/icons/CAD.svg";
import inr from "../../../../public/img/icons/INR.svg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LiaExchangeAltSolid } from "react-icons/lia";
import totalFee from "../../../../public/img/icons/total-fee.svg";
import { fadeIn, staggerContainer } from "../../../../utils/Motion";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className=" backdrop-blur-[204px] border-[#FFFFFF]
  shadow-[0px_14px_34px_0px_#C7C7C733] 
  bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.64)_100%)] rounded-xl lg:rounded-3xl p-3  lg:p-8 w-[92%] lg:w-[90%] mx-auto my-5 sm:my-7 border"
          >
            {/* Send Amount */}
            <div className="relative w-full">
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-[0px_10px_14px_-10px_#9999993D] border border-[#EAEAEA99]">
                <div className="flex flex-col ">
                  <label className="text-[#6D6C6B80]/50 font-matter-regular  text-sm  block">
                    You send:
                  </label>
                  <span className="text-2xl lg:text-[32px] font-matter-medium text-[#161616] bg-transparent outline-none">
                      1000
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Image src={cad} alt="Canada" width={28} height={28} />
                  <span className="text-[22px] lg:text-2xl font-matter-medium">
                    CAD
                  </span>
                  <IoIosArrowDown className="text-xl text-[#AEAEAE]" />
                </div>
              </div>

              {/* Exchange Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white border rounded-full p-4 lg:p-5 ">
                  <LiaExchangeAltSolid className="text-xl lg:text-2xl text-[#161616] rotate-90" />
                </div>
              </div>
              {/* Receive Amount */}
              <div className="mb-8 mt-4 lg:mt-9">
                <div className="flex items-center justify-between bg-white  rounded-2xl p-4 shadow-[0px_10px_14px_-10px_#9999993D] border border-[#EAEAEA99]">
                  <div className="flex flex-col">
                    <label className="text-[#6D6C6B80]/50 font-matter-regular text-sm  block">
                      Recipient Receives:
                    </label>
                    <span className="text-2xl lg:text-[32px] font-matter-medium text-[#161616] bg-transparent outline-none">
                      61,250
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Image src={inr} alt="India" width={28} height={28} />
                    <span className="text-[22px] lg:text-2xl font-matter-medium">
                      INR
                    </span>
                    <IoIosArrowDown className="text-xl text-[#AEAEAE]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Exchange Rate */}
            <div className="mb-6 lg:mb-6 -mt-4 flex justify-between items-end">
              <div className="w-full">
                <p className="text-base lg:text-lg text-[#03012E80]/50 font-openSans font-normal mb-2">
                  Exchange Rate:
                </p>
                <p className="text-lg lg:text-2xl font-medium w-full flex-1 text-[#0006B1] font-aeonik-pro">
                  1 CAD = ₹61.25 INR
                </p>
              </div>
              <p className="text-xs lg:text-sm text-[#6D6C6B] text-right w-[80%] font-openSans font-normal">
                (Updated every 2 hours for accuracy.)
              </p>
            </div>
            {/* Payment Details */}
            <div className="border border-[#E4E4E4] rounded-2xl p-3.5 lg:p-5 ">
              <h3 className="text-lg font-aeonik-pro text-dark mb-5">
                Payment & Delivery Details:
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className=" text-[#02001AB2]/70 font-openSans font-normal text-sm lg:text-base">
                      Pay with
                    </span>
                  </div>
                  <div className="bg-white rounded-[4px] px-2 py-1 flex gap-2 items-center mt-2 ">
                    <span className="text-xs text-[#02001A80]/50 font-openSans font-normal">
                      Interac
                    </span>
                    <IoIosArrowDown className="text-sm text-[#02001A80]/50" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 lg:space-x-">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-[#02001AB2]/70 font-openSans font-normal text-sm lg:text-base">
                      Estimated Delivery Time
                    </span>
                  </div>
                  <span className="text-xs text-[#02001A80]/50 font-openSans font-normal">
                    1-2 days
                  </span>
                </div>
              </div>
            </div>
            {/* Total Fees */}
            <div className="bg-white boder  border-[#EAEAEA] rounded-2xl p-3 lg:p-4 my-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <Image src={totalFee} alt="Fees" width={40} height={40} />
                  <div>
                    <p className="text-sm  text-[#02001A80]/50 font-openSans font-normal">
                      Total Fees
                    </p>
                    <p className="text-sm font-matter-medium text-dark">
                      Including in CAD Amount
                    </p>
                  </div>
                </div>
                <div className="text-right flex gap-2 items-center ">
                  <p className="text-xs lg:text-lg font-medium text-gray-900 ">
                    63.11 CAD
                  </p>
                  <IoIosArrowForward className="text-xl text-[#AEAEAE]" />
                </div>
              </div>
            </div>
            <Button
              lable="Send Money Now"
              className="w-full font-matter-medium py-5"
            />
          </motion.div>
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
