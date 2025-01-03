"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const EmailFAQ = () => {
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
                className="py-2 flex lg:gap-[40%] md:gap-[40%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is email marketing, and why is it important?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[80%] md:w-[80%] lg:[60%] w-[100%]">
                  Email marketing is the use of email to promote products,
                  services, or content. It’s important because it allows
                  businesses to build direct and personalised communication with
                  their audience, fostering trust, loyalty, and engagement while
                  driving sales and traffic.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-2 flex lg:gap-[50%] md:gap-[50%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How can I grow my email subscriber list?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[80%] lg:[80%] w-[100%]">
                  To grow your email list, offer valuable content or incentives
                  such as eBooks, discounts, or exclusive updates. Ensure you
                  have clear opt-in forms on your website, use social media to
                  promote sign-ups, and run targeted campaigns to reach your
                  audience.
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-2 flex lg:gap-[42%] md:gap-[42%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What makes a good email marketing campaign?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
                  A good campaign is engaging, personalised, and relevant to
                  your audience. Use compelling subject lines, high-quality
                  content, and strong calls-to-action (CTAs).
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-2 flex lg:gap-[47.5%] md:gap-[47.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How often should I send marketing emails?
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
                  The frequency depends on your audience and content. Generally,
                  sending 1-2 emails per week works well for most businesses.
                  Ensure consistency without overwhelming your subscribers, and
                  monitor engagement to adjust accordingly.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className=" pt-[2rem] py-2">
              <div
                onClick={toggleParagraph5}
                className="py-5 flex lg:gap-[28.3%] md:gap-[28.3%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What are some common email marketing mistakes to avoid?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[60%] lg:[60%] w-[70%]">
                  Avoid spamming your audience, neglecting mobile optimisation,
                  using misleading subject lines, and failing to personalise
                  content.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailFAQ;
