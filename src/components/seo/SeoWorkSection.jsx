import React from "react";
import Image from "next/image";
import OnPage from "@public/assets/Images/seo/filelogo.svg";
import filepageseo from "@public/assets/Images/seo/filepageseo.svg";

function SeoWorkSection() {
  return (
    <div className="bg-[#F2F2FF] py-[90px] xl:py-[110px]">
      <div className="flex justify-center item-center">
        <div className="flex flex-col gap-[2.5rem] xl:w-[85%] lg:w-[85%] sm:w-[90%] w-[90%] lg:flex-col xl:flex-row">
          <div className="flex flex-col gap-[1.2rem]">
            <h1 className="text-black  md:text-start font-semibold font-firansans lg:text-[50px] md:text-[40px] text-[32px]">
              Make SEO work across pages
            </h1>
            <div className="">
              {" "}
              <p className="text-start leading-[170%] text-[18px] md:text-[18px] md:w-[85%] lg:text-[20px] lg:w-[80%] ">
                We provide friendly SEO services to boost your online visibility
                and reach your audience. Our goal is to make your brand stand
                out and grow.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 pt-5 md:flex-row md:gap-4 md:pt-5 lg:flex-row lg:gap-[2.5rem]"> */}
          <div className="flex flex-col gap-[1.5rem] flex-col sm:flex-row sm:gap-5  md:flex-row md:gap-[2rem] md:pt-5  xl:flex-row lg:gap-[2.5rem]">

            <div className="rounded-[32px] border-[#9B9898] bg-[#ffffff] flex flex-col gap-3 md:w-[350px] md:h-[420px] w-[100%] h-[420px] sm:w-[390px] sm:h-[430px] lg:w-[350px] lg:h-[370px] p-[24px] border">
              <Image className="w-[60px]" alt="" src={OnPage} />
              <h1 className="text-[24px] md:text-[28px] lg:text-[28px] text-black font-semibold">
                On-Page SEO
              </h1>
              <div className="text-[17px] flex flex-col gap-2">
                {" "}
                <p>
                  On-Page SEO refers to the strategies and optimisations we
                  apply directly within your website to improve its search
                  engine ranking.
                </p>
                <p>
                  {" "}
                  This is essential for making sure your content aligns with
                  user intent and is discoverable by search engines
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border-[#9B9898] bg-[#ffffff] flex flex-col gap-3 md:w-[350px] md:h-[420px] w-[100%] h-[420px] sm:w-[390px] sm:h-[430px] lg:w-[350px] lg:h-[370px]  p-[24px] border">
              <Image className="w-[60px]" alt="" src={filepageseo} />
              <h1 className="text-[24px] md:text-[28px] lg:text-[28px] text-black font-semibold">
                Off-Page SEO
              </h1>
              <div className="text-[17px] flex flex-col gap-2">
                {" "}
                <p>
                  Off-Page SEO focuses on building your websites reputation and
                  authority through external efforts.
                </p>
                <p>
                  These tactics help increase your websites trustworthiness and
                  visibility on search engines by leveraging outside sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoWorkSection;
