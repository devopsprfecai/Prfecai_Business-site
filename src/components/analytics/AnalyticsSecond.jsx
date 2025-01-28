"use client";

import React, { useState } from "react";
import Image from "next/image";
import keysteps from "@public/assets/Images/seo/keysteps.svg";
import keysteps2 from "@public/assets/Images/seo/keysteps2.svg";

function AnalyticsSecond() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      className="font-firansans lg:gap-10 pt-24 pb-20 lg:flex lg:justify-center bg-[#F2F2FF] lg:item-center"
    >
      <div className="w-[90%] ml-5 md:ml-40 lg:ml-0 md:w-[60%] bg-white text-white p-9 rounded-[32px] lg:w-[40%] lg:h-[590px]">
        <h1 className="lg:text-[50px] md:text-[50px] leading-[130%] text-black text-[28px] sm:text-[35px] text-center sm:text-start font-semibold">
          Unlock Your Potential Beyond Data Insights.{" "}
        </h1>
        <p className="text-start font-light text-black leading-[170%] py-3 text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%]">
          Analytics and reporting are essential for understanding performance,
          but building a successful strategy goes far beyond just tracking data.
          Effective reporting isnt just about collecting numbers; its about
          deriving insights, making informed decisions, and continuously
          optimising to foster growth and strengthen connections with your
          audience.
        </p>
      </div>
      <div className="pt-7 flex justify-center lg:ml-0 lg:pt-0">
        <Image
          src={keysteps2}
          className="lg:w-[105%] w-[88%] md:w-[60%]"
          alt="Key Steps"
        />
      </div>
    </div>
  );
}

export default AnalyticsSecond;
