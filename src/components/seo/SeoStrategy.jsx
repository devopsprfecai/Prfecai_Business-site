import React from 'react'
import Image from 'next/image'
import ecommerce from '@public/assets/Images/seo/ecommerce.svg'
import imageseo from '@public/assets/Images/seo/imageseo.svg'
import technical from '@public/assets/Images/seo/technical.svg'
import videoseo from '@public/assets/Images/seo/videoseo.svg'
import voiceseo from '@public/assets/Images/seo/voiceseo.svg'
import mobile from '@public/assets/Images/seo/mobile.svg'

function SeoStrategy() {
  return (
    <div className='flex justify-center item-center py-[90px] xl:py-[110px]'>
        <div className='flex flex-col gap-[2.5rem] xl:w-[70%] lg:w-[85%] md:w-[85%] w-[90%]'>
        <div className='flex flex-col gap-[1.2rem]'>
            <h1 className="text-black  md:text-center font-semibold font-firansans lg:text-[50px] lg:text-center text-center sm:w-[80%] lg:w-[100%] md:w-[100%] md:text-[40px] text-[32px]">
                Generate Organic Traffic through Seamless SEO Strategy</h1>
               <p className="text-center text-[18px] leading-[170%] md:text-[18px] sm:w-[78%] md:w-[100%] lg:text-[20px] lg:w-[100%]">The Seamless 
                SEO strategy help you drive organic traffic and grow your online presence effortlessly.</p>
        </div>
        
        <div className='lg:flex lg:flex-row flex justify-center lg:flex-wrap gap-[1.5rem] md:flex md:flex-row md:flex-wrap md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[2.5rem] sm:flex sm:flex-col flex flex-col '>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                  <Image className='w-[40px]' alt='' src={ecommerce} />
                  <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Ecommerce SEO</h1>
                <div className='flex flex-col gap-2'> <p className='text-[17px]'>Ecommerce SEO helps you optimise your online store so it shows up higher in search results, making it easier for more people to find
                  and visit your site.
                  </p></div>
                </div>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                <Image className='w-[40px]' alt='' src={mobile} />
                <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Mobile SEO</h1>
               <div className='flex flex-col gap-2'> <p className='text-[17px]' >Mobile SEO is the practice of optimising a website to ensure it performs well on mobile devices.it involves a range of techniques to enhance site speed,design,usability and content for mobile users.
                </p></div>
                </div>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                <Image className='w-[40px]' alt='' src={voiceseo} />
                <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Voice SEO</h1>
               <div className='flex flex-col gap-2'> <p className='text-[17px]' >Voice SEO is about tailoring your website content work well with voice searches,voice queries are longer and more conversational,so your SEO strategy needs to match this style.
                </p></div>
                </div>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                <Image className='w-[40px]' alt='' src={technical} />
                <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Technical SEO</h1>
               <div className='flex flex-col gap-2'> <p className='text-[17px]' >Technical SEO involves optimising the infrastructure of your website to improve its 
                visibility and functionality for search engines.This includes factors like site speed, mobile usability,secure connections.
                </p></div>
                </div>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                <Image className='w-[40px]' alt='' src={videoseo} />
                <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Video SEO</h1>
               <div className='flex flex-col gap-2'> <p className='text-[17px]'>This includes optimising video titles,descriptions,tags and other elements to improve search visibility and enhance user engagement.
                </p></div>
                </div>
                <div className='rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border'>
                <Image className='w-[40px]' alt='' src={imageseo} />
                <h1 className='lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold'>Image SEO</h1>
               <div className='flex flex-col gap-2'> <p className='text-[17px]'>Image SEO involves optimising images on your website to improve their visibility in search engines,boost site performance and enhance user experience.
                </p></div>
                </div>
                </div>
                </div>
                
    </div>
  )
}

export default SeoStrategy