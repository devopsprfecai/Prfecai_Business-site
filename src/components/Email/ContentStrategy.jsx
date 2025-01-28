import React from "react";
import Image from "next/image";
import creation from "@public/assets/Images/seo/creation.svg";
import newsletter from "@public/assets/Images/seo/newsletter.svg";
import promotionalemails from "@public/assets/Images/seo/promotionalemails.svg";
import brandstory from "@public/assets/Images/seo/brandstory.svg";
import updateemail from "@public/assets/Images/seo/updateemail.svg";
import surveyemail from "@public/assets/Images/seo/surveyemail.svg";

function ContentStrategy() {
  return (
    <div className="flex justify-center item-center py-[90px] xl:py-[110px]">
      <div className="flex flex-col gap-[2.5rem] xl:w-[85%] lg:w-[85%] md:w-[85%] w-[90%]">
        <div className="flex flex-col gap-[1.2rem]">
          <h1 className="text-black  md:text-center font-semibold font-firansans lg:text-[50px] lg:text-center text-center sm:w-[80%] lg:w-[100%] md:w-[100%] md:text-[40px] text-[32px]">
          Grow organic traffic with a smooth email marketing          </h1>
          <p className="text-center text-[18px] leading-[170%] md:text-[18px] sm:w-[78%] md:w-[100%] lg:text-[20px] lg:w-[100%]">
          The Smooth Email method allows you to easily increase organic traffic and improve your online presence.
          </p>
        </div>

        <div className="lg:flex lg:flex-row flex justify-center lg:flex-wrap gap-[1.5rem] md:flex md:flex-row md:flex-wrap md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[2.5rem] sm:flex sm:flex-col flex flex-col ">
          <div className="rounded-[32px] hover:bg-[#FFEBF6] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={creation} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Campaign creation
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                The right campaigns help you generate more attention for your
                events, products and other commercial or informative peak
                moments. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] hover:bg-[#ECEEFF] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={newsletter} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Newsletters
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Newsletters can be a valuable tool for businesses to connect
                with customers, promote products and services, and build brand
                awareness. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] hover:bg-[#E7FFF4] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={promotionalemails} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Promotional Emails
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                A promotional email is an email sent to inform the email list of
                your new or existing products or services.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] hover:bg-[#F6FFE7] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={brandstory} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Brand story emails
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Brand story emails are a type of email marketing that focuses on
                sharing the story behind your brand.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] hover:bg-[#F0E9FF] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={updateemail} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Product update email
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Your product update email should contain new information to make
                your clients feel that they are in the loop and keep them
                informed.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] hover:bg-[#FFF3ED] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={surveyemail} />
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Survey emails
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Email surveys are a method of data collection used to request
                information using questionnaires or surveys that are sent via
                email to a target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentStrategy;
