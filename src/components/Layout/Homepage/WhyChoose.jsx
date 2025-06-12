"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import userBg from "../../../../public/img/user-bg.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CAD from "../../../../public/img/icons/CAD.svg";
import { IoIosArrowDown } from "react-icons/io";
import rates from "../../../../public/img/icons/rates.svg";
import fees from "../../../../public/img/icons/fees.svg";
import transfer from "../../../../public/img/icons/transfer.svg";
import cash from "../../../../public/img/icons/cash.svg";
import delivery from "../../../../public/img/icons/delivery.svg";
import secure from "../../../../public/img/icons/secure.svg";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import {
  fadeIn,
  footerVariants,
  staggerContainer,
} from "../../../../utils/Motion";

const benefits = [
  {
    icon: rates,
    title: "Better Rates, More Savings",
    descp: "Get the highest exchange rates so your loved ones receive more.",
  },
  {
    icon: fees,
    title: "Zero Fees, Zero Hassles",
    descp: "No hidden charges, no deductions – just pure value.",
  },
  {
    icon: transfer,
    title: "Seamless Transfers",
    descp:
      "Pay using e-transfer or cash. We don’t store your credit or debit card information.",
  },
  {
    icon: cash,
    title: "Cash Pickup Service",
    descp: "Located in GTA? We’ll pick up your cash for added convenience.",
  },
  {
    icon: delivery,
    title: "Fast Processing",
    descp: "Funds delivered within 1-3 days – no waiting, no delays.",
  },
  {
    icon: secure,
    title: "Trusted & Secure",
    descp: "Your money is handled with the highest safety standards.",
  },
];

const WhyChoose = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const renderCard = (item, index) => (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="bg-white rounded-2xl p-7 border border-[#E5EAF4] lg:shadow-[0px_15px_35px_0px_#0000000D]"
    >
      <Image src={item.icon} alt={item.title} width={96} height={96} />
      <h4 className="text-dark/85 font-medium text-[23px] mb-2 font-aeonik-pro">
        {item.title}
      </h4>
      <p className="text-[15px] font-openSans font-normal text-dark/60 leading-[25px]">
        {item.descp}
      </p>
    </motion.div>
  );

  return (
    <motion.div
      className="bg-[#F9FBFE]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="layout-container py-10 lg:py-16">
        <motion.h2
          variants={footerVariants}
          className="heading text-left lg:text-center"
        >
          Why Choose RemiFlow?
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mb-8 lg:mb-14 font-figree text-[17px] lg:text-xl text-[#5A7184B2]/70 lg:text-center lg:w-[60%] mx-auto"
        >
          "Built by immigrants, for immigrants – sending money home isn’t just a
          transaction; it’s a connection. We know every rupee counts. That's why
          we make sure you get the best value, so your hard-earned money goes
          further for the people who matter most."
        </motion.p>

        <div className="relative">
          <Image src={userBg} className="w-full h-full" alt="background" />
          {/* Hero card omitted for brevity */}
        </div>

        {isMobile ? (
          <div className="my-12">
            <Slider ref={sliderRef} {...sliderSettings}>
              {benefits.map((item, idx) => (
                <div key={idx} className="px-2">
                  {" "}
                  {renderCard(item, idx)}{" "}
                </div>
              ))}
            </Slider>
            <div className="flex items-center justify-center gap-4 p-4 mt-4">
              <div
                className="w-12 h-12 border bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <MdKeyboardArrowLeft className=" text-[28px] text-[#6D6C6B]" />
              </div>
              <div className="flex space-x-2 bg-white border px-2.5 py-2 rounded-full">
                {benefits.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    className={`h-2 w-2 rounded-full ${
                      dotIdx === currentSlide ? "bg-black" : "bg-gray-400"
                    }`}
                    onClick={() => sliderRef.current.slickGoTo(dotIdx)}
                  />
                ))}
              </div>
              <div
                className="w-12 h-12 border bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <MdKeyboardArrowRight className=" text-[28px] text-[#6D6C6B]" />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-12">
            {benefits.map((item, idx) => renderCard(item, idx))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WhyChoose;
