"use client"; // Required for client-side components

import PopupForm from "@components/landing-page/PopupForm";
import React, { useState } from "react";

const SmaHero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <div className="pt-[200px] pb-[180px] md:p-24 md:pt-[140px] lg:pt-[200px] lg:pb-[180px]">
        <h1 className="text-black font-semibold font-firansans lg:text-[72px] md:text-[55px] text-center md:text-[40px] text-[36px]">
          Social Media Advertising
        </h1>
        <div className="justify-center flex">
          {" "}
          <p className="text-center leading-[170%] md:text-[21px] lg:text-[20px] text-[20px] w-[60%] pt-[18px]">
          Social media advertising is a type of digital marketing that uses paid ads to reach a target audience on social media.
          </p>
        </div>

        <div className="md:flex justify-center sm:flex justify-center lg:flex justify-center pt-[2rem] lg:pb-[0] md:pb-[0] gap-6 text-center ">
          <button
            className="bg-black text-white md:text-[21px] lg:text-[20px] lg:px-6 md:px-6 px-12 py-3 rounded-[12px] hover:bg-[#515BDA] transition"
            onClick={openPopup}
          >
            Get Started
          </button>
          <button
            className="bg-[#515BDA] mt-4 ml-2 md:text-[21px] lg:text-[20px] lg:ml-0 md:ml-0 sm:ml-0 lg:mt-[0] md:mt-[0] sm:mt-[0] text-white px-6 py-3 rounded-[12px] hover:bg-[#515BDA] transition"
            onClick={openPopup}
          >
            Generate Free Blog
          </button>
        </div>
        {isPopupOpen && <PopupForm isOpen={isPopupOpen} onClose={closePopup} />}
      </div>
    </div>
  );
};

export default SmaHero;
