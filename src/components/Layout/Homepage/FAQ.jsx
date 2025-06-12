"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Ui/accordion";
import {
  fadeIn,
  navVariants,
  staggerContainer,
} from "../../../../utils/Motion";
import { motion } from "framer-motion";

const faq = [
  {
    question: "How does RemiFlow offer better rates than banks and Remitly?",
    answer:
      "We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we don’t inflate exchange rates to profit off you.",
  },
  {
    question: "How long does it take for the money to reach my recipient?",
    answer:
      "We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we don’t inflate exchange rates to profit off you.",
  },
  {
    question: "Is it safe to use Remiflow for sending money?",
    answer:
      "We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we don’t inflate exchange rates to profit off you.",
  },
  {
    question: "Can I pay with cash?",
    answer:
      "We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we don’t inflate exchange rates to profit off you.",
  },
  {
    question: "Is my money safe with RemiFlow?",
    answer:
      "We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we don’t inflate exchange rates to profit off you.",
  },
];
const FAQ = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white w-full rounded-es-[50px] rounded-ee-[50px]  overflow-hidden relative -bottom-14"
    >
      <div className="pb-20 px-4 md:w-[90%] mx-auto lg:w-full  lg:px-0 ">
        <div className="md:w-[70%] mx-auto ">
          <motion.h2
            variants={navVariants}
            className="font-matter-medium text-dark text-4xl lg:text-[60px] tracking-[-2.5%] leading-[45px] lg:leading-[68px] text-center"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-center font-openSans font-normal mt-5 mb-8 text-dark/70 text-base lg:text-lg"
          >
            Curious about something? We're here to help! Find clear, reliable
            answers to all your questions. No confusion, just simple
            explanations. Ask away—we’ve got the information you need!
          </motion.p>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faq?.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E5EAF4] shadow-[0px_6px_10px_0px_#00000008] rounded-md px-5 lg:px-8 py-2 mb-4"
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeIn("up", "spring", index * 0.5, 1)}
                  className=""
                >
                  <AccordionTrigger className="font-matter-medium  text-dark text-base lg:text-xl tracking-[-1%] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-openSans font-normal text-sm lg:text-lg text-[#5A7184] leading-6 lg:leading-8">
                    {item.answer}
                  </AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
