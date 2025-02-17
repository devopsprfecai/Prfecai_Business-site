"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const AnalyticsFAQ = () => {
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
        <h1 className="text-black md:text-center text-center font-semibold font-firansans lg:text-[50px] md:text-[40px] text-[35px]">
          Frequently Asked Questions
        </h1>

        {/* Q 1 */}
        <div className="flex justify-center">
          <div className="w-[75%]">
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph1}
                className="py-2 flex lg:gap-[38%] md:gap-[10%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is analytics and reporting in digital marketing?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[80%] md:w-[80%] lg:w-[90%] w-[100%]">
                  Analytics and reporting involve collecting and analysing data
                  to measure the performance of your marketing efforts.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-2 flex lg:gap-[47.5%] md:gap-[10%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  Why is analytics important for my business?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[80%] lg:w-[90%] w-[100%]">
                  Analytics helps you make data-driven decisions by providing
                  insights into what works and what doesnt. This leads to
                  improved marketing strategies, higher ROI, and a better
                  understanding of your audiences needs.
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-2 flex lg:gap-[47%] md:gap-[20%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What key metrics should I track in analytics?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[70%]">
                  Common metrics to track include website traffic, conversion
                  rates, bounce rates, click-through rates (CTR), engagement
                  levels, customer acquisition cost (CAC), and return on
                  investment (ROI).
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-2 flex lg:gap-[42.5%] md:gap-[15%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How often should I review my analytics reports?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[70%]">
                  Its important to review your analytics regularly—weekly or
                  monthly depending on your campaign goals. This ensures you can
                  identify trends, adjust strategies, and stay on track to
                  achieve your objectives.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className=" pt-[2rem] py-2">
              <div
                onClick={toggleParagraph5}
                className="py-5 flex lg:gap-[39.5%] md:gap-[15%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  Can analytics help improve customer engagement?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[70%]">
                  Yes, by analysing user behaviour, you can identify which
                  content or actions resonate with your audience, allowing you
                  to tailor your approach and improve engagement across
                  platforms.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFAQ;
