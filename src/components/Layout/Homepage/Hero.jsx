"use client";
import Button from "@/components/Ui/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";
import ButtonOutlined from "@/components/Shared/ButtonOutlined";
import bgEffect from "../../../../public/img/BG.png";
import user1 from "../../../../public/img/user1.png";
import user2 from "../../../../public/img/user2.png";
import user3 from "../../../../public/img/user3.png";
import user4 from "../../../../public/img/user4.jpg";

const mobileOrderClasses = [
  "order-4 lg:order-none", // First image (index0) becomes last
  "order-2 lg:order-none", // Second image maintains position
  "order-3 lg:order-none", // Third image maintains position
  "order-1 lg:order-none", // Last image (index3) becomes first
];

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
    const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [user1, user2, user3, user4];
  
  // For mobile: reverse the order [last, ..., first]
  const mobileOrder = [3, 2, 1, 0];
  const mobileImages = mobileOrder.map(index => images[index]);
  
  // Auto slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused, images.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      // className="min-h-[88vh] flex items-center pb-14 xl:pb-8 bg-primary text-white w-full"
      className="w-full min-h-screen  md:min-h-[120vh] bg-cover bg-center relative pt-6 lg:pt-20 "
      style={{ backgroundImage: `url(${bgEffect.src})` }}
    >
      <div className="w-full lg:w-[90%] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between  text-white lg:mt-10 2xl:mt-0">
          <div className="flex flex-col gap-3 justify-center items-start lg:w-[60%] ">
            <motion.h1
              variants={navVariants}
              className="text-[40px] sm:text-5xl lg:text-6xl 2xl:text-[72px] font-aeonik-pro leading-[120%] lg:leading-[110%] xl:leading-[100%] 2xl:leading-[80px] mt-6 lg:mt-0"
            >
              Send money to India with best rates & zero fees
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="font-matter-regular text-base lg:text-xl font-medium lg:leading-[30px] text-white/70 mb-5 lg:mb-8"
            >
              Get more INR for every CAD you send, better than banks, better
              than competitors. No hidden fees. No bad surprises. Just the best
              exchange rates in Canada – every single time!
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <ButtonOutlined lable="Send Money Now" />
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col gap-[22px] w-full max-w-[400px] lg:ml-auto mt-10 lg:mt-16 overflow-hidden">
           {rateInfo.map((item, index) => {
              const isActive = index === 1;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.5, 1)}
                  initial="hidden"
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    y: 0,
                  }}
                  transition={{ delay: index * 0.5, type: "spring", duration: 1 }}
                  className={`bg-white ${
                    isActive
                      ? "relative z-20 shadow-[0_0px_25px_18px_rgb(0,6,177)] md:shadow-[0_0px_45px_28px_rgb(0,6,177)] opacity-100"
                      : ""
                  } border w-full border-[#DEDEDE] flex justify-between items-center px-4 py-3.5 rounded-[16px]`}
                >
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={item.icon}
                      alt=""
                      width={54}
                      height={54}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    />
                    <div>
                      <span className="text-[#03012E80]/50 font-matter-regular text-base">
                        {item.lable}:
                      </span>
                      <h6 className="text-dark font-matter-semibold text-base">
                        {item.rate}
                      </h6>
                    </div>
                  </div>
                  <span className="bg-[#5CB85C26]/15 rounded-full px-5 py-2 font-openSans text-[#5CB85C] font-semibold text-[15px]">
                    {item.pecentage}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
 <div className="absolute -bottom-[6%] lg:-bottom-[20%] left-1/2 -translate-x-1/2 w-full lg:w-[90%] mx-auto px-4 lg:px-0">
        {/* Desktop Grid (original order) */}
        <div className="hidden lg:grid grid-cols-4 gap-7">
          {images?.map((src, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn("right", "spring", index * 0.3, 0.75)}
              className="border-b border-[#CDCCDB] pb-7"
            >
              <Image
                src={src}
                alt=""
                className="rounded-xl object-cover object-center h-[370px] w-full"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Carousel (reversed order) */}
        <div 
          className="lg:hidden relative overflow-hidden rounded-xl h-[280px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <div className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {mobileImages.map((src, index) => (
              <div key={index} className="min-w-[90%]  h-[370px] pr-5 ">
                <Image
                  src={src}
                  alt={`User ${index + 1}`}
                  className="rounded-xl object-cover object-center h-[370px] w-full"
                  // layout="responsive"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
