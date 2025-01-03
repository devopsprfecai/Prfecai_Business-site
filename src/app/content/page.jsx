import React from 'react'
import ContentHero from '@components/seo/ContentHero'
import ContentCreate from '@components/seo/ContentCreate'
import ContentSwipper from '@components/seo/ContentSwipper'
import SeoResult from '@components/seo/SeoResult'
import ContentFAQ from '@components/seo/ContentFAQ'
import ContentLastSession from '@components/seo/ContentLastSession'
const pages = () => {
  return (
    <>
    <ContentHero/>
    <ContentCreate/>
    <ContentSwipper/>
    <SeoResult/>
    <ContentFAQ/>
    <ContentLastSession/>
    </>
  )
}

export default pages