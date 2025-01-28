import React from "react";
import Image from "next/image";
import content from "@public/assets/Images/seo/content.svg";

function ContentCreate() {
  return (
    <div className="bg-[#F2F2FF] py-[90px] xl:py-[140px]">
      <div className="flex justify-center item-center">
        <div className="lg:flex w-[88%] lg:w-[85%]">
          <div className="flex flex-col gap-[1.2rem]">
            <h1 className="text-black  md:text-start leading-[110%] font-semibold font-firansans lg:w-[85%] md:w-[75%] lg:text-[50px] md:text-[40px] text-[32px]">
              Create content together for your pages.
            </h1>
            <div className="">
              {" "}
              <p className="text-start leading-[170%] text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[70%] ">
                Blogging is one of the most powerful tools in digital
                marketing.It helps business connect with their audience,share
                valuable information, and improve their online visibility.
              </p>
            </div>
          </div>
          <div className="lg:block hidden sm:hidden md:hidden lg:-mt-12 pt-5">
            <Image
              className="border-[5px] rounded-[10px] border-[#515BDA]"
              alt=""
              src={content}
            />
          </div>
          <div className=" lg:hidden lg:-mt-12 pt-5">
            <Image
              className="border-[5px] w-[100%] rounded-[10px] border-[#515BDA]"
              alt=""
              src={content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCreate;
