"use client";
import React, { useState } from "react";
import Image from "next/image";

import { BsArrowRightShort } from "react-icons/bs";
import seo from "@public/assets/Images/landing/seo.svg";
import cmarketing from "@public/assets/Images/landing/cmarketing.svg"
import email from "@public/assets/Images/landing/email.svg"
import Link from "next/link";


export const LandingInbound = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="landing-inbound">
      <div className="landing-inbound-container">
        <div className="landing-inbound-top">
          <h2>Everything Inbound</h2>
          <p>
            Enhance your marketing performance with the unlimited power of AI.
          </p>
          <button onClick={openPopup}>Get Started</button>
        </div>

        <div className="landing-inbound-bottom">
          <div className="landing-inbound-bottom-box">
            <div className="contents">
              <Image src={seo} />
              <h4 className="">Search Engine Optimisation</h4>
              <div className="text-[20px]">
                <p className="">On-page optimization </p>
                <p> Off-page optimization </p>
                <p>Technical SEO audits </p>
                <p> Keyword research and analysis</p>
              </div>
            </div>

           <Link href="/seo"> <div className="link">
              <p style={{ cursor: "pointer" }}>
                Learn more
              </p>
              <p>
                 <BsArrowRightShort className="size-[30px]"/>
              </p>
            </div></Link>
          </div>

          <div className="landing-inbound-bottom-box">
            <div className="contents">
              <Image src={cmarketing} />
              <h4 className="">Content Marketing</h4>
              <div className="text-[20px]">
                <p className="">Blog writing and optimization </p>
                <p>Video marketing </p>
                <p>Infographic creation</p>
              </div>
            </div>

           <Link href="/content"> <div className="link">
              <p onClick={openPopup} style={{ cursor: "pointer" }}>
                Learn more
              </p>
              <p>
             <BsArrowRightShort className="size-[30px]"/>
              </p>
            </div></Link>
          </div>
          <div className="landing-inbound-bottom-box">
            <div className="contents">
              <Image src={email} />
              <h4 className="">Email Marketing</h4>
              <div className="text-[20px]">
                <p >Campaign creation and management </p>
                <p>List segmentation and targeting</p>
                <p>A/B testing and optimization</p>
              </div>
            </div>

           <Link href="/email"> <div className="link">
              <p  style={{ cursor: "pointer" }}>
                Learn more
              </p>
              <p>
                 <BsArrowRightShort className="size-[30px]"/>
              </p>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
