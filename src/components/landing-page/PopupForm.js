// "use client";

// import React, { useState } from "react";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";
// import './PopupForm.css'

// const PopupForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     phone: "",
//     email: "",
//     country: null,
//     city: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   const states =
//     formData.country &&
//     State.getStatesOfCountry(formData.country.value).map((state) => ({
//       value: state.isoCode,
//       label: state.name,
//     }));

//   const cities =
//     formData.country &&
//     formData.city &&
//     City.getCitiesOfState(formData.country.value, formData.city.value).map(
//       (city) => ({
//         value: city.name,
//         label: city.name,
//       })
//     );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     onClose(); // Close the popup after submitting
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup" >
//       <div className="popup-container">
//         <h3>Get Started</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="input-container">
//             <input type="text" name="fname" placeholder="Name" value={formData.fname} required/>
//           </div>
//           <div className="input-container">
//             <input type="tel" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleInputChange}  required/>
//           </div>
//           <div className="input-container">
//             <input type="email" name="email" value={formData.email} placeholder="Email id" onChange={handleInputChange} required/>
//           </div>
//           <div >
//             <Select options={countries} value={formData.country} placeholder="Country"  onChange={(value) => handleSelectChange("country", value)}/>
//           </div>
//           <div >
//             <Select options={states} value={formData.city} placeholder="City" onChange={(value) => handleSelectChange("city", value)} isDisabled={!states}/>
//           </div>
//           <span type="submit" className="button">Submit</span>
//           <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
//             Close
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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