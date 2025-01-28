import React from "react";
import Image from "next/image";
import emailgrow from '@public/assets/Images/seo/emailgrow.svg'


function EmailGrow() {
  return (
    <div className="font-firansans lg:gap-10 pt-24 pb-20 lg:flex  lg:justify-center bg-[#F2F2FF] lg:item-center ">
      <div className="w-[90%] ml-5 md:ml-40 lg:ml-0 md:w-[60%] bg-white text-white p-8 rounded-[32px] border lg:w-[40%] lg:h-[500px]">
        <h1 className="lg:text-[50px] md:text-[50px] leading-[130%] text-black text-[28px] sm:text-[35px] text-center sm:text-start font-semibold">
          Grow with our Email Marketing Platform
        </h1>
        <p className="text-start font-light text-black leading-[170%] py-3 text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%] ">
          Prfec help you connect with your audience by speaking their
          language.This means we take the time to understand their interests and
          needs, allowing us to craft messages that are not only relevant but
          also tailored specifically for them.
        </p>
      </div>
      <div className="pt-7 lg:pt-0 flex justify-center">
      <Image alt=''className="lg:size-[94%] md:size-[60%] size-[90%]" src={emailgrow}/>
      </div>
     
    </div>
  );
}

export default EmailGrow;
