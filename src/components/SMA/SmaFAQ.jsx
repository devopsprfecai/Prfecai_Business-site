"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SmaFAQ = () => {
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
    <div className="flex justify-center item-center bg-[#F2FAFF] py-[90px] xl:py-[110px]">
      <div className="w-[90%] xl:w-[85%] lg:w-[85%] md:w-[85%] flex flex-col ">
        <h1 className="text-black md:text-center font-semibold text-center font-firansans lg:text-[50px] md:text-[40px] text-[35px]">
          Frequently Asked Questions
        </h1>

        {/* Q 1 */}
        <div className="flex justify-center">
          <div className="w-[75%]">
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph1}
                className="py-3 flex lg:gap-[31%] md:gap-[31%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is social media advertising, and how does it work?{" "}
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
                  Social media advertising involves using paid ads on platforms
                  like Facebook, Instagram, LinkedIn, or Twitter to promote
                  products, services, or content.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-3 flex lg:gap-[33%] md:gap-[33%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  Which social media platforms are best for advertising?{" "}
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
                <p className="sm:text-[20px] lg:text-[18px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[100%]">
                  The best platform depends on your business and audience. For
                  example: 
                  <li>Facebook & Instagram: Ideal for visual content and
                  reaching a broad audience.</li> 
                  <li>LinkedIn: Perfect for B2B marketing
                  and professional services.</li> 
                  <li>Twitter: Great for real-time
                  updates and conversations.</li>
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-3 flex lg:gap-[42%] md:gap-[42%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How much does social media advertising cost?{" "}
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
                <p className="sm:text-[20px] lg:text-[18px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[100%]">
                  Costs vary depending on the platform, ad type, and competition
                  in your industry. Most platforms use a pay-per-click (PPC) or
                  cost-per-thousand-impressions (CPM) model, allowing you to set
                  budgets and control spending.
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-3 flex lg:gap-[32.5%] md:gap-[32.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How can I measure the success of my social media ads?{" "}
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
                <p className="sm:text-[20px] lg:text-[18px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[100%]">
                  Success can be measured using metrics such as reach,
                  impressions, click-through rate (CTR), engagement (likes,
                  shares, comments), conversions, and return on ad spend (ROAS).
                  Use tools like Facebook Ads Manager or Google Analytics to
                  track performance.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className="pt-[2rem]  py-2">
              <div
                onClick={toggleParagraph5}
                className="py-3 flex lg:gap-[22%] md:gap-[22%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What are common mistakes to avoid in social media advertising?
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
                <p className="sm:text-[20px] lg:text-[18px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:w-[90%] w-[100%]">
                  Common mistakes include: 
                  <li>Poor targeting or audience research.</li>
                  <li>Ignoring ad creative (images, videos, and copy).</li> 
                  <li>Not testing different ad formats or strategies.</li> 
                  <li>Overlooking analytics and performance data.</li> 
                  <li>Failing to set clear goals for campaigns.</li>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmaFAQ;
