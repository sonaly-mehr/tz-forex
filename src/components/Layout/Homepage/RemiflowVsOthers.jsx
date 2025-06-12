"use client";
import React from "react";
import bg from "../../../../public/img/comparison-bg.jpg";
import Image from "next/image";
import remiflow from "../../../../public/img/icons/remiflow.svg";
import remitly from "../../../../public/img/icons/remitly.svg";
import wise from "../../../../public/img/icons/wise.svg";
import bank from "../../../../public/img/icons/bank.svg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { footerVariants } from "../../../../utils/Motion";
import { motion } from "framer-motion";

const data = [
  {
    logo: remiflow,
    isHighlight: true,
    recipient: "₹61,250 Rupee",
    delta: "₹1,050 - ₹2,465 More!",
    fee: "Zero Fees",
    rate: "₹61.25",
  },
  {
    logo: remitly,
    recipient: "₹61,250 Rupee",
    delta: "-1327 INR",
    fee: "₹5.00",
    rate: "₹59.92",
  },
  {
    logo: wise,
    recipient: "₹61,250 Rupee",
    delta: "-1050 INR",
    fee: "₹10.00",
    rate: "₹60.20",
  },
  {
    logo: bank,
    recipient: "₹61,250 Rupee",
    delta: "-2465 INR",
    fee: "₹15.00",
    rate: "₹58.80",
  },
];

const RemiflowVsOthers = () => {
  return (
    <div className="layout-container py-16 lg:py-24">
      <motion.span
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="font-figtree text-primary font-normal text-base lg:text-2xl uppercase text-center block"
      >
        See How Much You Save
      </motion.span>
      <motion.h3
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="font-darkerGrotesque font-semibold text-4xl lg:text-[70px] text-dark lg:-mt-1 pb-12 text-center"
      >
        Remiflow vs. Others
      </motion.h3>

      <div
        className="relative flex justify-center items-center w-full min-h-[900px] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="bg-white overflow-hidden rounded-3xl w-full  lg:w-[95%] mx-auto  min-h-[600px]  border-[12px] border-[#EBEBF2]/95 shadow-[0px_6px_10px_0px_#EFEFEF33] backdrop-blur-[30px]"
        >
          {/* DESKTOP TABLE */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pl-3 md:pl-20 py-4 md:py-14 whitespace-nowrap">
                    <h3 className="text-base md:text-2xl text-dark font-matter-medium">
                      Sending $1,000 CAD with
                    </h3>
                  </th>
                  <th className="text-right px-8">
                    <div>
                      <p className="text-xl text-dark font-matter-medium mb-2.5">
                        Recipient gets
                      </p>
                      <p className="text-sm text-[#6D6C6B] font-openSans">
                        (Total after fees)
                      </p>
                    </div>
                  </th>
                  <th className="text-right py-6 px-8">
                    <p className="text-xl text-dark font-matter-medium">
                      Transfer Fee
                    </p>
                  </th>
                  <th className="text-right py-6 px-8">
                    <div>
                      <p className="text-xl text-dark font-matter-medium mb-2.5">
                        Exchange Rate
                      </p>
                      <p className="text-[#6D6C6B] font-openSans">
                        (1 CAD → INR)
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      row.isHighlight
                        ? "bg-blue-600 text-white"
                        : "border-b border-gray-200"
                    } relative`}
                  >
                    <td className="pl-3 lg:pl-20 py-14">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={row.logo}
                          alt=""
                          width={row.isHighlight ? 250 : 180}
                          height={row.isHighlight ? 80 : 50}
                          className="h-auto w-[100px] lg:w-auto"
                        />
                        {row.isHighlight && (
                          <div className="bg-[#58F7FF] rounded-lg px-4 py-2 flex items-center space-x-2 absolute -top-4 left-16">
                            <IoIosCheckmarkCircle className="text-dark text-xl" />
                            <span className="text-black text-sm font-medium">
                              Cheapest
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-8 px-8 text-right">
                      <p
                        className={`text-2xl font-semibold mb-2.5 ${
                          row.isHighlight ? "" : "text-dark"
                        }`}
                      >
                        {row.recipient}
                      </p>
                      {!row.isHighlight && (
                        <div className="flex items-center justify-end space-x-1.5">
                          <IoMdArrowDropdown className="text-[#D80027] text-2xl" />
                          <p className="text-xl text-[#D80027] font-matter-medium">
                            {row.delta}
                          </p>
                        </div>
                      )}
                      {row.isHighlight && (
                        <p className="text-xl text-green-400 font-matter-medium">
                          {row.delta}
                        </p>
                      )}
                    </td>
                    <td className="py-8 px-8 text-right">
                      <p
                        className={`text-2xl font-matter-medium ${
                          row.isHighlight ? "text-white" : "text-dark"
                        }`}
                      >
                        {row.fee}
                      </p>
                    </td>
                    <td className="py-8 px-8 text-right">
                      <p
                        className={`text-2xl font-matter-medium ${
                          row.isHighlight ? "text-white" : "text-dark"
                        }`}
                      >
                        {row.rate}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE STACKED CARDS */}
          <div className="lg:hidden space-y-6 ">
            <h4 className="text-lg font-matter-medium mb-[-15px]   p-4">
              Sending $1,000 CAD with
            </h4>

            {data.map((row, i) => (
              <div
                key={i}
                className={` p-4 ${
                  row.isHighlight ? "bg-primary text-white " : "bg-white shadow"
                }`}
              >
                <div className="flex  justify-between  mb-5">
                  <Image
                    src={row.logo}
                    alt=""
                    width={row.isHighlight ? 120 : 80}
                    height={40}
                    className="object-contain"
                  />
                  {row.isHighlight ?  (
                    <div className="bg-[#58F7FF] rounded-lg overflow-hidden px-3 py-1 flex items-center space-x-1">
                      <IoIosCheckmarkCircle className="text-dark" />
                      <span className="text-sm font-medium text-[#24554E]">
                        Cheapest
                      </span>
                    </div>

                    
                  ):                       <div className="">
                     <span className="font-semibold">{row.recipient}</span>
                     <div className="flex items-center ">
 <IoMdArrowDropdown className="text-2xl text-[#D80027]" />
                        <span className="font-matter-medium text-[#D80027]">
                          {row.delta}
                        </span>
                     </div>
                       
                      </div>
                }
                </div>
                <div className="flex justify-between mb-6">
                   {row.isHighlight && (
                                      <div className="">
                    <span className="font-matter-medium block">
                      Recipient gets
                    </span>
                    <span className="text-[10px] font-matter-normal  text-white/70">
                      (Total after fees)
                    </span>
                  </div>
                  )}

  {row.isHighlight && (
                  <div>
                   
                  
                       <span className="font-semibold">{row.recipient}</span>
                      <p className="text-[#47FF19] text-[10px] font-matter-medium mt-2">
                        {row.delta}
                      </p>
                      </div>
                    )

                    }
                  
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-matter-medium">Transfer Fee</span>
                  <span>{row.fee}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div>
                    <span className="font-matter-medium block">
                      Exchange Rate
                    </span>
                    {row.isHighlight ? (
                      <span className="text-[10px] font-matter-normal  text-white/70">
                        (Total after fees)
                      </span>
                    ) : (
                      <span className="text-[10px] font-matter-normal  text-[#0D0A08B2]/70">
                        ((1 CAD → INR)
                      </span>
                    )}
                  </div>

                  <span>{row.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RemiflowVsOthers;
