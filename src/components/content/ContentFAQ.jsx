"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ContentFAQ = () => {
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
                className="py-1 flex lg:gap-[25%] md:gap-[25%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What is content marketing, and how can it benefit my business?
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[100%] lg:[100%] w-[100%]">
                  Content marketing is a strategic approach focused on creating
                  and distributing valuable, relevant, and consistent content to
                  attract and retain a defined audience.
                </p>
              )}
            </div>

            {/* Q 2 */}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph2}
                className="py-1 flex lg:gap-[28%] md:gap-[28%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How long does it take to see results from content marketing?
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[95%] lg:[95%] w-[70%]">
                  Content marketing is a long-term strategy. While some results,
                  such as increased website traffic, can be seen within a few
                  months, significant outcomes like improved rankings and higher
                  conversion rates may take 6–12 months.
                </p>
              )}
            </div>

            {/*Q 3*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph3}
                className="py-1 flex lg:gap-[34%] md:gap-[34%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  What types of content are most effective for marketing?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[95%] lg:[95%] w-[70%]">
                  The most effective types of content vary based on your
                  audience and goals but often include blog posts, infographics,
                  videos, eBooks, case studies, email newsletters, and social
                  media updates.
                </p>
              )}
            </div>

            {/*Q 4*/}
            <div className="pt-[2rem] border-b border-gray-400 py-2">
              <div
                onClick={toggleParagraph4}
                className="py-1 flex lg:gap-[19%] md:gap-[19%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  Do I need a content marketing strategy, or can I just publish
                  content?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[95%] lg:w-[95%] w-[70%]">
                  A content marketing strategy is essential for success. It
                  ensures that your content aligns with your business goals,
                  targets the right audience, and addresses their pain points.
                </p>
              )}
            </div>

            {/*Q 5*/}
            <div className="pt-[2rem] py-2">
              <div
                onClick={toggleParagraph5}
                className="py-1 flex lg:gap-[25.5%] md:gap-[25.5%] text-[20px] lg:text-[24px] sm:text-[24px] md:text-[24px] font-medium"
              >
                <h2 className="cursor-pointer">
                  How do I measure the success of my content marketing efforts?{" "}
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
                <p className="sm:text-[20px] lg:text-[20px] md:text-[20px] text-[16px] sm:w-[60%] md:w-[100%] lg:[100%] w-[70%]">
                  Success can be measured through various metrics, such as
                  website traffic, engagement (likes, shares, comments), lead
                  generation, conversion rates, and ROI.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFAQ;
