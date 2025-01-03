import React from "react";

function SeoLastSection() {
  return (
    <div className=" font-firansans pt-24 pb-20 flex justify-center item-center ">
      <div className="w-[90%] md:w-[85%] bg-[#515BDA] text-white p-8 rounded-[32px] border w-[85%] lg:p-24 md:p-24">
        <h1 className="lg:text-[50px] md:text-[50px] text-[28px] sm:text-[35px] text-center sm:text-start font-semibold w-[100%] sm:w-[90%] md:w-[100%] lg:w-[85%]">
          Get the latest trends and strategies in performance marketing
          industry.
        </h1>
        <div className="py-6 lg:flex md:flex">
          <input 
          placeholder=" Enter Your Email"
          className="rounded-[5px]  border-2 border-white lg:h-[45px] lg:w-[48%] md:h-[45px] md:w-[48%] sm:w-[80%] sm:h-[40px] h-[40px] w-[100%]"/>
          <div className="flex justify-center"><button className="border-2 border-white lg:ml-[-10px] md:ml-[-10px] rounded-[5px] md:mt-0 mt-8 lg:mt-0 lg:ml-0 bg-[#515BDA] text-white p-2 px-6 ">
            Submit
          </button></div>
        </div>
      </div>
    </div>
  );
}

export default SeoLastSection;
