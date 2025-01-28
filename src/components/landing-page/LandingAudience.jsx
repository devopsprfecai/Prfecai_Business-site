"use client";
import React, { useState } from "react";
import Image from "next/image";
import social from "@public/assets/Images/landing/social-media.svg";
import { BsArrowRightShort } from "react-icons/bs";
import cmarketing from "@public/assets/Images/landing/cmarketing.svg";
import analytics from "@public/assets/Images/landing/analytics.svg";
import Link from "next/link";

export const LandingAudience = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="landing-audience">
      <div className="landing-audience-container">
        <div className="landing-audience-top">
          <h2>Reach Target Audience</h2>
          <p>
            Enhance your marketing performance with the unlimited power of AI.
          </p>
          <button onClick={openPopup}>Get Started</button>
        </div>

        <div className="landing-audience-bottom">
          <div className="landing-audience-bottom-box">
            <div className="contents">
              <Image src={social} />
              <h4>Social Media Advertising</h4>
              <div>
                <p className="lists">Facebook Ads</p>
                <p className="lists">Instagram Ads</p>
                <p className="lists">LinkedIn Ads</p>
                <p className="lists">Twitter Ads</p>
              </div>
            </div>

           <Link href="/sma" > <div className="link">
              <p style={{ cursor: "pointer" }}>Learn more</p>
              <BsArrowRightShort className="size-[10%]"/>
            </div></Link>
          </div>
          <div className="landing-audience-bottom-box">
            <div className="contents">
              <Image src={cmarketing} />
              <h4>Pay-Per-Click (PPC) Advertising</h4>
              <div>
                <p className="lists">Google Ads management</p>
                <p className="lists">Bing Ads management</p>
                <p className="lists">Retargeting campaigns</p>
              </div>
            </div>

           <Link href="/payperclick"> <div className="link">
              <p style={{ cursor: "pointer" }}>Learn more</p>
              <BsArrowRightShort className="size-[10%]"/>
            </div></Link>
          </div>
          <div className="landing-audience-bottom-box">
            <div className="contents">
              <Image src={analytics} />
              <h4>Analytics and Reporting</h4>
              <div>
                <p className="lists">Google Analytics setup and management</p>
                <p className="lists">Performance reporting and insights</p>
                <p className="lists">ROI analysis</p>
              </div>
            </div>

            <Link href="/analytics"><div className="link">
              <p style={{ cursor: "pointer" }}>Learn more</p>
              <BsArrowRightShort className="size-[10%]"/>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
