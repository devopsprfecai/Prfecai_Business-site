"use client";

import React, { useState } from "react";
import Image from "next/image";
import displayads from "@public/assets/Images/seo/displayads.svg";
import searchads from "@public/assets/Images/seo/searchads.svg";
import socialmediaads from "@public/assets/Images/seo/socialmediaads.svg";
import remarketingads from "@public/assets/Images/seo/remarketingads.svg";
import videoads from "@public/assets/Images/seo/videoads.svg";
import shoppingads from "@public/assets/Images/seo/shoppingads.svg"
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 0,
    image: displayads,
    title: "Display ads",
    description:
      "Display ads are a type of online advertisement that combine text, images, and a call to action (CTA) button to promote a brand, product, or service",
    bgColor: "#FFF2FE",
  },
  {
    id: 1,
    image: searchads,
    title: "Search ads",
    description:
      "Search ads, also known as paid search advertising, are online advertisements that appear in search engine results when someone searches for a product or service.",
    bgColor: "#F2F5FF",
  },
  {
    id: 2,
    image: socialmediaads,
    title: "Social media ads",
    description:
      "Social media ads are paid online advertisements that appear on social media platforms. They allow businesses to promote their products or services to specific.",
    bgColor: "#F3EEFF",
  },
  {
    id: 3,
    image: remarketingads,
    title: "Remarketing ads ",
    description:
      "Remarketing is a marketing tactic that allows you to serve ads to target audiences that have previously visited a website or engaged with your social media content.",
    bgColor: "#FAFFF2",
  },
  {
    id: 4,
    image: videoads,
    title: "Video ads",
    description:
      "Video ads are a type of digital advertising that uses video content to promote products or services. They can be displayed in a variety of ways, including.",
    bgColor: "#F2FFFE",
  },
  {
    id: 5,
    image: shoppingads,
    title: "Shopping ads",
    description:
      "Shopping ads are visual online ads showcasing products with images, prices, and links, helping drive sales directly from search results.",
    bgColor: "#FFF7F2",
  },
];

function MobileSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="lg:hidden md:hidden flex justify-center item-center">
      <div className="w-[90%] pt-[110px] pb-[70px] md:p-24 md:pt-[140px] ">
        <div className="">
          <h1 className="lg:text-start md:text-start leading-[120%] text-black font-semibold font-firansans lg:text-[60px] md:text-[55px] md:text-[40px] text-[36px]">
            Drive instant traffic with smart Pay-Per-Click strategies.{" "}
          </h1>
          <p className="text-start leading-[170%] md:text-[21px] lg:text-[24px] w-[80%] pt-5">
            The Smooth Email method allows you to easily increase organic
            traffic and improve your online presence.{" "}
          </p>

          <div className=" overflow-hidden h-[90%] w-[97%] relative">
            <div
              className="flex "
              style={{
                transform: `translateX(-${currentSlide * 10}%)`,
                width: `${slides.length * 178}%`,
              }}
            >
              <div className="flex justify-center gap-12 pt-10">
                <div className="rounded-[80px] bg-[#FFF2FE] flex flex-col gap-[1rem] p-10 border w-[340px] h-[360px]">
                  <Image className="w-[40px]" alt="" src={displayads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Display ads{" "}
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Display ads are a type of online advertisement that
                      combine text, images, and a call to action (CTA) button to
                      promote a brand, product, or service
                    </p>
                  </div>
                </div>
                <div className="rounded-[80px] bg-[#F2F5FF] flex flex-col gap-[1rem] w-[340px] h-[360px] p-10 border">
                  <Image className="w-[40px]" alt="" src={searchads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Search ads
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Search ads, also known as paid search advertising,
                      are online advertisements that appear in search engine
                      results when someone searches for a product or service
                    </p>
                  </div>
                </div>
                <div className="rounded-[80px] bg-[#F3EEFF] flex flex-col gap-[1rem] w-[340px] h-[360px] p-10 border">
                  <Image className="w-[40px]" alt="" src={socialmediaads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Social media ads
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Social media ads are paid online advertisements that
                      appear on social media platforms. They allow businesses to
                      promote their products or services to specific
                    </p>
                  </div>
                </div>
                <div className="rounded-[80px] bg-[#FAFFF2] flex flex-col gap-[1rem] w-[340px] h-[360px] p-10 border">
                  <Image className="w-[40px]" alt="" src={remarketingads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Remarketing ads
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Remarketing is a marketing tactic that allows you to serve
                      ads to target audiences that have previously visited a
                      website or engaged with your social media content.
                    </p>
                  </div>
                </div>
                <div className="rounded-[80px] bg-[#F2FFFE] flex flex-col gap-[1rem] w-[340px] h-[360px] p-10 border">
                  <Image className="w-[40px]" alt="" src={videoads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Video ads
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Video ads are a type of digital advertising that uses
                      video content to promote products or services. They can be
                      displayed in a variety of ways, including{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-[80px] bg-[#F2FFFE] flex flex-col gap-[1rem] w-[340px] h-[360px] p-10 border">
                  <Image className="w-[40px]" alt="" src={shoppingads} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Shopping ads
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Shopping ads are visual online ads showcasing products
                      with images, prices, and links, helping drive sales
                      directly from search results.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}

            <button
              onClick={prevSlide}
              className="absolute top-[230px] left-1 hover:bg-white transform -translate-y-1/2 border bg-gray-100  rounded-shadow rounded-full p-2"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-[230px] hover:bg-white right-4 transform -translate-y-1/2 bg-gray-100 border rounded-shadow rounded-full p-2"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSlider;
