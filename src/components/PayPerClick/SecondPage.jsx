"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import payperclick2 from "@public/assets/Images/seo/payperclick2.svg";
import payperclick from "@public/assets/Images/seo/payperclick.svg";

function SecondPage() {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 200; // Adjust this value based on your desired scroll position
      setShowSecondImage(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-firansans lg:gap-10 pt-24 pb-20 lg:flex  lg:justify-center bg-[#F2F2FF] lg:item-center">
      <div className="w-[90%] ml-5 md:ml-40 lg:ml-0 md:w-[60%] bg-white text-white p-9 rounded-[32px] border lg:w-[40%] lg:h-[500px]">
        <h1 className="lg:text-[50px] md:text-[50px] leading-[130%] text-black text-[28px] sm:text-[35px] text-center sm:text-start font-semibold">
          Beyond Pay-Per-Click: Unlock Your Potential.{" "}
        </h1>
        <p className="text-start font-light text-black leading-[170%] py-3 text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%]">
          Pay-per-click ads are great for getting noticed, but building a
          successful brand goes far beyond just running campaigns. A strong
          brand isn’t just about driving clicks; it’s about creating trust,
          telling your story, and building real connections with your audience.
        </p>
      </div>
      <div className="pt-7 lg:pt-0 flex justify-center">
        {!showSecondImage ? (
          <Image
            alt="Pay-per-click illustration"
            className="lg:size-[94%] md:size-[60%] size-[90%]"
            src={payperclick}
          />
        ) : (
          <Image
            alt="Alternative pay-per-click illustration"
            className="lg:size-[94%] md:size-[60%] size-[90%]"
            src={payperclick2}
          />
        )}
      </div>
    </div>
  );
}

export default SecondPage;
