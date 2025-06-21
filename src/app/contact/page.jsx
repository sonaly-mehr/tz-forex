import Image from "next/image";
import React from "react";
import bgEffect from "../../../public/img/BG.png";
import { FaRegUser } from "react-icons/fa";
import Button from "@/components/Ui/Button";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import FAQ from "@/components/Layout/Homepage/FAQ";
import { LiaPhoneSolid } from "react-icons/lia";
import customerSupport from "../../../public/img/customer-support.jpg";
import { IoMailOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import ButtonOutlined from "@/components/Shared/ButtonOutlined";

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
        className="w-full min-h-[110vh]  md:min-h-[120vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgEffect.src})` }}
      >
        {/* hero */}
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 pt-6 lg:pt-16 ">
          <div className="flex justify-between flex-col md:flex-row gap-14 lg:gap-24 lg:items-center">
            <div className="lg:w-[80%]">
              <h2 className="font-aeonik-pro text-white leading-[120%] text-[40px] md:text-[50px] lg:text-[55px] xl:text-[70px] ">
                Contact Us – We’re Here to Help!
              </h2>
              <p className="font-matter-regular text-white leading-[150%] text-base lg:text-xl  mt-4 mb-10">
                Have a question about sending money to India? Need support? Our
                team is always here to assist you!
              </p>
              <ButtonOutlined lable="Contact Us" className="lg:py-4" />
            </div>

            <div className="rounded-2xl lg:rounded-3xl backdrop-blur-[204px] shadow-[0px_10px_56px_0px_#00000029] p-5 lg:p-8 border border-white lg:border-[#CECECE]  bg-[linear-gradient(180deg,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.64)_100%)]">
              <h4 className="text-2xl font-aeonik-pro text-dark">
                Send Us a Message
              </h4>
              <p className="text-[#1A1A1ACC]/80 font-matter-regular lg:font-matter-medium text-lg mt-3.5 mb-6">
                Fill out the form below, and we’ll get back to you as soon as
                possible!
              </p>
              <form action="" className="flex flex-col gap-[22px]">
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-white border font-matter-regular border-[#EAEAEA99] rounded-2xl pl-14 py-[18px] pr-5 w-full shadow-[0px_10px_14px_-10px_#9999993D]"
                  />
                  <FaRegUser className="absolute left-5 top-1/2 -translate-y-1/2 text-dark text-xl" />
                </div>
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-white border font-matter-regular border-[#EAEAEA99] rounded-2xl pl-14 py-[18px] pr-5 w-full shadow-[0px_10px_14px_-10px_#9999993D]"
                  />
                  <LiaPhoneSolid className="absolute left-5 top-1/2 -translate-y-1/2 text-dark text-2xl " />
                </div>
                <div className="relative ">
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    className="bg-white border font-matter-regular border-[#EAEAEA99] rounded-2xl min-h-32 p-3.5 w-full shadow-[0px_10px_14px_-10px_#9999993D] placeholder:text-[#1A1A1A80]/50"
                  />
                </div>
                <Button
                  lable="Submit Now"
                  className="!font-matter-medium !font-medium !text-lg !py-4"
                />
                <span className="font-matter-regular text-sm lg:text-base text-[#1A1A1A] text-center -mt-2">
                  Response within 24 hours!
                </span>
              </form>
            </div>
          </div>
        </div>

        {/* customer support */}
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 flex flex-col gap-8 lg:gap-0 md:flex-row items-center lg:relative top-20 mt-20 lg:mt-0">
          <div className="md:flex-1 xl:-mr-14">
            <Image
              src={customerSupport}
              alt="customer support"
              className="md:w-[90%] xl:w-[80%] h-auto overflow-hidden rounded-3xl lg:rounded-[38px]"
            />
          </div>

          <div className="md:flex-1 ">
            <h3 className="text-dark font-poppins font-semibold text-[32px] lg:text-5xl mb-2 lg:mb-7">
              Customer Support
            </h3>
            <p className="text-base lg:text-xl text-[#666666] font-openSans font-normal lg:leading-[140%]">
              At Remiflow, we treat every transfer like our own. Whether you
              need help with a transaction, have a question about exchange
              rates, or just want to learn more about our services, we’re just a
              message away.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white  lg:pt-[80px]"></div>

      {/*Contact info*/}
      <div className="pt-10  lg:pt-20 pb-10 lg:pb-32 bg-[#F9FBFE] w-full rounded-es-[50px] rounded-ee-[50px]  overflow-hidden relative -bottom-14">
        <div className="layout-container flex flex-col md:flex-row md:justify-between gap-10 md:gap-5 lg:gap-16">
          <div className="bg-white border border-[#E5EAF4] shadow-[0px_15px_35px_0px_rgba(0,0,0,0.05)] p-6 lg:py-9 lg:px-11 rounded-3xl flex-1">
            <h4 className="text-2xl lg:text-[32px] font-aeonik-pro text-[#151318] leading-[150%] tracking-[1%]">
              How to Reach Us
            </h4>
            <p className="font-matter-regular text-[#1A1A1A] text-base lg:text-xl leading-[140%] mt-2 mb-9 ">
              Available 9 AM - 9 PM EST, Monday to Saturday
            </p>
            <div className="flex items-center gap-3.5 mb-5">
              <LiaPhoneSolid className="text-[#151318] text-[20px] lg:text-[25px]" />
              <span className="font-matter-semibold text-[#151318] text-base lg:text-lg">
                +1-XXX-XXX-XXXX
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <IoMailOutline className="text-[#151318] text-[20px] lg:text-[22px]" />
              <span className="font-matter-semibold text-[#151318] text-base lg:text-lg">
                support@remiflow.com
              </span>
            </div>
            <button className="text-white bg-primary  font-aeonik-pro text-base lg:text-xl w-full py-4 mt-7 mb-6 rounded-xl  transform flex justify-center items-center gap-2">
              {" "}
              <RiMessage2Line className="text-xl" /> Live Chat Support
            </button>
            <p className="font-matter-regular text-[#1A1A1A] text-center tracking-[1%] text-base lg:text-xl leading-[140%]">
              Click the Live Chat button at the bottom right of your screen.
              (Available 24/7)
            </p>
          </div>

          <div className="bg-white border border-[#E5EAF4] shadow-[0px_15px_35px_0px_rgba(0,0,0,0.05)] p-6 lg:py-9 lg:px-11 rounded-3xl flex-1">
            <h4 className="text-2xl lg:text-[32px] font-aeonik-pro text-[#151318] leading-[150%] tracking-[1%]">
              Our Office
            </h4>
            <div className=" mt-5 mb-10">
              <h5 className="font-matter-semibold text-[#1A1A1A] text-base lg:text-xl mb-5 ">
                Remiflow HQ – Canada
              </h5>
              <div className="flex gap-3 lg:gap-5 items-center pl-2">
                <GrLocation className="text-[#1A1A1A] text-lg" />
                <span className="font-matter-regular tracking-[1%] text-[#1A1A1A] text-base lg:text-xl">
                  123 Business Street, Toronto, ON, Canada
                </span>
              </div>
            </div>

            <div className="mb-9">
              <h5 className="font-matter-semibold text-[#1A1A1A] text-base lg:text-xl mb-5 ">
                Business Hours:
              </h5>
              <div className="flex gap-3 lg:gap-5  pl-2">
                <CiClock2 className="text-[#1A1A1A] text-lg mt-1.5" />
                <div>
                  <p className="font-matter-regular tracking-[1%] text-[#1A1A1A] text-base lg:text-xl mb-1">
                    Monday – Friday: 9 AM – 9 PM EST
                  </p>
                  <p className="font-matter-regular tracking-[1%] text-[#1A1A1A] text-base lg:text-xl">
                    Saturday – Sunday: 10 AM – 6 PM EST
                  </p>
                </div>
              </div>
            </div>

            <p className="font-matter-semibold text-[#1A1A1A] text-center text-base lg:text-xl ">
              Customer Support Available 24/7 via Email & Live Chat!
            </p>
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
