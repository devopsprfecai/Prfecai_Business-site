"use client";

import React, { useState } from "react";
import Image from "next/image";
import instagram from "@public/assets/Images/seo/instagram.svg";
import facebook from "@public/assets/Images/seo/facebook.svg";
import linkedin from "@public/assets/Images/seo/linkedin.svg";
import twitter from "@public/assets/Images/seo/twitter.svg";
import videoadds from "@public/assets/Images/seo/videoadds.svg";

function Smatraffic() {
  const [selectedAd, setSelectedAd] = useState("Facebook Ads");

  const ads = [
    {
      id: 1,
      image: facebook,
      name: "Facebook Ads",
      description:
        "Facebook ads are extremely powerful marketing tools. They let you design and post ads that target very specific customer segments at a price that can suit any budget.",
    },
    {
      id: 2,
      image: instagram,
      name: "Instagram Ads",
      description:
        "Instagram advertising is a function of the Instagram social that enables brands to run display ads that target Instagram users. Instagram advertising requires a brand to have a Facebook page and access to an Instagram business profile.",
    },
    {
      id: 3,
      image: linkedin,
      name: "LinkedIn Ads",
      description:
        "LinkedIn Ads is a paid marketing tool that offers access to LinkedIn social networks through various sponsored posts and other methods. LinkedIn Ads is a powerful marketing tool for B2B companies to build leads, online recognition, share content, and more.",
    },
    {
      id: 4,
      image: twitter,
      name: "Twitter Ads",
      description:
        "Twitter Ads allow you to reach new users and promote your products or services to people who are likely interested in what your brand offers.",
    },
    {
      id: 5,
      image: videoadds,
      name: "Video Ads",
      description:
        "Video advertising is a form of video marketing in which promotional content is played before, during, or after streaming content. The classic example is pre-roll and mid-roll video ads on YouTube that viewers see while they watch videos on YouTube.",
    },
  ];

  return (
    <div className="flex justify-center items-center py-[90px] bg-[#F9F2FF] xl:py-[110px]">
      <div className="flex flex-col font-start gap-[2.5rem] xl:w-[85%] lg:w-[85%] md:w-[85%] w-[90%]">
        <div className="flex flex-col gap-[1.2rem]">
          <h1 className="text-black md:text-start font-semibold font-firansans lg:text-[50px] lg:text-start sm:w-[80%] lg:w-[90%] md:w-[90%] md:text-[40px] text-[32px]">
            Generate Organic Traffic through Seamless Social Media Advertising
          </h1>
          <p className="text-start text-[18px] md:text-[18px] sm:w-[78%] md:w-[80%] lg:text-[20px] lg:w-[80%]">
            The Seamless Generate Organic Traffic through Seamless Social Media
            Advertising helps you drive organic traffic and grow your online
            presence effortlessly.
          </p>

          <div className="text-[24px] font-semibold gap-[20%] py-3 md:flex lg:flex">
            {/* Ad Options */}
            <div>
              {ads.map((ad) => (
                <ul
                  key={ad.name}
                  className={`p-2 px-10 rounded-[10px] cursor-pointer ${
                    selectedAd === ad.name ? "bg-[#F0DFFF]" : ""
                  }`}
                  onClick={() => setSelectedAd(ad.name)}
                >
                  {ad.name}
                </ul>
              ))}
            </div>

            {/* Ad Content */}
            
            <div className="rounded-[20px]  border font-normal lg:w-[40%] md:w-[40%] text-[20px] bg-white p-4">
              <div className="flex flex-col gap-4">
                {/* Render Image if Available */}
                {ads.find((ad) => ad.name === selectedAd)?.image && (
                  <Image
                    src={ads.find((ad) => ad.name === selectedAd)?.image}
                    alt={selectedAd}
                    width={50}
                    height={50}
                  />
                )}
                {/* Render Description */}
                <p>{ads.find((ad) => ad.name === selectedAd)?.description}</p>
              </div>
            </div>
            </div>
          </div>
       </div>
    </div>
  );
}

export default Smatraffic;
