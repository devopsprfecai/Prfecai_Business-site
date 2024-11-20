'use client'
import React from 'react'
import '@styles/footer/Footer.css'
import Image from 'next/image'
import logo from '@public/assets/Images/navbar/Prfec Logo White.png'
import facebookWhite from '@public/assets/Images/footer/facebook-white.png';
import xWhite from '@public/assets/Images/footer/x-white.png';
import Instagram from '@public/assets/Images/footer/instagram-white.png'
import Linkedin from '@public/assets/Images/footer/linkedin-white.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='footer-left'>
            <div className='footer-contents'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Refund Policy</p>
            </div>
            <div className='footer-contents'>
            <Image src={logo} alt='prfec logo'/>
          </div>
          </div>
          <div className='footer-right'>
              <div className='footer-socials'>
                  <Image src={facebookWhite} alt='facebook'/>
                  <Image src={xWhite} alt='X'/>
                  <Image src={Instagram} alt='Instagram'/>
                  <Image src={Linkedin} alt='Linkedin'/>
              </div>
              <p>@copyright prfec.ai, 2024</p>

          </div>
        </div>
    </div>
  )
}
