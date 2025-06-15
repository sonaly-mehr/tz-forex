"use client";
import Banks from "@/components/Layout/Homepage/Banks";
import FAQ from "@/components/Layout/Homepage/FAQ";
import GetStartedNow from "@/components/Layout/Homepage/GetStartedNow";
import Hero from "@/components/Layout/Homepage/Hero";
import MoneySecured from "@/components/Layout/Homepage/MoneySecured";
import MoneyTransferSteps from "@/components/Layout/Homepage/MoneyTransferSteps";
import TzforexVsOthers from "@/components/Layout/Homepage/TzforexVsOthers";
import Reviews from "@/components/Layout/Homepage/Reviews";
import SendMoney from "@/components/Layout/Homepage/SendMoney";
import TrustForex from "@/components/Layout/Homepage/TrustForex";
import WhyChoose from "@/components/Layout/Homepage/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <ImageGallery /> */}
      <SendMoney />
      <MoneyTransferSteps />
      <WhyChoose />
      <Banks />
      <TzforexVsOthers />
      <MoneySecured />
      <TrustForex />
      <Reviews />
      <GetStartedNow />
      <FAQ />
    </div>
  );
}
