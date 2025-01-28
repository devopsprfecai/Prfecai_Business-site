"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const PayFAQ = () => {
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
          <div className="lg:w-[75%] md:w-[85%]">
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph1}
                className="py-2 flex lg:gap-[50%] gap-[5%]  md:gap-[20%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is Pay-Per-Click (PPC) advertising?
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[80%] md:w-[80%] lg:w-[85%] w-[100%]">
                  PPC is a digital advertising model where you pay only when
                  someone clicks on your ad. It’s a cost-effective way to drive
                  targeted traffic to your website.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-2 flex lg:gap-[54.5%] md:gap-[27%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How does PPC benefit my business?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[80%] lg:w-[88%] w-[100%]">
                  PPC increases visibility, attracts potential customers, and
                  offers measurable results, ensuring your marketing budget is
                  spent effectively.
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-2 flex lg:gap-[52%] md:gap-[23%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How much does PPC advertising cost?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[88%] w-[70%]">
                  Costs vary based on your budget, industry, and competition.
                  You can set daily limits to control spending.
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-2 flex lg:gap-[49%] md:gap-[18.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  Can I target specific audiences with PPC?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[88%] w-[70%]">
                  Yes, PPC allows precise targeting by location, demographics,
                  keywords, and interests, ensuring your ads reach the right
                  people.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className=" pt-[2rem] py-2">
              <div
                onClick={toggleParagraph5}
                className="py-5 flex lg:gap-[44.5%] md:gap-[11.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What platforms are best for PPC advertising?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[85%] w-[70%]">
                  Google Ads and social media platforms like Facebook,
                  Instagram, and LinkedIn are popular choices for PPC campaigns.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFAQ;
