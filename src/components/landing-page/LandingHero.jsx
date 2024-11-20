'use client'
import React,{useState} from 'react'
import '@styles/landing-page/LandingPage.css'
import PopupForm from './PopupForm';

const LandingHero = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <div className='landing-hero-heading'>
                <h1>Automate Your Inbound Lead Generation</h1>
            </div>
            <div className='landing-hero-para'>
                <p>Enhance your marketing performance with the unlimited power of AI.</p>
            </div>
            <div className='landing-hero-buttons'>
                <button className='free-consultation-btn' onClick={openPopup}>Free Consultation</button>
                <button className='get-started-btn' onClick={openPopup}>Get Started</button>
                <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
            </div>
        </div>
    </div>
  )
}

export default LandingHero

