"use client";
import Image from "next/image";
import React from "react";
import gallary1 from "../../../../public/img/gallary1.png";
import gallary2 from "../../../../public/img/gallary2.png";
import gallary3 from "../../../../public/img/gallary3.png";
import gallary4 from "../../../../public/img/gallary4.png";
import gallary5 from "../../../../public/img/gallary5.png";
import gallary6 from "../../../../public/img/gallary6.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../../utils/Motion";

const ImageGallery = () => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="layout-container py-12 lg:py-16"
    >
      <div className="text-center">
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-bold font-darkerGrotesque text-4xl lg:text-5xl xl:text-[56px] mb-5 text-[#183B56] tracking-[0.2px]"
        >
          Confident Futures, Happy Faces
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="lg:w-[60%] mx-auto font-normal font-figtree text-lg lg:text-xl text-[#5A7184] leading-7 lg:leading-9"
        >
          Whether you're building your savings or growing your investments, true
          peace of mind starts with a solid plan
        </motion.p>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-[30px] lg:mt-12 ">
        {/* Left Column */}
        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          className="flex flex-col rounded-md bg-gray-100"
        >
          <Image
            src={gallary1}
            width={254}
            height={254}
            alt="Man in blue shirt"
            className="h-[254px] w-[254px] rounded-md object-cover"
          />
        </motion.div>

        {/* Center Column */}
        <div className="flex flex-1 flex-col gap-[30px] self-stretch">
          {/* Top Row in Center */}
          <div className="flex items-center justify-between gap-5 ">
            <motion.div
              variants={slideIn("up", "tween", 0.5, 1)}
              className="flex rounded-md"
            >
              <Image
                src={gallary2}
                width={444}
                height={316}
                alt="Aerial view"
                className="h-[316px] w-[444px] rounded-md object-cover "
              />
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 0.6, 1)}
              className="w-[50%] xl:w-[32%] self-end rounded-md"
            >
              <Image
                src={gallary3}
                width={206}
                height={212}
                alt="Girl enjoying ocean"
                className="h-[212px] w-full rounded-md object-cover "
              />
            </motion.div>
          </div>

          {/* Bottom Row in Center */}
          <div className="flex items-start justify-between gap-5 ">
            <motion.div
              variants={slideIn("down", "tween", 0.7, 1)}
              className="w-[50%] xl:w-[32%] rounded-md"
            >
              <Image
                src={gallary4}
                width={206}
                height={212}
                alt="Man and woman"
                className="h-[212px] w-full rounded-md object-cover "
              />
            </motion.div>
            <motion.div
              variants={slideIn("up", "tween", 0.8, 1)}
              className="flex self-center rounded-md"
            >
              <Image
                src={gallary5}
                width={444}
                height={316}
                alt="Couple in field"
                className="h-[316px] w-[444px] rounded-md object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          variants={slideIn("right", "tween", 0.9, 1)}
          className="mb-[126px] w-[26%] self-end rounded-md"
        >
          <Image
            src={gallary6}
            width={322}
            height={326}
            alt="Woman having fun"
            className=" w-[322px] h-[326px] rounded-md object-cover "
          />
        </motion.div>
      </div>

      {/* mobile gallary */}
      <div className="grid grid-cols-2 lg:hidden gap-2 md:gap-4 mt-6">
        <Image
          src={gallary1}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
        <Image
          src={gallary3}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
        <Image
          src={gallary6}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
        <Image
          src={gallary4}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
        <Image
          src={gallary5}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
        <Image
          src={gallary2}
          width={254}
          height={254}
          alt="Man in blue shirt"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
    </motion.div>
  );
};

export default ImageGallery;
