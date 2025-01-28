import ContentStrategy from '@components/Email/ContentStrategy'
import EmailFAQ from '@components/Email/EmailFAQ'
import EmailGrow from '@components/Email/EmailGrow'
import EmailHeroPage from '@components/Email/EmailHeroPage'
import EmailLastSection from '@components/Email/EmailLastSection'
import EmailLastSession from '@components/Email/EmailLastSection'
import SeoResult from '@components/seo/SeoResult'
import React from 'react'

function page() {
  return (
    <>
    <EmailHeroPage/>
    <EmailGrow/>
    <ContentStrategy/>
    <SeoResult/>
    <EmailFAQ/>
    <EmailLastSection/>
    </>
  )
}

export default page