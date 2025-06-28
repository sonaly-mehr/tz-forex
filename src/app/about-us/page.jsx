import Image from "next/image";
import React from "react";
import shaddowBg from "../../../public/img/shaddow-ellipse.svg";
import bgEffect from "../../../public/img/BG.png";
import aboutBg from "../../../public/img/about-bg.jpg";
import { RxCross2 } from "react-icons/rx";
import whytzforex from "../../../public/img/why-tzforex.svg";
import phone from "../../../public/img/money-transfer.png";
import { GiCheckMark } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/Ui/Button";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const whyChooseRemiflow = [
  {
    icon: "/img/icons/savings.svg",
    heading: "We Save You More",
    descp: "Better exchange rates = more INR for your family.",
  },
  {
    icon: "/img/icons/fees2.svg",
    heading: "Zero Fees, No Hidden Charges",
    descp: "Unlike banks & big providers, we keep it fair.",
  },
  {
    icon: "/img/icons/cash2.svg",
    heading: "Cash Pickup at Your Location",
    descp: "No need to visit a store, we’ll come to you.",
  },
  {
    icon: "/img/icons/fast.svg",
    heading: "Super Fast Transfers",
    descp: "Your recipient gets money in their bank quickly.",
  },
  {
    icon: "/img/icons/secure2.svg",
    heading: "100% Secure & Regulated",
    descp: "Your recipient gets money in their bank quickly.",
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
        className="w-full min-h-screen  md:min-h-[120vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgEffect.src})` }}
      >
        {/* hero */}
        <div className="w-full lg:w-[90%] mx-auto px-4 lg:px-0 pt-6 lg:pt-24 ">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-10 ">
            <h2 className="lg:w-[50%] font-aeonik-pro text-white leading-[120%] text-left text-[40px] md:text-[50px] lg:text-[55px] xl:text-[64px]">
              Built by Immigrants, for Immigrants
            </h2>
            <div className="lg:w-[40%]">
              <p className=" font-matter-normal text-white/80 text-base mb-5 lg:text-[20px] leading-[150%] text-left  pt-5 lg:pt-3">
                We Know the Struggles of Sending Money Home—Because We've Been
                There Too
              </p>
              <p className="font-matter-normal text-white/80 text-base lg:text-[20px] leading-[150%] text-left   mt-3.5 lg:mt-0 ">
                {" "}
                We started Remiflow with a simple goal: help immigrants send
                money home without getting ripped off by hidden fees and bad
                exchange rates
              </p>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-44 md:bottom-28  lg:-bottom-[230px] w-full">
          <div className="w-[90%] mx-auto">
            <Image
              src={aboutBg}
              alt=""
              className="w-full h-auto rounded-2xl overflow-hidden"
               quality={100}
            />
          </div>
        </div>
      </div>

      <div className="bg-white  lg:pt-[280px]"></div>

      {/* issues with other bank */}
      <div className="bg-primary -mt-20 lg:mt-0 relative z-10 w-[90%] mx-auto py-4 lg:py-10 px-4 lg:px-8 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between container rounded-2xl  mb-10 lg:mb-20 shadow-[0px_6px_20px_0px_#0000000A]">
        <h5 className="font-matter-medium text-xl lg:text-2xl text-white lg:ml-[10px] xl:w-[38%]">
          Like you, we've been frustrated by:
        </h5>
        <ul className="flex flex-col gap-3 lg:gap-2  ">
          <li className="font-matter-normal text-white text-base flex gap-1.5 items-center">
            <RxCross2 className="text-lg text-white flex-shrink-0 " /> High
            transfer fees that eat into hard-earned money
          </li>
          <li className="font-matter-normal text-white text-base flex gap-1.5 items-center">
            <RxCross2 className="text-lg text-white flex-shrink-0" /> Banks &
            providers that offer terrible exchange rates
          </li>
          <li className="font-matter-normal text-white text-base flex gap-1.5 items-center">
            <RxCross2 className="text-lg text-white flex-shrink-0" /> Slow and
            complicated processes
          </li>
        </ul>
        <div className="flex items-center  lg:justify-end ">
          <h6 className="font-matter-medium text-white text-lg lg:w-[60%] mt-3 lg:mt-0">
            That’s why we built Remiflow—to put YOU first.
          </h6>
        </div>
      </div>

      {/* why-choose-txforex */}
      <div className="py-6 lg:py-12 px-4 lg:px-8 flex flex-col lg:flex-row gap-10 justify-between md:w-[90%] lg:w-[80%] mx-auto items-center">
        <div className="">
          <Image
            src={whytzforex}
            alt=""
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="">
          <h2 className="heading  lg:text-[48px] !mb-6 lg:!mb-[30px]">
            Why tz forex?
          </h2>
          <div className="flex flex-col gap-8">
            {whyChooseRemiflow?.map((item, index) => (
              <div key={index} className="flex gap-5 items-center">
                <div className="w-[46px] h-[40px] lg:w-[60px] lg:h-[60px] border border-[#E8E8EA] flex justify-center items-center bg-white p-2.5 lg:p-2 rounded-full  shadow-[0px_10px_16px_-5px_#5C657829]">
                  <Image
                    src={item?.icon}
                    alt=""
                    width={23}
                    height={23}
                    className="w-[20px] lg:w-auto h-auto "
                    quality={100}
                  />
                </div>
                <div>
                  <h6 className="font-openSans font-semibold text-[#1A1A1A] text-base lg:text-xl mb-1 lg:mb-2">
                    {item?.heading}
                  </h6>
                  <p className="font-matter-normal text-[#1A1A1A] tex-sm lg:text-lg ">
                    {item?.descp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Our Goal */}
      <div className="bg-primary py-5 lg:py-10 px-4 lg:px-16 flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between w-[90%] lg:w-[80%] mx-auto rounded-2xl mt-4 mb-10 lg:mb-20 shadow-[0px_6px_20px_0px_#0000000A]">
        <h5 className="font-matter-semibold mb-2.5 lg:mb-0 text-lg  lg:text-2xl text-white lg:ml-[10px] lg:w-[45%]">
          Unlike big corporations, we don’t take massive commissions. Our goal
          is simple:
        </h5>
        <ul className="flex flex-col gap-4 lg:gap-2  ">
          <li className="font-matter-regular text-white text-base flex gap-1.5 items-center">
            <GiCheckMark className="text-lg text-white" />
            Fair exchange rates
          </li>
          <li className="font-matter-regular text-white text-base flex gap-1.5 items-center">
            <GiCheckMark className="text-lg text-white" />
            Zero fees
          </li>
          <li className="font-matter-regular text-white text-base flex gap-1.5 items-center">
            <GiCheckMark className="text-lg text-white" /> No hidden charges
          </li>
        </ul>
      </div>

      {/*Money transfer*/}
      <div className="bg-[#F9FBFE] py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row layout-container gap-4 lg:gap-20 justify-between items-center">
          <div className="lg:basis-[60%] order-2  lg:order-1 ">
            <h2 className="font-aeonik-pro text-dark tracking-[-1.5%] lg:leading-[80px] text-3xl lg:text-[70px]">
              Making Money Transfers Fair & Simple
            </h2>
            <p className="font-matter-normal text-dark text-base lg:text-xl lg:leading-[150%] mt-4 mb-10">
              We know every dollar counts when sending money to loved ones.
              That’s why Remiflow exists—to make remittances more transparent,
              affordable, and accessible for the immigrant community.
            </p>
            <ul className="flex flex-col gap-7">
              {moneyTransfer?.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 items-center bg-white rounded-lg p-3.5 shadow-[0px_12px_16px_0px_#0000000A] font-openSans font-semibold text-sm lg:text-lg text-[#1A1A1A]"
                >
                  <FaCheckCircle className="text-[#5CB85C]  text-lg lg:text-[22px] flex-shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1  lg:order-2 flex-1">
            <Image src={phone} alt="" className="h-[300px] lg:h-auto" quality={100}/>
          </div>
        </div>
      </div>

      {/*Where we are based*/}
      <div className="pt-0 lg:pt-16 pb-10 lg:pb-32 bg-white w-full rounded-es-[50px] rounded-ee-[50px]  overflow-hidden relative -bottom-14">
        <div className="w-full lg:w-[90%] mx-auto px-4 lg:px-0 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 lg:items-center">
          <div>
            <h2 className="text-3xl lg:text-[56px] font-openSans font-bold text-dark leading-[130%]">
              Where We’re Based
            </h2>
            <p className="font-matter-normal text-dark text-base lg:text-xl leading-[180%] mt-6 mb-6 w-[80%]">
              Headquartered in Canada Serving the Indian community across the
              country.
            </p>
            <Button lable="Send Money Now" className="py-4 lg:py-6 px-6" />
          </div>

          <div>
            <h6 className="font-openSans font-semibold text-dark text-xl lg:text-2xl lg:leading-[180%] mb-5">
              Need help with a transfer? We’re always here.
            </h6>
            <div className=" bg-[#F7F8FA] shadow-[0px_6px_20px_0px_#0000000A] p-4 lg:p-8 rounded-[20px]">
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0  xl:items-center lg:justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] border border-[#E8E8EA] flex justify-center items-center bg-white p-1 rounded-md  shadow-[0px_10px_16px_-5px_#5C657829]">
                    <IoIosMail className="text-primary text-[22px] lg:text-[26px]" />{" "}
                  </div>
                  <span className="font-matter-normal text-dark text-base lg:text-lg">
                    support@remiflow.com
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] border border-[#E8E8EA] flex justify-center items-center bg-white p-1 rounded-md  shadow-[0px_10px_16px_-5px_#5C657829]">
                    <FaPhoneAlt className="text-primary text-[20px] lg:text-[22px]" />{" "}
                  </div>
                  <span className="font-matter-normal text-dark text-base lg:text-lg">
                    +1-XXX-XXX-XXXX
                  </span>
                </div>
              </div>
              <p className="font-matter-normal text-dark text-=sm lg:text-lg leading-[150%] mt-8">
                We treat every transfer like our own, so you can send money
                worry-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
