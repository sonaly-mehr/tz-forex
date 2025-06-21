"use client";
import React, { useEffect, useState } from "react";
import subcribeBg from "../../../../public/img/subscribe-bg.svg";
import personImg from "../../../../public/img/person-with-phone.svg";
import Image from "next/image";

const Subscribe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const emailPlaceholder = isMobile
    ? "Email address"
    : "Add your email address";
  return (
    <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0  my-14 lg:mt-20 lg:mb-40">
      <div
        className=" px-4  py-6 md:px-20 overflow-hidden rounded-3xl lg:rounded-[40px] md:pt-16 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${subcribeBg.src})` }}
      >
        <div className="md:w-[60%] flex flex-col gap-4 lg:gap-5  pb-[65%]  lg:pb-0">
          <h2 className="text-3xl lg:text-5xl lg:leading-[120%] font-aeonik-pro text-white capitalize">
            Subscribe to our weekly email newsletter{" "}
          </h2>
          <p className="text-base lg:text-xl font-matter-regular text-white leading-[160%]">
            Get the latest money-saving tips & exchange rate insights delivered
            to your inbox.
          </p>

          <div className="w-full relative flex items-center mt-2 lg:mb-10">
            <input
              placeholder={emailPlaceholder}
              className="font-matter-light   placeholder:text-[#666666] text-sm lg:text-lg p-4 lg:px-8 lg:py-6 pr-[130px] lg:pr-[210px] rounded-full bg-white w-full"
            />
            <button className="bg-primary hover:bg-primary/90 rounded-full px-3 lg:px-8 h-[44px] lg:h-[55px] font-matter-light text-white  text-sm lg:text-lg absolute right-1 lg:right-3.5 top-1/2 -translate-y-1/2 ">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-[2.6%] xl:bottom-0 left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-14">
          <Image src={personImg} alt="" className="w-full" quality={100}/>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
