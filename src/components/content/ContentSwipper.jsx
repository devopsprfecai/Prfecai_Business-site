import React from 'react'
import DesktopContentSwipper from './DesktopContentSwipper'
import MobileContentSwiper from './MobileContentSwiper'
import TabContentSwipper from './TabContentSwipper'

function ContentSwipper() {
  return (
   <>
   <DesktopContentSwipper/>
   <TabContentSwipper/>
   <MobileContentSwiper/>
   </>
  )
}

export default ContentSwipper