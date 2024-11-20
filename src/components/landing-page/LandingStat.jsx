'use client'
import React from 'react'
import Image from 'next/image'
import Ai from '@public/assets/Images/landing/ai-experience.svg'

const LandingStat = () => {
  return (
    <div className='landing-stat'>
        <div className='landing-stat-container'>
            <div className='landing-stat-left'>
                <div className='landing-stat-left-top'>
                    <h2>88%</h2>
                    <p>of marketers believe their organisation must increase its use of automation and AI to meet customer expectations and stay competitive.</p>
                </div>
                <div className='landing-stat-left-bottom'>
                    <div className='contents'>
                        <h3>20+</h3>
                        <p>Integrations</p>
                    </div>
                    <hr />
                    <div className='contents'>
                        <h3>100+</h3>
                        <p>Features</p>
                    </div>
                    <hr />
                    <div className='contents'>
                        <h3>5+</h3>
                        <p>Countries</p>
                    </div>
                    </div>
            </div>
            <div className='landing-stat-right'>
                <h3>Get AI Connected Experiences</h3>
                <div className='landing-stat-right-img'>
                    <Image src={Ai} alt='ai icons'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingStat