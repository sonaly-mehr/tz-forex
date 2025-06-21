"use client";
import Image from "next/image";
import React from "react";
import createAccount from "../../../../public/img/create-account.svg";
import transferMoney from "../../../../public/img/transfer-money.svg";
import user from "../../../../public/img/user.png";
import paymentMethod from "../../../../public/img/payment-method.svg";
import paymentDetails from "../../../../public/img/payment-details.svg";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";

const MoneyTransferSteps = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="layout-container pt-10 pb-8 lg:pb-20"
    >
      <motion.h2
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="heading text-center lg:w-[60%] mx-auto lg:!leading-[70px]"
      >
        Send Money to India in 4 Simple Steps
      </motion.h2>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mb-10 lg:mb-14 font-figree text-lg lg:text-xl font-normal text-[#5A7184B2]/70 text-center lg:w-[60%] mx-auto"
      >
        Transfer money directly to all major banks in India, safely & securely.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-6  lg:gap-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="lg:basis-[58%] bg-[#F6F8FC] rounded-2xl py-6 lg:py-8 px-3 lg:px-10 relative overflow-hidden"
        >
          <h4 className="font-aeonik-pro text-dark text-[22px] px-4 lg:px-0 lg:text-[26px] text-center">
            Sign Up & Complete KYC in 1 Minute or Login
          </h4>
          <p className="text-[#02001A99]/60 font-openSans font-normal px-4 lg:px-0 text-center text-[15.48px] leading-[25px] my-3">
            Quick verification to ensure secure transfers.
          </p>

          <div className="flex w-full justify-center lg:justify-end mt-4 md:mt-8">
            <Image src={createAccount} alt="" className="w-[90%] mx-auto xl:w-auto" quality={100}/>
          </div>

          <div className="hidden xl:block absolute bottom-0 left-0 xl:w-[35%] 2xl:w-[40%] ">
            <Image src={user} alt="user" className=" w-full h-full" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="basis-[40%] bg-[#F6F8FC] rounded-2xl py-6 lg:py-8 px-3 lg:px-10 relative overflow-hidden"
        >
          <h4 className="font-aeonik-pro text-dark text-[22px] px-4 lg:px-0 lg:text-[26px] text-center">
            Enter the Amount You Want to Send
          </h4>
          <p className="text-[#02001A99]/60 font-openSans px-4 lg:px-0 lg:w-[90%] mx-auto font-normal text-center text-[15.48px] leading-[25px] my-3">
            Use our currency calculator to see exactly how much your recipient
            will receive in INR.
          </p>

          <div className="flex justify-center  mt-4 md:mt-10 w-full">
            <Image src={transferMoney} alt="" className="w-[90%] mx-auto md:w-full" quality={100}/>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="lg:basis-[40%] bg-[#F6F8FC] rounded-2xl py-6 lg:py-8  relative overflow-hidden"
        >
          <h4 className="font-aeonik-pro text-dark text-[22px] lg:text-[26px] text-center px-4 lg:px-10">
            Choose Your Payment Method
          </h4>
          <p className="text-[#02001A99]/60 font-openSans lg:w-[90%] px-4 lg:px-10 mx-auto font-normal text-center text-[15.48px] leading-[25px] my-3">
            Interac e-Transfer – Send securely from your bank. Cash Pickup –
            Pick a time slot, and our driver collects cash from your location.
          </p>

          <div className="flex justify-center mt-4  md:mt-10 md:w-[110%] mx-auto">
            <Image src={paymentMethod} alt="" className="w-[90%] mx-auto md:w-full md:mr-[9%]" quality={100}/>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="basis-[58%] bg-[#F6F8FC] rounded-2xl py-6 lg:py-8 px-4 lg:px-10 relative overflow-hidden"
        >
          <h4 className="font-aeonik-pro text-dark text-[22px] lg:text-[26px] text-center">
           Enter/Select Recipient’s Bank Details & Confirm
          </h4>
          <p className="text-[#02001A99]/60 font-openSans lg:w-[90%] mx-auto font-normal text-center text-[15.48px] leading-[25px] my-3">
           INR is deposited directly into their Indian bank account—fast, easy, and with no hidden fees.
          </p>

          <div className="flex justify-center  mt-4 lg:mt-10 w-full">
            <Image src={paymentDetails} alt="" className="w-[90%] mx-auto md:w-full" quality={100}/>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoneyTransferSteps;
