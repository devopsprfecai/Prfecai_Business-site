"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import instanew from "@public/assets/Images/seo/instanew.svg";
import linkedin from "@public/assets/Images/seo/linkedin.svg";
import twitter from "@public/assets/Images/seo/twitter.svg";
import facebook from "@public/assets/Images/seo/facebook.svg";
import whatsappicon from "@public/assets/Images/seo/whatsappicon.svg";
import aticon from "@public/assets/Images/seo/aticon.svg";
import youtubeicon from "@public/assets/Images/seo/youtubeicon.svg";
import infinity from "@public/assets/Images/seo/infinity.svg";
import aicon from "@public/assets/Images/seo/aicon.svg";

function SmaSecond() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const activationPoint = 300; 
      setIsScrolled(scrollPosition > activationPoint);
    };

    
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-firansans lg:gap-10 pt-24 pb-20 lg:flex lg:justify-center bg-[#F2F2FF] lg:item-center">
      <div className="w-[90%] ml-5 md:ml-40 lg:ml-0 md:w-[60%] bg-white text-white p-7 rounded-[32px] border lg:w-[40%] lg:h-[500px]">
        <h1 className="lg:text-[50px] md:text-[50px] leading-[130%] text-black text-[28px] sm:text-[35px] md:text-center lg:text-start md:text-start  sm:text-start font-semibold">
          Its More Than Social Media Advertising{" "}
        </h1>
        <p className="text-start font-light text-black leading-[170%] py-5 text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%]">
          Social media ads are great for getting noticed, but building a
          successful brand goes far beyond just running campaigns. A strong
          brand isnt just about grabbing attention; its about creating trust,
          telling your story, and building real connections with your audience.
        </p>
      </div>
      <div className="pt-7 lg:pt-0 lg:flex-none flex justify-center">
        <div
          className={`w-[90%] flex flex-col gap-[50px] justify-center items-center p-14 md:w-[60%] rounded-[32px] border lg:w-[140%] lg:h-[500px] transition-colors duration-500 ${
            isScrolled ? "bg-[#D9DCFF]" : "bg-white"
          }`}
        >
          <div className="justify-center flex gap-11">
            <Image className="w-[20%]" alt="" src={instanew} />
            <Image className="w-[20%]" alt="" src={linkedin} />
            <Image className="w-[20%]" alt="" src={twitter} />
          </div>
          <div className="justify-center flex gap-10">
            <Image className="w-[20%]" alt="" src={facebook} />
            <Image className="w-[20%]" alt="" src={whatsappicon} />
            <Image className="w-[20%]" alt="" src={aticon} />
          </div>
          <div className="justify-center flex gap-10">
            <Image className="w-[20%]" alt="" src={youtubeicon} />
            <Image className="w-[20%]" alt="" src={infinity} />
            <Image className="w-[20%]" alt="" src={aicon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmaSecond;
