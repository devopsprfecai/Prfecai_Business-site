'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import { LandingAudienceData } from '@data/landing-page/LandingPageData';
import arrow from '@public/assets/Images/landing/arrow.png'
import PopupForm from './PopupForm';

export const LandingAudience = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="landing-audience">
      <div className="landing-audience-container">
        <div className="landing-audience-top">
          <h2>Reach Target Audience</h2>
          <p>Enhance your marketing performance with the unlimited power of AI.</p>
          <button onClick={openPopup}>Get Started</button>
        </div>

        <div className="landing-audience-bottom">
          {LandingAudienceData.map((item, index) => (
            <div className="landing-audience-bottom-box" key={index}>
              <div className="contents">
                <Image src={item.image} alt={item.title} />

                <h4>{item.title}</h4>

                <ul className='lists'>
                  {item.list.map((subList, subIndex) => (
                    <li key={subIndex}>{subList}</li>
                  ))}
                </ul>
              </div>

              <div className="link">
                <p>Learn more</p>
                <Image src={arrow} alt={`${item.title} Link`} width={20} height={20} />
              </div>
              <PopupForm isOpen={isPopupOpen} onClose={closePopup} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


