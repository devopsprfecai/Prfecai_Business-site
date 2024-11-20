"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "@public/assets/Images/landing/arrow-white.svg";
import firebase from "firebase/app";
import "firebase/database"; // Import Firebase Realtime Database
import Link from "next/link";

const LandingMarketing = () => {
  const [formData, setFormData] = useState({
    email: "", // Store email input value
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store form data in Firebase Realtime Database
      const response = await fetch(
        'https://prfecai-businessformdata-default-rtdb.firebaseio.com/marketing-forms.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Store the email input data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store form data in Firebase");
      }

      console.log("Form Submitted:", formData);
    } catch (error) {
      console.error("Error storing form data:", error);
    }
  };

  return (
    <div className="landing-marketing">
      <div className="landing-marketing-container">
        <div className="landing-marketing-left">
          <p>
            Learn the essential marketing elements and find resources that are
            useful.
          </p>
          <div className="link">
            <Link href="https://blog.prfec.ai/" >Check Resources</Link>
            <Image src={arrow} alt="icon" />
          </div>
        </div>

        <div className="landing-marketing-right">
          <p>
            Get the latest trends and strategies in performance marketing
            industry.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingMarketing;
