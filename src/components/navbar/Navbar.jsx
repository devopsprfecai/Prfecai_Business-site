"use client";
import React, { useState, useEffect, useRef } from "react";
import "@styles/navbar/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import prfec from "@public/assets/Images/navbar/prfec.svg";
import Hamburger from "@public/assets/Images/navbar/hamburger.svg";
import Close from "@public/assets/Images/navbar/close.svg";
import { IoIosArrowDown } from "react-icons/io";
import DefaultProfile from "@public/assets/Images/navbar/default.svg";
import { IoIosArrowUp } from "react-icons/io";
import { UserAuth } from "@context/AuthContext";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [dropOpen1,setDropOpen1] = useState(false)
  const [dropOpen2,setDropOpen2] = useState(false)
  const router = useRouter();
  const dropdownRef = useRef(null);

  const { user, logOut, loading } = UserAuth();

  const handleServiceDropDown = () => {
    setDropOpen((prev) => !prev);
  };

  const handleServiceDropDown1 = () => {
    setDropOpen1((prev) => !prev);
  };

  const handleServiceDropDown2 = () => {
    setDropOpen2((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      router.push("/");
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = (targetPath) => {
    if (targetPath.startsWith("#")) {
      const element = document.querySelector(targetPath);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(targetPath);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return null; // Or a loading spinner if preferred
  }
  const handleItemClick = () => {
    setDropOpen(false); // Close the dropdown
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" onClick={handleLinkClick}>
            <Image className="prfec-logo" src={prfec} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-contents">
          <div className="flex gap-2">
            <div
              className="navbar-contents-category"
              onClick={handleServiceDropDown}
            >
              Services
            </div>
            <div className="mt-1">
              {" "}
              {dropOpen ? (
                <IoIosArrowUp onClick={handleServiceDropDown} />
              ) : (
                <IoIosArrowDown onClick={handleServiceDropDown} />
              )}
            </div>
          </div>
          {dropOpen && (
            <div className="navbar-service-dropdown" ref={dropdownRef}>
              <Link href="/seo" onClick={handleItemClick}>
                SEO
              </Link>
              <Link href="/content" onClick={handleItemClick}>
                Content
              </Link>
              <Link href="/email" onClick={handleItemClick}>
                Email
              </Link>
              <Link href="/sma" onClick={handleItemClick}>
                Social Media Advertising
              </Link>
              <Link href="/payperclick" onClick={handleItemClick}>
                Pay Per Click
              </Link>
              <Link href="/analytics" onClick={handleItemClick}>
                Analytics
              </Link>
            </div>
          )}

          <div className="flex gap-2">
            <div className="navbar-contents-category">Resources</div>
            <div className="mt-1">
              {" "}
              {dropOpen1 ? (
                <IoIosArrowUp onClick={handleServiceDropDown1} />
              ) : (
                <IoIosArrowDown onClick={handleServiceDropDown1} />
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="navbar-contents-category">Contact us</div>
            <div className="mt-1">
              {" "}
              {dropOpen2 ? (
                <IoIosArrowUp onClick={handleServiceDropDown2} />
              ) : (
                <IoIosArrowDown onClick={handleServiceDropDown2} />
              )}
            </div>
          </div>
          <Link
            href="https://prfec.ai/login"
            className="navbar-login"
            style={{ marginLeft: "10px" }}
          >
            Get Started
          </Link>
        </div>

        <div className="navbar-menu-icons">
          {!menuOpen ? (
            <Image
              src={Hamburger}
              alt="Menu"
              onClick={() => setMenuOpen(true)}
            />
          ) : (
            <Image src={Close} alt="Close" onClick={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
