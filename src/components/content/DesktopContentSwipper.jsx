"use client";

import React, { useState } from "react";
import Image from "next/image";
import blog from "@public/assets/Images/seo/blog.svg";
import infographic from "@public/assets/Images/seo/infographic.svg";
import podcast from "@public/assets/Images/seo/podcast.svg";
import whitepaper from "@public/assets/Images/seo/whitepaper.svg";
import ebook from "@public/assets/Images/seo/ebook.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 0,
    image: blog,
    title: "Blog Marketing",
    description:
      "The marketing strategy uses blogs to address potential customers directly and individually, thus achieving customer loyalty for their own brand.",
    bgColor: "#FFF2FE",
  },
  {
    id: 1,
    image: infographic,
    title: "Infographic Marketing",
    description:
      "An infographic is a compassionate way to visually share important information or data. It allows you to communicate a variety of content, such as statistics, facts, and ideas and helps them understand your message better.",
    bgColor: "#F2F5FF",
  },
  {
    id: 2,
    image: podcast,
    title: "Podcasts Marketing",
    description:
      "Podcast marketing refers to the strategies and tactics used to promote and advertise a podcast to attract more listeners and engage the existing audience.",
    bgColor: "#F3EEFF",
  },
  {
    id: 3,
    image: whitepaper,
    title: "WhitePaper Marketing",
    description:
      "Whitepaper marketing is a content marketing strategy that involves creating in-depth reports to educate and persuade an audience about a topic or problem.",
    bgColor: "#FAFFF2",
  },
  {
    id: 4,
    image: ebook,
    title: "eBook Marketing",
    description:
      "An eBook in marketing serves as a digital resource designed to educate, inform, or engage an audience while simultaneously promoting a brand, product, or service.",
    bgColor: "#F2FFFE",
  },
];

function DesktopContentSwipper() {
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
    <div className="sm:hidden hidden md:hidden lg:flex justify-center items-center">
      <div className="w-[90%] pt-[110px] pb-[70px] md:p-24 md:pt-[140px]">
        <div className="text-center flex flex-col gap-[1rem]">
          <h1 className="md:text-start leading-[120%] text-black font-semibold font-firansans lg:text-[60px] md:text-[55px] text-[36px]">
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
              className={`w-[12%] p-2 text-[18px] border ${
                currentSlide === index ? "bg-gray-200 border-black text-black" : "border-black"
              } rounded-[20px]`}
            >
              {slide.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="overflow-hidden lg:w-[69%] md:w-[71%] lg:h-[90%] md:h-[90%] w-[90%] relative mt-10">
          <div
            className="flex gap-14"
            style={{
              transform: `translateX(-${currentSlide * 10}%)`,
              width: `${slides.length * 211}%`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`rounded-[80px] lg:p-[60px] md:p-[60px] flex flex-col gap-[1rem] md:w-[340px] md:h-[400px] sm:w-[320px] w-[340px] h-[360px] lg:w-[800px] lg:h-[320px] p-10 border`}
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesktopContentSwipper;
