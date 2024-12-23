"use client"; // Required for client-side components

import PopupForm from "@components/landing-page/PopupForm";
import React, { useState } from "react";

const SeoHeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <div className="pt-[110px] pb-[70px] md:p-24 md:pt-[140px] lg:p-40">
        <h1 className="text-black font-semibold font-firansans lg:text-[72px] md:text-[55px] text-center md:text-[40px] text-[36px]">
          Search Engine Optimisation
        </h1>
        <div className="justify-center flex">
          {" "}
          <p className="text-center leading-[170%] md:text-[21px] lg:text-[24px] w-[80%] pt-5">
            We provide friendly SEO services to boost your online visibility and
            reach your audience. Our goal is to make your brand stand out and
            grow.
          </p>
        </div>

        <div className="md:flex justify-center sm:flex justify-center lg:flex justify-center pt-[2rem] lg:pb-[0] md:pb-[0] gap-6 text-center ">
          <button
            className="bg-black text-white md:text-[21px] lg:text-[24px] lg:px-6 md:px-6 px-12 py-3 rounded-[12px] hover:bg-[#515BDA] transition"
            onClick={openPopup}
          >
            Get Started
          </button>
          <button
            className="bg-[#515BDA] mt-4 ml-2 md:text-[21px] lg:text-[24px] lg:ml-0 md:ml-0 sm:ml-0 lg:mt-[0] md:mt-[0] sm:mt-[0] text-white px-6 py-3 rounded-[12px] hover:bg-[#515BDA] transition"
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

export default SeoHeroSection;
