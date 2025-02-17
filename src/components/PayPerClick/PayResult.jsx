import React from "react";
import Image from "next/image";
// import companylogos from "@public/assets/Images/seo/companylogos.svg";
import resultdriven from "@public/assets/Images/seo/resultdriven.svg"

function PayResult() {
  return (
    <div className="flex justify-center bg-[#FFF2FB] item-center py-[90px] xl:py-[110px]">
      <div className="w-[90%] xl:w-[85%] lg:w-[85%] md:w-[85%] flex flex-col xl:flex-row lg:flex-row gap-[1rem]">
        <div className="flex flex-col gap-[1rem] lg:w-[45%]">
          <h1 className="font-firansans leading-[120%] font-semibold sm:text-[35px] md:text-[40px] lg:text-[50px] text-[32px] lg:w-[100%]">
            Result Driven Strategies
          </h1>
          <p className="text-start text-[18px] leading-[170%] sm:text-[18px] md:text-[20px] md:w-[90%] lg:text-[20px] lg:w-[90%] ">
            Unlock success with results-driven strategies tailored to your
            goals. Focus on measurable outcomes to maximise ROI and drive growth.
          </p>
        </div>
        <div className="w-[100%] h-[100%] lg:w-[55%] flex align-center xl:justify-end">
          {/* <Image className="lg:size-[120%] lg:pt-0 md:pt-10 sm:pt-10 pt-5" alt="" src={companylogos} /> */}
          <Image className="w-[100%] h-[auto] xl:w-[80%] md:w-[60%] " alt="" src={resultdriven} />

        </div>
      </div>
    </div>
  );
}

export default PayResult;
