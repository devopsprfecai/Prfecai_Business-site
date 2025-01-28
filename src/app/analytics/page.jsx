import AnalyticsFAQ from '@components/analytics/AnalyticsFAQ'
import AnalyticsHero from '@components/analytics/AnalyticsHero'
import AnalyticsSecond from '@components/analytics/AnalyticsSecond'
import AnalyticsStrategy from '@components/analytics/AnalyticsStrategy'
import EmailLastSection from '@components/Email/EmailLastSection'
import SeoResult from '@components/seo/SeoResult'
import React from 'react'

function page() {
  return (
   <>
   <AnalyticsHero/>
   <AnalyticsSecond/>
   <AnalyticsStrategy/>
   <SeoResult/>
   <AnalyticsFAQ/>
   <EmailLastSection/>
   </>
  )
}

export default page