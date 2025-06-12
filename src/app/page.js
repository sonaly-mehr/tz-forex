"use client";
import Banks from "@/components/Layout/Homepage/Banks";
import FAQ from "@/components/Layout/Homepage/FAQ";
import GetStartedNow from "@/components/Layout/Homepage/GetStartedNow";
import Hero from "@/components/Layout/Homepage/Hero";
import ImageGallery from "@/components/Layout/Homepage/ImageGallery";
import MoneySecured from "@/components/Layout/Homepage/MoneySecured";
import MoneyTransferSteps from "@/components/Layout/Homepage/MoneyTransferSteps";
import RemiflowVsOthers from "@/components/Layout/Homepage/RemiflowVsOthers";
import Reviews from "@/components/Layout/Homepage/Reviews";
import SendMoney from "@/components/Layout/Homepage/SendMoney";
import TrustRemiflow from "@/components/Layout/Homepage/TrustRemiflow";
import WhyChoose from "@/components/Layout/Homepage/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ImageGallery />
      <SendMoney />
      <MoneyTransferSteps />
      <WhyChoose />
      <Banks />
      <RemiflowVsOthers />
      <MoneySecured />
      <TrustRemiflow />
      <Reviews />
      <GetStartedNow />
      <FAQ />
    </div>
  );
}
