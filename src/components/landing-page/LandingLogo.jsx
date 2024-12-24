'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@public/assets/Images/landing/logo/b-amazon.png'
import Clickup from '@public/assets/Images/landing/logo/b-clickup.png'
import Grphy from '@public/assets/Images/landing/logo/b-grphy.png'
import Hostinger from '@public/assets/Images/landing/logo/b-hostinger.png'
import Semrush from '@public/assets/Images/landing/logo/b-semrush.png'
import Shopify from '@public/assets/Images/landing/logo/b-shopify.png'
import Wati from '@public/assets/Images/landing/logo/b-wati.png'
const LandingLogo = () => {
  return (
    <div className='landing-logo'>
        <div className='landing-logo-container'>
            <p>Enhancing the marketing performance of the companies that are built to change the world</p>
            <div className='logo'>
            <div className='landing-partners-logo'>
                    {/* First set of logos */}
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
                <div className='landing-partners-logo'>
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
                <div className='landing-partners-logo'>
                    <Image src={Logo}  height={24} alt="logo" />
                    <Image src={Clickup}  height={24} alt="logo" />
                    <Image src={Grphy}  height={24} alt="logo" />
                    <Image src={Hostinger}  height={24} alt="logo" />
                    <Image src={Semrush}  height={24} alt="logo" />
                    <Image src={Shopify}  height={24} alt="logo" />
                    <Image src={Wati}  height={24} alt="logo" />
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default LandingLogo