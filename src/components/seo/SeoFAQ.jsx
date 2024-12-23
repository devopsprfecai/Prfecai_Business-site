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
      <div className="w-[90%] xl:w-[85%] lg:w-[85%] md:w-[85%] flex flex-col ">
        <h1 className="text-black md:text-start font-semibold font-firansans lg:text-[50px] md:text-[40px] text-[35px]">
          Frequently Asked Questions
        </h1>

        {/* Q 1 */}
        <div className="pt-[2rem]">
          <div className="py-5 flex gap-[2rem] text-[20px] lg:text-[28px] sm:text-[28px] md:text-[28px] font-medium">
            <h2>What is on-page SEO and why is it important?</h2>
            <p onClick={toggleParagraph1} className="cursor-pointer">
              {isOpen1 ? (
                <IoIosArrowDown className="inline" />
              ) : (
                <IoIosArrowUp />
              )}
            </p>
          </div>
          {isOpen1 && (
            <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[100%]">
              On-page SEO involves optimizing individual web pages to improve
              their search engine ranking and drive relevant traffic. It
              includes tasks like using targeted keywords, creating quality
              content, optimizing meta tags, and improving internal linking.
            </p>
          )}
        </div>
        <hr className="w-[75%] mt-3" />
        {/* Q 2 */}
        <div>
          <div className="py-5 flex gap-[21%] text-[20px] lg:text-[28px] sm:text-[28px] md:text-[28px] font-medium">
            <h2>How does off-page SEO differ from on-page SEO?</h2>
            <p onClick={toggleParagraph2} className="cursor-pointer">
              {isOpen2 ? (
                <IoIosArrowDown className="inline" />
              ) : (
                <IoIosArrowUp />
              )}
            </p>
          </div>
          {isOpen2 && (
            <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
              Off-page SEO focuses on activities outside your website that
              impact your ranking,like building backlinks,increasing brand
              mentions, and leveraging social media.
            </p>
          )}
        </div>
        <hr className="w-[75%] mt-3" />
        {/*Q 3*/}
        <div>
          <div className="py-5 flex gap-[9.5%] text-[20px] lg:text-[28px] sm:text-[28px] md:text-[28px] font-medium">
            <h2>
              What is technical SEO, and how it improves site performance?
            </h2>
            <p onClick={toggleParagraph3} className="cursor-pointer">
              {isOpen3 ? (
                <IoIosArrowDown className="inline" />
              ) : (
                <IoIosArrowUp />
              )}
            </p>
          </div>
          {isOpen3 && (
            <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
              Technical SEO optimizes a websites backend to ensure search
              engines can crawl, index, and rank it effectively.This includes
              improving site speed, fixing broken links, ensuring 
              mobile-friendliness, and using structured data.
            </p>
          )}
        </div>
        <hr className="w-[75%] mt-3" />
        {/*Q 4*/}
        <div>
          <div className="py-5 flex gap-[23%] text-[20px] lg:text-[28px] sm:text-[28px] md:text-[28px] font-medium">
            <h2>How can image SEO enhance my sites visibility?</h2>
            <p onClick={toggleParagraph4} className="cursor-pointer">
              {isOpen4 ? (
                <IoIosArrowDown className="inline" />
              ) : (
                <IoIosArrowUp />
              )}
            </p>
          </div>
          {isOpen4 && (
            <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
              Image SEO involves optimizing images to improve website
              performance and visibility in image search results.Key practices
              include using descriptive filenames, adding alt text with
              keywords, compressing image file for faster loading, and choosing
              responsive images.
            </p>
          )}
        </div>
        <hr className="w-[75%] mt-3" />
        {/*Q 5*/}
        <div>
          <div className="py-5 flex gap-[80px] text-[20px] lg:text-[28px] sm:text-[28px] md:text-[28px] font-medium">
            <h2>
              What is e-commerce SEO, and how is it tailored for online stores?
            </h2>
            <p onClick={toggleParagraph5} className="cursor-pointer">
              {isOpen5 ? (
                <IoIosArrowDown className="inline" />
              ) : (
                <IoIosArrowUp />
              )}
            </p>
          </div>
          {isOpen5 && (
            <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
              E-commerce SEO focuses on optimizing online stores to attract and
              convert shoppers. Strategies include optimizing product pages with
              targeted keywords, improving navigation, adding schema markup for
              rich snippets, and ensuring fast load times.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeoFAQ;
