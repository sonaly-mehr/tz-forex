"use client";
import React, { useEffect, useRef, useState } from "react";
import user from "../../../../public/img/icons/user.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const reviews1 = [
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
];

const reviews2 = [
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
  {
    icon: user,
    name: "Savannah Nguyen",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque, cras cursus porttitor. Tempor magna eu faucibus in sit dui facilisis interdum viverra.",
  },
];

const marqueeSettings = { repeat: Infinity, ease: "linear", duration: 40 };

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slick slider settings for mobile
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  const renderReviewCard = (item, idx) => (
    <div key={idx} className="px-4">
      <div className="bg-[#F9F9F9] rounded-2xl p-7">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <Image src={item.icon} alt={item.name} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="text-[#040404] text-xl font-semibold">{item.name}</h4>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
            </div>
          </div>
          <FcGoogle className="text-4xl" />
        </div>
        <p className="text-[#393939] text-sm leading-6">{item.descp}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white pb-20 lg:pt-20 xl:pt-0">
      <h2 className="text-[#183B56] text-4xl lg:text-[60px] font-medium text-center px-4 lg:px-0 xl:w-[42%] mx-auto leading-tight tracking-[-2.5%]">
        Trusted by immigrants in Canada
      </h2>

      {isMobile ? (
        <div className="my-12">
          <Slider ref={sliderRef} {...sliderSettings}>
            {reviews1.map((item, idx) => renderReviewCard(item, idx))}
          </Slider>
          <div className="flex items-center justify-center gap-4  p-4 mt-4">
            <div
              className="w-12 h-12 bg-[#F6F8FA] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <MdKeyboardArrowLeft className=" text-[28px] text-[#6D6C6B]"/>
            </div>
            <div className="flex space-x-2 bg-[#F6F8FA] px-2.5 py-2 rounded-full">
              {reviews1.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  className={`h-2 w-2 rounded-full ${dotIdx === currentSlide ? "bg-black" : "bg-gray-400"}`}
                  onClick={() => sliderRef.current.slickGoTo(dotIdx)}
                />
              ))}
            </div>
            <div
              className="w-12 h-12 bg-[#F6F8FA] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            >
              <MdKeyboardArrowRight className=" text-[28px] text-[#6D6C6B]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative mt-10">
          {/* Slider 1 */}
          <motion.div className="flex" animate={{ x: ["0%", "-100%"] }} transition={marqueeSettings}>
            {[...reviews1, ...reviews1].map((item, idx) => (
              <div key={`r1-${idx}`} className="flex-shrink-0 w-full md:w-1/2 2xl:w-[30%] px-2">
                {renderReviewCard(item, idx)}
              </div>
            ))}
          </motion.div>

          {/* Slider 2 */}
          <div className="mt-7" dir="rtl">
            <motion.div className="flex" animate={{ x: ["0%", "100%"] }} transition={marqueeSettings}>
              {[...reviews1, ...reviews1].map((item, idx) => (
                <div key={`r2-${idx}`} dir="ltr" className="flex-shrink-0 w-full md:w-1/2 2xl:w-[30%] px-2">
                  {renderReviewCard(item, idx)}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
