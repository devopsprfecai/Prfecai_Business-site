import EmailLastSession from '@components/seo/EmailLastSection'
import SmaFAQ from '@components/seo/SmaFAQ'
import SmaHero from '@components/seo/SmaHero'
import SmaResult from '@components/seo/SmaResult'
import SmaSecond from '@components/seo/SmaSecond'
import Smatraffic from '@components/seo/Smatraffic'

import React from 'react'

function page() {
  return (
 <>
 <SmaHero/>
 <SmaSecond/>
<Smatraffic/>
<SmaResult/>
<SmaFAQ/>
<EmailLastSession/>
 </>
  )
}

export default page