import EmailLastSection from '@components/Email/EmailLastSection'
import EmailLastSession from '@components/Email/EmailLastSection'
import HeroPage from '@components/PayPerClick/HeroPage'
import PayFAQ from '@components/PayPerClick/PayFAQ'
import PayResult from '@components/PayPerClick/PayResult'
import SecondPage from '@components/PayPerClick/SecondPage'
import Slider from '@components/PayPerClick/Slider'
import React from 'react'

function page() {
  return (
    <>
    <HeroPage/>
    <SecondPage/>
    <Slider/>
    <PayResult/>
    <PayFAQ/>
    <EmailLastSection/>
    
    </>
  )
}

export default page