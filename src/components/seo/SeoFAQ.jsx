"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SeoFAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleParagraph1 = () => {
    setIsOpen1((prev) => !prev);
    setIsOpen2(false);
  };

  const toggleParagraph2 = () => {
    setIsOpen2((prev) => !prev);
    setIsOpen1(false);
  };

  const toggleParagraph3 = () => {
    setIsOpen3((prev) => !prev);
    setIsOpen2(false);
  };

  const toggleParagraph4 = () => {
    setIsOpen4((prev) => !prev);
    setIsOpen3(false);
  };

  const toggleParagraph5 = () => {
    setIsOpen5((prev) => !prev);
    setIsOpen4(false);
  };

  return (
    <div className="flex justify-center item-center bg-[#FFFEF2] py-[90px] xl:py-[110px]">
      <div className="w-[90%] xl:w-[85%] lg:w-[90%] md:w-[90%] flex flex-col ">
        <h1 className="text-black text-center font-semibold font-firansans lg:text-[50px] md:text-[40px] text-[35px]">
          Frequently Asked Questions
        </h1>

        {/* Q 1 */}
        <div className="flex justify-center">
          <div className="w-[70%]">
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph1}
                className="py-3 flex lg:gap-[40%] md:gap-[40%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is on-page SEO and why is it important?
                </h2>
                <p className="cursor-pointer">
                  {isOpen1 ? (
                    <IoIosArrowUp className="inline" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              {isOpen1 && (
                <p className="sm:text-[20px] lg:text-[18px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[100%]">
                  On-page SEO involves optimizing individual web pages to
                  improve their search engine ranking and drive relevant
                  traffic. It includes tasks like using targeted keywords,
                  creating quality content, optimizing meta tags, and improving
                  internal linking.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-3 flex lg:gap-[35.5%] md:gap-[35.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How does off-page SEO differ from on-page SEO?
                </h2>
                <p className="cursor-pointer">
                  {isOpen2 ? (
                    <IoIosArrowUp className="inline" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              {isOpen2 && (
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[85%] lg:w-[85%] w-[100%]">
                  Off-page SEO focuses on activities outside your website that
                  impact your ranking,like building backlinks,increasing brand
                  mentions, and leveraging social media.
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-3 flex lg:gap-[21.5%] md:gap-[21.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is technical SEO, and how it improves site performance?
                </h2>
                <p className="cursor-pointer">
                  {isOpen3 ? (
                    <IoIosArrowUp className="inline" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              {isOpen3 && (
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[85%] lg:[85%] w-[70%]">
                  Technical SEO optimizes a websites backend to ensure search
                  engines can crawl, index, and rank it effectively.This
                  includes improving site speed, fixing broken links, ensuring
                  mobile-friendliness, and using structured data.
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-3 flex lg:gap-[38.5%] md:gap-[38.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How can image SEO enhance my sites visibility?
                </h2>
                <p className="cursor-pointer">
                  {isOpen4 ? (
                    <IoIosArrowUp className="inline" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              {isOpen4 && (
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[85%] lg:[85%] w-[70%]">
                  Image SEO involves optimizing images to improve website
                  performance and visibility in image search results.Key
                  practices include using descriptive filenames, adding alt text
                  with keywords, compressing image file for faster loading, and
                  choosing responsive images.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className="pt-[2rem]  py-2">
              <div
                onClick={toggleParagraph5}
                className="py-3 flex lg:gap-[17.5%] md:gap-[17.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is e-commerce SEO, and how is it tailored for online
                  stores?
                </h2>
                <p className="cursor-pointer">
                  {isOpen5 ? (
                    <IoIosArrowUp className="inline" />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              {isOpen5 && (
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[85%] lg:[85%] w-[70%]">
                  E-commerce SEO focuses on optimizing online stores to attract
                  and convert shoppers. Strategies include optimizing product
                  pages with targeted keywords, improving navigation, adding
                  schema markup for rich snippets, and ensuring fast load times.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFAQ;
