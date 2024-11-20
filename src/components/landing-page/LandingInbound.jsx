'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import { LandingInboundData } from '@data/landing-page/LandingPageData';
import arrow from '@public/assets/Images/landing/arrow.png'
import PopupForm from './PopupForm';

export const LandingInbound = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="landing-inbound">
      <div className="landing-inbound-container">
        <div className="landing-inbound-top">
          <h2>Everything Inbound</h2>
          <p>Enhance your marketing performance with the unlimited power of AI.</p>
          <button onClick={openPopup}>Get Started</button>
        </div>

        <div className="landing-inbound-bottom">
          {LandingInboundData.map((item, index) => (
            <div className="landing-inbound-bottom-box" key={index}>
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
                <p onClick={openPopup} style={{cursor:"pointer"}}>Learn more</p>
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


