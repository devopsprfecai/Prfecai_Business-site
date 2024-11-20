"use client";

import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import "./PopupForm.css";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    email: "",
    country: null,
    city: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const states =
    formData.country &&
    State.getStatesOfCountry(formData.country.value).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));

  const cities =
    formData.country &&
    formData.city &&
    City.getCitiesOfState(formData.country.value, formData.city.value).map(
      (city) => ({
        value: city.name,
        label: city.name,
      })
    );

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Store form data in Firebase Realtime Database
      const response = await fetch(
        'https://prfecai-businessformdata-default-rtdb.firebaseio.com/FreeConsulation.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Store the form data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store form data in Firebase");
      }

      // console.log("Form Submitted:", formData);
      onClose(); // Close the popup after submitting
    } catch (error) {
      console.error("Error storing form data:", error);
    }
    // console.log("Form Submitted:", formData);
    onClose(); // Close the popup after submitting
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "popup") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup-container">
        <div className="close-icon" onClick={onClose}>
          &times;
        </div>
        <h3>Get Started</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="fname"
              placeholder="Name"
              value={formData.fname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email id"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Select
              options={countries}
              value={formData.country}
              placeholder="Country"
              onChange={(value) => handleSelectChange("country", value)}
            />
          </div>
          <div>
            <Select
              options={states}
              value={formData.city}
              placeholder="City"
              onChange={(value) => handleSelectChange("city", value)}
              isDisabled={!states}
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
