import React from "react";
import bgEffect from "../../../public/img/BG.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import happyWomen from "../../../public/img/happy-woman.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Subscribe from "@/components/Layout/Homepage/Subscribe";

const featuredPosts = [
  {
    heading: "Best Exchange Rates for Sending Money to India",
    description:
      "Learn how small rate differences can mean thousands more rupees for your recipient!",
    date: "August 2, 2013",
  },
  {
    heading: "Remitly vs. tz forex  vs. Wise: Who Gives You More INR?",
    description:
      "A side-by-side comparison of fees, exchange rates, and hidden charges so you can choose the best option.",
    date: "September 24, 2017",
  },
  {
    heading: "How to Send Money to India Without Paying Fees",
    description:
      "Learn how small rate differences can mean thousands more rupees for your recipient!",
    date: "August 2, 2013",
  },
  {
    heading: "What’s the Best Day of the Week to Transfer Money?",
    description:
      "A side-by-side comparison of fees, exchange rates, and hidden charges so you can choose the best option.",
    date: "September 24, 2017",
  },
];

const trendingPosts = [
  {
    heading: "How NRIs Lose Thousands on Exchange Rates ",
    description:
      "Learn how small rate differences can mean thousands more rupees for your recipient!",
    date: "August 2, 2013",
  },
  {
    heading: "Interac e-Transfer vs. Cash Pickup: Which Is Best?",
    description:
      "A side-by-side comparison of fees, exchange rates, and hidden charges so you can choose the best option.",
    date: "September 24, 2017",
  },
];
const page = () => {
  return (
    <div className="relative">
      {/* hero */}
      <div
        className="w-full min-h-[140vh] md:min-h-[95vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgEffect.src})` }}
      >
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 pt-6 lg:pt-20 ">
          <div className="flex items-center justify-center">
            <div className="lg:w-[80%] mx-auto">
              <h2 className="text-center font-aeonik-pro text-white leading-[120%] text-[40px] md:text-[50px] lg:text-[55px] xl:text-[70px] ">
                Stay informed, save money, and send smarter!
              </h2>
              <p className="text-center font-matter-regular text-white leading-[150%] text-base lg:text-xl  mt-4 mb-10">
                Welcome to the tz forex Blog, where we share expert tips,
                industry insights, and financial guides to help you maximize
                your money when sending funds to India. Whether you’re looking
                for the best exchange rates, regulatory updates, or smart saving
                strategies, we’ve got you covered.
              </p>
              <div className="flex justify-center">
                <button className="text-center bg-white font-matter-semibold text-xl text-dark tracking-[-2%] rounded-xl px-7 py-3.5 ">
                  Subscribe to Our Blog
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 lg:mt-0 lg:absolute bottom-0 inset-x-0 mx-auto w-full lg:w-[88%] px-4 lg:px-0 pb-8">
          <form action="" className="flex flex-col md:flex-row  gap-3 ">
            <div className="relative max-w-[450px] w-full h-[60px]">
              <input
                type="text"
                placeholder="Enter your address "
                id=""
                className="bg-white w-full font-matter-light text-lg placeholder:text-[#1A1A1A99]/60 border border-[#1A1A1A1A]/20 rounded-xl h-full pl-4 pr-12"
              />
              <HiMiniMagnifyingGlass className="text-[#1A1A1A] text-2xl absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category select */}
            <div className="relative max-w-[150px] w-full h-[60px] ">
              <select
                name="category"
                className="w-full bg-white h-full pl-4 pr-10 text-lg font-matter-light border text-[#1A1A1A99]/60 border-[#1A1A1A1A]/10 rounded-xl appearance-none"
              >
                <option value="">Category</option>
                <option value="news">Option 1</option>
                <option value="tips">Option 2</option>
                <option value="updates">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-[#1A1A1A]" />
            </div>

            <div className="relative max-w-[150px] w-full h-[60px]">
              <select
                name="category"
                className="w-full bg-white h-full pl-4 pr-10 text-lg font-matter-light border text-[#1A1A1A99]/60 border-[#1A1A1A1A]/10 rounded-xl appearance-none"
              >
                <option value="">Popular</option>
                <option value="news">Option 1</option>
                <option value="tips">Option 2</option>
                <option value="updates">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-[#1A1A1A]" />
            </div>
          </form>
        </div>
      </div>

      {/* Latest Post */}
      <div className="-mt-[300px] md:mt-0 w-full lg:w-[88%] mx-auto px-4 lg:px-0 lg:py-20 relative z-10">
        <h4 className="font-aeonik-pro text-dark text-[28px] lg:text-4xl mb-8 lg:mb-10">
          Latest posts
        </h4>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[70px]">
          <div className="flex-1">
            <Image
              src={happyWomen}
              alt=""
              className="rounded-[20px] h-[350px] object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h4 className="font-aeonik-pro text-[#1A1A1A] text-2xl lg:text-4xl lg:leading-[130%]">
                5 Mistakes People Make When Sending Money Home
              </h4>
              <p className="font-gilroy-light text-[#323232] leading-[160%] text-base lg:text-lg mt-5 lg:mt-6 ">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                arcu enim urna adipiscing prae
              </p>
            </div>
            <div>
              <h5 className="font-gilroy-medium text-[#1A1A1A] leading-[160%] text-[17px] lg:text-lg mt-5 lg:mt-0 lg:mb-2">
                Posted on
              </h5>
              <span className="font-gilroy-regular text-[#1A1A1A] leading-[160%] text-base">
                March 24, 2025
              </span>
            </div>
          </div>
        </div>
      </div>

            {/*Featured  posts */}
      <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0  py-16 lg:py-20">
        <h2 className="font-aeonik-pro text-dark text-[28px] lg:text-5xl mb-8 lg:mb-10 lg:leading-[120%]">
          Featured posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {featuredPosts?.map((post, index) => (
            <div
              key={index}
              className="bg-[#F7F8FA] rounded-2xl p-4 lg:p-6 flex flex-col  gap-8 justify-between"
            >
              <h4 className="font-aeonik-pro text-dark text-2xl lg:text-[28px]  lg:leading-[130%]">
                {post?.heading}
              </h4>
              <p className="leading-[160%] text-base lg:text-lg font-matter-regular text-[#323232]">
                {post?.description}
              </p>
              <div>
                <h5 className="font-gilroy-medium text-[#1A1A1A] leading-[160%] text-[17px] lg:text-lg mb-1">
                  Posted on
                </h5>
                <span className="font-gilroy-light text-[#828282] leading-[160%] text-base">
                  {post?.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full mt-16">
          <div className="flex gap-1.5 mb-5 lg:mb-0 ">
            <div className="border text-base font-matter-medium  border-[#1A1A1A4D]/30 bg-white px-4 py-2.5 rounded-lg  text-[#1A1A1A4D]/">
              1
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              2
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              3
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              4
            </div>
          </div>

          <div>
            <button className="flex items-center gap-0.5 bg-primary px-5 py-2 rounded-lg text-sm lg:text-base font-matter-medium text-white">
              <span>Next Page</span>
              <MdKeyboardArrowRight className="text-xl mt-1 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/*Trenind  posts */}
      <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0  py-6 lg:py-16">
        <h2 className="font-aeonik-pro text-dark text-[28px] lg:text-5xl mb-8 lg:mb-10 lg:leading-[120%]">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {trendingPosts?.map((post, index) => (
            <div
              key={index}
              className="bg-[#F7F8FA] rounded-2xl p-4 lg:p-6 flex flex-col  gap-8 justify-between"
            >
              <h4 className="font-aeonik-pro text-dark text-2xl lg:text-[28px]  lg:leading-[130%]">
                {post?.heading}
              </h4>
              <p className="leading-[160%] text-base lg:text-lg font-matter-regular text-[#323232]">
                {post?.description}
              </p>
              <div>
                <h5 className="font-gilroy-medium text-[#1A1A1A] leading-[160%] text-[17px] lg:text-lg mb-1">
                  Posted on
                </h5>
                <span className="font-gilroy-light text-[#828282] leading-[160%] text-base">
                  {post?.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        {/* <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full mt-16">
          <div className="flex gap-1.5 mb-5 lg:mb-0 ">
            <div className="border text-base font-matter-medium  border-[#1A1A1A4D]/30 bg-white px-4 py-2.5 rounded-lg  text-[#1A1A1A4D]/">
              1
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              2
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              3
            </div>
            <div className="border text-base font-matter-medium  border-[#5E5E5E1A]/10 bg-white px-4 py-2.5  rounded-lg  text-[#1A1A1A4D]/">
              4
            </div>
          </div>

          <div>
            <button className="flex items-center gap-0.5 bg-primary px-5 py-2 rounded-lg text-sm lg:text-base font-matter-medium text-white">
              <span>Next Page</span>
              <MdKeyboardArrowRight className="text-xl mt-1 text-white" />
            </button>
          </div>
        </div> */}
      </div>


            

      {/*Subscribe*/}
      <Subscribe/>
    </div>
  );
};

export default page;
