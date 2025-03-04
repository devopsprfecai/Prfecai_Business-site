"use client";

import React, { useState } from "react";
import Image from "next/image";
import blog from "@public/assets/Images/seo/blog.svg";
import infographic from "@public/assets/Images/seo/infographic.svg";
import podcast from "@public/assets/Images/seo/podcast.svg";
import whitepaper from "@public/assets/Images/seo/whitepaper.svg";
import ebook from "@public/assets/Images/seo/ebook.svg";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: blog,
    title: "Blog Marketing",
    description:
      "The marketing strategy uses blogs to address potential customers directly and individually, thus achieving customer loyalty for their own brand.",
    bgColor: "#FFF2FE",
  },
  {
    id: 2,
    image: infographic,
    title: "Infographic Marketing",
    description:
      "An infographic is a compassionate way to visually share important information or data. It allows you to communicate a variety of content, such as statistics, facts, and ideas and helps them understand your message better.",
    bgColor: "#F2F5FF",
  },
  {
    id: 3,
    image: podcast,
    title: "Podcasts Marketing",
    description:
      "Podcast marketing refers to the strategies and tactics used to promote and advertise a podcast to attract more listeners and engage the existing audience.",
    bgColor: "#F3EEFF",
  },
  {
    id: 4,
    image: whitepaper,
    title: "White Paper Marketing",
    description:
      "White paper marketing is a content marketing strategy that involves creating in-depth reports to educate and persuade an audience about a topic or problem.",
    bgColor: "#FAFFF2",
  },
  {
    id: 5,
    image: ebook,
    title: "eBook Marketing",
    description:
      "An eBook in marketing serves as a digital resource designed to educate, inform, or engage an audience while simultaneously promoting a brand, product, or service.",
    bgColor: "#F2FFFE",
  },
];

function MobileContentSwiper() {
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
          Bring in organic traffic with a straightforward content marketing{" "}
          </h1>
          <p className="text-start leading-[170%] md:text-[21px] lg:text-[24px] w-[80%] pt-5">
          The impeccable Content strategy makes it easy to attract organic traffic and strengthen your online presence without hassle.
          </p>

          <div className=" overflow-hidden h-[90%] w-[100%] relative">
            <div
              className="flex "
              style={{
                transform: `translateX(-${currentSlide * 10}%)`,
                width: `${slides.length * 211}%`,
              }}
            >
              <div className="flex justify-center gap-9 pt-10">
                <div
                  className="rounded-[80px] bg-[#FFF2FE] flex flex-col gap-[1rem] p-10 border w-[340px] h-[360px]"
                >
                  <Image className="w-[40px]" alt="" src={blog} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Blog Marketing
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      The marketing strategy uses blogs to address potential
                      customers directly and individually, thus achieving
                      customer loyalty for their own brand.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-[80px] bg-[#F2F5FF] flex flex-col gap-[1rem] w-[340px] h-[360px] p-9 border"
                >
                  <Image className="w-[40px]" alt="" src={infographic} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Infographic Marketing
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      An infographic is a compassionate way to visually share
                      important information or data. It allows you to
                      communicate a variety of content, such as statistics,
                      facts, and ideas and helps them understand your message
                      better.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-[80px] bg-[#F3EEFF] flex flex-col gap-[1rem] w-[340px] h-[360px] p-9 border"
                >
                  <Image className="w-[40px]" alt="" src={podcast} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    Podcasts Marketing
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      Podcast marketing refers to the strategies and tactics
                      used to promote and advertise a podcast to attract more
                      listeners and engage the existing audience.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-[80px] bg-[#FAFFF2] flex flex-col gap-[1rem] w-[340px] h-[360px] p-[40px] border"
                >
                  <Image className="w-[40px]" alt="" src={whitepaper} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                    White Paper Marketing
                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                      White paper marketing is a content marketing strategy that
                      involves creating in-depth reports to educate and persuade
                      an audience about a topic or problem.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-[80px] bg-[#F2FFFE] flex flex-col gap-[1rem] w-[340px] h-[360px] p-8 border"
                >
                  <Image className="w-[40px]" alt="" src={ebook} />
                  <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[1px] text-black font-semibold">
                  eBook Marketing                  </h1>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-[17px]">
                    An eBook in marketing serves as a digital resource designed to educate, inform, or engage an audience while simultaneously promoting a brand, product, or service.
                    </p>
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

export default MobileContentSwiper;
