import React from "react";
import Image from "next/image";
import content from "@public/assets/Images/seo/content.svg";


function ContentCreate() {
  return (
    <div className="bg-[#F2F2FF] py-[90px] xl:py-[110px]">
      <div className="flex justify-center item-center">
        <div className="flex flex-col gap-[2.5rem] xl:w-[85%] lg:w-[85%] sm:w-[90%] w-[90%] lg:flex-col xl:flex-row">
          <div className="flex flex-col gap-[1.2rem]">
            <h1 className="text-black  md:text-start leading-[110%] font-semibold font-firansans lg:text-[50px] md:text-[40px] text-[32px]">
             Create content together for your pages.
            </h1>
            <div className="">
              {" "}
              <p className="text-start leading-[170%] text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%] ">
                Blogging is one of the most powerful tools in digital marketing.It helps business connect with their audience,share valuable information, and improve their online visibility.
              </p>
            </div>
          </div>
          <Image className="" alt="" src={content} />
          </div>
      </div>
    </div>
  );
}

export default ContentCreate;
