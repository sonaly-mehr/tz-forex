import Image from "next/image";
import React from "react";
import shaddowBg from "../../../public/img/shaddow-ellipse.svg";
import bgEffect from "../../../public/img/BG.png";
import aboutBg from "../../../public/img/about-bg.jpg";
import { RxCross2 } from "react-icons/rx";
import whyRemiflow from "../../../public/img/why-remiflow.jpg";
import phone from "../../../public/img/phone.svg";
import { GiCheckMark } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/Ui/Button";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import referal from "../../../public/img/referal.svg";
import referalMobile from "../../../public/img/referal-mobile.svg";
import howToRefer from "../../../public/img/how-to-refer.png";
import laptopPerson from "../../../public/img/person-with-laptop.svg";
import ellipse from "../../../public/img/Ellipse.png";
import FAQ from "@/components/Layout/Homepage/FAQ";

const howReferWorks = [
  {
    heading: "Invite your friends",
    descp:
      "Easily invite your friends with your unique referral code via email, social media, or chat tools.",
  },
  {
    heading: "Join & get a welcome bonus!",
    descp:
      "Once the person you referred signs up using your link, they will receive $10 CAD bonus.",
  },
  {
    heading: "You get rewarded",
    descp:
      "Receive $20 CAD in rewards once they complete a total of $200 CAD in money transfers.",
  },
];

const moneyTransfer = [
  "No hidden fees. What you send is what your family gets.",
  "More INR per CAD. We offer better exchange rates than banks & competitors.",
  "Hassle-free transfers. Pay via Interac e-Transfer or schedule a cash pickup.",
  "No corporate greed. We don’t take big profits like the big guys—our mission is to serve our community.",
  "Remiflow is made by immigrants, for immigrants—so you can send money with confidence.",
];
const page = () => {
  return (
    <div className="relative">
      <div
        className="w-full min-h-[105vh] lg:min-h-[110vh] bg-primary relative overflow-hidden"
        // style={{ backgroundImage: `url(${bgEffect.src})` }}
      >
        {/* hero */}
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 pt-6 lg:pt-20 ">
          <div className="">
            <div className="lg:w-[50%]">
              <h2 className="font-aeonik-pro text-white leading-[120%] text-[40px] md:text-[50px] lg:text-[55px] xl:text-[70px] ">
                Join our Referral program
              </h2>
              <p className="font-matter-regular text-white leading-[150%] text-base lg:text-xl  mt-4 mb-10">
                Get more INR for every CAD you send, better than banks, better
                than competitors. No hidden fees. No bad surprises. Just the
                best exchange rates in Canada – every single time!
              </p>
              <button className="realtive z-40 bg-white font-matter-semibold text-xl text-dark tracking-[-2%] rounded-xl px-7 py-3.5 mb-5 lg:mb-0">
                Send Money Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 sm:bottom-0 lg:-bottom-40 left-0 right-0  w-full z-20">
          <Image src={ellipse} alt="" className="ellipse w-full" />
        </div>

         <div className="absolute -bottom-0 left-0 right-0">
            {/* <Image src={referal} alt="" className="hidden md:block" /> */}
            <Image src={referalMobile} alt="" className="block sm:hidden w-full" />
          </div>

        {/* <div className="absolute right-0 bttom-0">
              <Image src={referal} alt="" className=""/>

            </div> */}
        {/* <div className="absolute right-[20%] top-[40%] text-lg text-dark bg-white rounded-ss-full rounded-se-full rounded-ee-full px-4 py-2 font-openSans font-medium">
            $20 referral bonus
           </div> */}
      </div>

      <div className="relative top-10 md:-top-20  lg:-top-40">
        <div className=" relative w-full lg:w-[88%] mx-auto px-4 lg:px-0  ">
          <div
            className="w-full rounded-3xl relative z-20 py-10 lg:py-0 lg:min-h-[520px] flex justify-center items-center"
            style={{
              backgroundImage: "url('/img/referral-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // You can change the height as needed
            }}
          >
            <div className="px-4 lg:px-14">
              <h2 className="text-dark font-matter-medium text-3xl lg:text-5xl text-center mb-8 lg:mb-14">
                How Refer & Earn works?
              </h2>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 lg:justify-between ">
                {howReferWorks?.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white  ${
                      index !== 1 && "border border-[#2C090B14]/10 "
                    } shadow-[30px_49px_100px_0px_#32131514] flex flex-col gap-2.5 items-center justify-center p-4 lg:p-12 rounded-[20px]`}
                  >
                    <div className="bg-white mb-2 rounded-full shadow-[0px_10px_16px_-5px_rgba(92,101,120,0.16)] border border-[#E4E4E5] w-[52px] h-[52px] flex justify-center items-center">
                      {index + 1}
                    </div>
                    <h5 className="font-matter-medium text-dakr  text-lg lg:text-xl">
                      {item?.heading}
                    </h5>
                    <p className="text-[#04040499]/60 font-matter-regular text-base lg:leading-[140%] lg:text-lg text-center">
                      {item?.descp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-[30%] sm:-top-[70%] lg:-top-[120%] lg:-right-14 z-0">
            <Image src={referal} alt="" className="hidden sm:block" />
            {/* <Image src={referalMobile} alt="" className="block md:hidden" /> */}
          </div>

        </div>
                  <div className="absolute right-[20%] sm:right-[20%] -top-[40%]  lg:-top-[60%] z-20 text-base lg:text-lg text-dark bg-white rounded-ss-full rounded-se-full rounded-ee-full px-4 py-2 font-openSans font-medium">
            $20 referral bonus
           </div>
      </div>

      {/* <div className="bg-white  lg:pt-[280px]"></div> */}

      {/*We beliefe*/}
      <div className="bg-[#F7F8FA] py-12 lg:py-20 mt-32 lg:mt-0">
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 flex  flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-16">
          <div className="lg:flex-1 order-2 lg:order-1 flex flex-col justify-center items-center lg:justify-normal lg:items-start">
            <h6 className="text-dark font-matter-medium text-lg lg:text-xl">
              We believe that
            </h6>
            <h2 className="font-aeonik-pro text-4xl md:text-5xl xl:text-[70px] 2xl:leading-[130%] text-dark mt-2 mb-6">Sharing is Caring</h2>
            <p className="font-matter-light text-base lg:text-xl lg:leading-[150%] mb-8 text-center lg:text-left">
              Sharing Remitbee with friends and family doesn’t just help you
              earn money, but it also helps your loved ones save money. We’re
              confident they’ll love our high exchange rates, low fees, and
              world-class customer care. We’re here to help you support your
              loved ones both close and far.
            </p>
            <Button lable="Start Inviting" className="" />
          </div>

          <div className="lg:flex-1 order-1 lg:order-2">
            <Image src={laptopPerson} alt="" className=""/>
          </div> 
        </div>
      </div>
            <div className="mt-16">
        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
};

export default page;
