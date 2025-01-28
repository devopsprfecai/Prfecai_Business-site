"use client";

import React, { useState } from "react";
import Image from "next/image";
import displayads from "@public/assets/Images/seo/displayads.svg"
import searchads from "@public/assets/Images/seo/searchads.svg";
import socialmediaads from "@public/assets/Images/seo/socialmediaads.svg";
import remarketingads from "@public/assets/Images/seo/remarketingads.svg"
import videoads from "@public/assets/Images/seo/videoads.svg"
import shoppingads from "@public/assets/Images/seo/shoppingads.svg"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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

function TabSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handles next and previous buttons
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Scroll to a specific slide on button click
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="sm:hidden hidden md:block flex lg:hidden justify-center items-center">
      <div className="w-[90%] pt-[110px] pb-[70px] md:p-24 md:pt-[140px]">
        <div className="text-center flex flex-col gap-[1rem]">
          <h1 className="md:text-start md:w-[120%] leading-[120%] text-black font-semibold font-firansans lg:text-[60px] md:text-[55px] text-[36px]">
            Bring in organic traffic with a straightforward content marketing{" "}
          </h1>
          <p className="text-start md:text-[21px] lg:text-[20px] lg:w-[80%]">
          The impeccable Content strategy makes it easy to attract organic traffic and strengthen your online presence without hassle.
          </p>
        </div>

        {/* Section Buttons */}
        <div className="pt-7 flex gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`px-2.5 p-1.5 text-[18px] border ${
                currentSlide === index ? "bg-gray-200 border-black text-black" : "border-black"
              } rounded-[20px]`}
            >
              {slide.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="overflow-hidden  md:w-[104%] md:h-[90%] w-[90%] relative mt-10">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentSlide * 10}%)`,
              width: `${slides.length * 173}%`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`rounded-[80px] lg:p-[60px] md:p-[60px] flex flex-col gap-[20px] md:w-[580px] md:h-[400px]  w-[340px] h-[360px]  p-10 border`}
                style={{ backgroundColor: slide.bgColor }}
              >
                <Image className="w-[40px]" alt={slide.title} src={slide.image} />
                <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                  {slide.title}
                </h1>
                <p className="text-[17px]">{slide.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute top-[50%] left-3 hover:bg-white transform -translate-y-1/2 border bg-gray-100 rounded-shadow rounded-full p-2"
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-[50%] right-4 hover:bg-white transform -translate-y-1/2 bg-gray-100 border rounded-shadow rounded-full p-2"
          >
            <FiArrowRight />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default TabSlider;
