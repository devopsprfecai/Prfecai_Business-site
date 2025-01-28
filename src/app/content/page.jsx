import React from 'react'
import ContentHero from '@components/content/ContentHero'
import ContentCreate from '@components/content/ContentCreate'
import ContentSwipper from '@components/content/ContentSwipper'
import SeoResult from '@components/seo/SeoResult'
import ContentFAQ from '@components/content/ContentFAQ'
import ContentLastSession from '@components/content/ContentLastSession'
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