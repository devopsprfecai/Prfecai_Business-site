'use client'
import React,{useState} from 'react'
import PopupForm from './PopupForm';


const LandingBrand = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className='Landing-brand'>
        <div className='landing-brand-container'>
            <h2>We help you tell your Brand Story.</h2>
            <p>Enhance your marketing performance with the unlimited power of AI.</p>
            <button onClick={openPopup}>Free Consultation</button>
            <PopupForm isOpen={isPopupOpen} onClose={closePopup} />

        </div>
    </div>
  )
}

export default LandingBrand