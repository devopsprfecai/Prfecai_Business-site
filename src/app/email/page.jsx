import ContentStrategy from '@components/seo/ContentStrategy'
import EmailFAQ from '@components/seo/EmailFAQ'
import EmailGrow from '@components/seo/EmailGrow'
import EmailHeroPage from '@components/seo/EmailHeroPage'
import EmailLastSession from '@components/seo/EmailLastSection'
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
    <EmailLastSession/>
    </>
  )
}

export default page