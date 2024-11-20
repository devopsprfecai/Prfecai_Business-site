import React from 'react'
import { LandingReviewData } from '@data/landing-page/LandingPageData'
const LandingReview = () => {
  return (
    <div className='landing-review'>
        <div className='landing-review-container'>
            <h2>Enhance your marketing performance with the unlimited power of AI.</h2>
            <div className='landing-review-contents'>
                {LandingReviewData.map((item,index)=>(
                    <div className='landing-review-box' key={index}>
                        <p>{item.review}</p>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LandingReview