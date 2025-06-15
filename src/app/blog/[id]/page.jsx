import React from "react";
import bgEffect from "../../../../public/img/BG.png";
import Image from "next/image";
import youngMan from "../../../../public/img/young man.jpg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import womanWithPhone from "../../../../public/img/woman-with-phone.jpg";
import womanWithPhone2 from "../../../../public/img/woman-with-phone2.jpg";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Subscribe from "@/components/Layout/Homepage/Subscribe";

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
const Page = () => {
  return (
    <div className="relative">
      {/* hero */}
      <div
        className="w-full min-h-[120vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgEffect.src})` }}
      >
        <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 pt-6 lg:pt-20">
          <div className="flex items-center justify-center">
            <div className="lg:w-[80%] mx-auto">
              <h2 className="text-center font-aeonik-pro text-white leading-[120%] text-[40px] md:text-[50px] lg:text-[55px] xl:text-[70px]">
                5 Mistakes People Make When Sending Money Home
              </h2>
              <p className="text-center font-matter-regular text-white leading-[150%] text-base lg:text-xl mt-4 mb-7 lg:mb-10">
                Welcome to the TZ FOREX Blog, where we share expert tips,
                industry insights, and financial guides to help you maximize
                your money when sending funds to India. Whether you’re looking
                for the best exchange rates, regulatory updates, or smart saving
                strategies, we’ve got you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col  justify-center items-center gap-4">
          {/* <div className="border border-white"></div> */}
          <Image
            src={youngMan}
            alt="Young man"
            className="w-[60px] h-[60px] rounded-full object-center object-cover mb-2 lg:mb-3 border-[5px] border-white"
          />

          <h5 className="font-aeonik-pro text-2xl lg:text-[32px] text-white">
            Brian Imanuel Aude
          </h5>
          <span className="font-matter-regular text-base lg:text-lg text-white">
            Posted on March 26, 2025
          </span>
        </div>
      </div>

      <div className="w-full lg:w-[88%] mx-auto px-4 lg:px-0 -mt-[230px] relative z-10">
        <Image
          src={womanWithPhone}
          alt=""
          className="w-full h-[350px] lg:h-[650px] object-center object-cover rounded-2xl"
        />

        <div className="my-10 lg:my-14">
          <p className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] ">
            Whether your team is spread around a conference table or around the
            world, a productive brainstorm can feel like a win, energising the
            players and producing valuable content. <br /> <br />
            Unfortunately, there are plenty of things that can derail
            brainstorming sessions, including unbalanced conversation dominated
            by extroverts or quick thinkers, awkward silences that make the
            whole meeting painful, and anchoring effects, where participants
            focus solely on the first idea or two that popped up during the
            meeting, stifling new ideas and preventing the team from moving on.{" "}
            <br /> <br />
            No matter what field you are in, brainstorming is a fundamental
            activity that can move ideas forward and produce better results.
            Ready for better brainstorming? We’ve compiled the top five tips you
            can use today to make brainstorming more fun.
          </p>
        </div>

        <div className="mt-16 lg:mt-0">
          <h2 className="text-2xl lg:text-5xl lg:leading-[120%] text-dark font-aeonik-pro mb-6 lg:mb-10">
            Do your research ahead of time
          </h2>

          <p className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] mb-6 lg:mb-7 ">
            It’s easy to simply gather your group, state your problem, and ask
            for ideas. But is this the most efficient way to generate fresh,
            productive ideas? There are specialised methods for brainstorming
            that take idea generation seriously, and you may want to give some a
            try. They include:
          </p>
          <ul className="flex flex-col gap-6 lg:gap-7 pl-5 lg:pl-7">
            <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] list-disc">
              Brainwriting: Everyone writes down three ideas and passes their
              ideas to the person on their left (or right), who builds off those
              ideas before passing them on again. This way, ideas can
              cross-pollinate, morph and build on top of each other from
              different perspectives. After all, two heads are better than one.
            </li>

            <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] list-disc">
              Figure storming: The group picks a well-known figure who is not in
              the room and asks how they would approach the problem. For
              example, “How would Barack Obama (or Harry Potter, or anyone else)
              approach this problem?” - prepare for some funny answers here,
              this method is a good ice-breaker for everyone involved.
            </li>

            <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] list-disc">
              Change of scenery: Sometimes the conference room is not the best
              place for brainstorming. Try moving outside, heading for lunch, or
              playing a game to get the creative juices flowing. One tried and
              tested method we enjoy is walking in nature, find a park and sit
              under a tree - the change of context will inspire fresh
              perspectives from your team.
            </li>
          </ul>

          <Image
            src={womanWithPhone2}
            alt=""
            className="w-full h-[350px] lg:h-[650px] object-center object-cover rounded-2xl my-10"
          />
          <p className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A] my-10">
            Group discussions are often dominated not by the most talented
            person, but simply by the loudest. Group brainstorming can be
            intimidating for introverts, and quick thinkers may crowd out
            creatives who take more time to formulate their ideas. Make sure
            there is space for everyone to have their voice heard, and if
            someone is especially quiet, consider a one-on-one idea session
            later.
          </p>

          <div className="hidden md:flex flex-col gap-6 lg:gap-7">
            <h2 className="text-2xl lg:text-5xl lg:leading-[120%] text-dark font-aeonik-pro">
              Solicit crazy ideas
            </h2>
            <p className="text-base font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis egestas.
            </p>
            <ul className="flex flex-col list-decimal pl-5 lg:pl-7 ">
              <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
                Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                auctor
              </li>
              <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
                Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti
              </li>
              <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
                Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
              </li>
              <li className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
                Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                potenti
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center my-5 lg:my-10">
            <p className="text-base  font-matter-regular lg:leading-[160%] lg:text-lg  text-[#1A1A1A]">
              Posted on October 26, 2021 by{" "}
              <span className="font-matter-semibold block md:inline-block">
                Brian Imanuel Aude
              </span>{" "}
            </p>

            <div className="flex gap-8 items-center">
              <span className="text-[#666666] font-matter-regular text-base  lg:text-lg">
                Share this article
              </span>
              <ul className="flex gap-3.5 lg:gap-6 items-center mt-5 lg:mt-0">
                <li>
                  <Link href="#">
                    <IoIosLink className="text-[#1A1A1A] text-2xl lg:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaFacebook className="text-[#0163E0] text-2xl lg:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaTwitter className="text-[#47ACDF] text-2xl lg:text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/img/icons/instagram.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* similar Articles */}

          <div className="py-10 lg:py-20">
            <h2 className="font-aeonik-pro text-dark text-[28px] lg:text-5xl mb-8 lg:mb-10 lg:leading-[120%]">
              Similar Article
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
          </div>
        </div>
      </div>

      {/* subscribe */}

      <Subscribe />
    </div>
  );
};

export default Page;
