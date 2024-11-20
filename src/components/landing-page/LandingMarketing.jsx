import React from 'react'
import Image from 'next/image';
import arrow from '@public/assets/Images/landing/arrow-white.svg'

const LandingMarketing = () => {
  return (
    <div className='landing-marketing'>
        <div className='landing-marketing-container'>
            <div className='landing-marketing-left'>
                <p>Learn the essential marketing elements and find resources that are useful.</p>
                <div className='link'>
                    <p>Check Resources</p>
                    <Image src={arrow} alt='icon'/>
                </div>
            </div>

            <div className='landing-marketing-right'>
                <p>Get the latest trends and strategies in performance marketing industry. </p>
                <div className='input'>
                    <input type="text" />
                    <button>submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingMarketing