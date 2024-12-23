"use client";
import React from "react";
import "@styles/footer/Footer.css";
import Image from "next/image";
import logo from "@public/assets/Images/navbar/Prfec Logo White.png";
import facebookWhite from "@public/assets/Images/footer/facebook-white.png";
import xWhite from "@public/assets/Images/footer/x-white.png";
import Instagram from "@public/assets/Images/footer/instagram-white.png";
import Linkedin from "@public/assets/Images/footer/linkedin-white.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-contents">
              <Link href="/"><Image src={logo} alt="prfec logo" /></Link>
            </div>
            <div className="footer-contents">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Refund Policy</p>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="text-white">Join the Community</h2>
            <div className="footer-socials">
              <Image src={facebookWhite} alt="facebook" />
              <Image src={xWhite} alt="X" />
              <Image src={Instagram} alt="Instagram" />
              <Image src={Linkedin} alt="Linkedin" />
            </div>
            
          </div>
        </div>
      </div>
      <p className="text-white bg-black text-center">copyright&copy;prfec.ai, 2024</p>
    </div>
  );
};
