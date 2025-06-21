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
      className="layout-container flex  flex-col"
    >
      <div className="flex flex-col lg:flex-row  justify-between mb-8">
        <motion.h4
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" heading lg:w-[60%]"
        >
          Send Money to India’s Top Banks
        </motion.h4>
        <div className="flex flex-col items-end lg:w-[22%]">

       {/* lg:w-[60%] flex flex-col items-end */}
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className=" font-matter-regular mt-3 mb-8 text-[#02001AB2]/70 text-lg"
        >
          Transfer money directly to all major banks in India, safely &
          securely.
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="w-full">
          <Button
            lable="Send Money to Any Bank"
            className="py-5 font-aeonik-pro lg:text-xl w-full"
          />
        </motion.div>
         </div>
      </div>

      <div className="hidden lg:block w-full">
        <Image src={banks} alt="" className="h-auto w-full rounded-[20px] overflow-hidden" quality={100}/>
      </div>
      <div className="block lg:hidden mt-4 w-full">
        <Image src={banksMobile} alt="" className="w-full h-auto" quality={100}/>
      </div>
    </motion.div>
  );
};

export default Banks;
