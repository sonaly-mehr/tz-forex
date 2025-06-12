"use client";
import Button from "@/components/Ui/Button";
import Image from "next/image";
import React from "react";
import banks from "../../../../public/img/banks.svg";
import banksMobile from "../../../../public/img/bank-mobile.svg";
import { fadeIn, staggerContainer } from "../../../../utils/Motion";
import { motion } from "framer-motion";

const Banks = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="layout-container flex flex-col lg:flex-row items-center"
    >
      <div className="lg:flex-1">
        <motion.h4
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="lg:w-[80%] font-darkerGrotesque font-bold text-4xl lg:text-[52px] leading-9 text-dark lg:leading-[128%]"
        >
          Send money to India’s top banks securely and instantly!
        </motion.h4>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="font-figtree font-normal mt-3 mb-8 text-dark/70 text-lg"
        >
          Transfer money directly to all major banks in India, safely &
          securely.
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
          <Button
            lable="Send Money to Any Bank"
            className="py-4 rounded-[20px] text-[22px]"
          />
        </motion.div>
      </div>

      <div className="hidden lg:block  lg:flex-1">
        <Image src={banks} alt="" className="h-auto" />
      </div>
      <div className="block lg:hidden mt-8 w-full">
        <Image src={banksMobile} alt="" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default Banks;
