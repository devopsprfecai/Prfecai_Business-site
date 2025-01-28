import EmailLastSession from '@components/Email/EmailLastSection'
import SmaFAQ from '@components/SMA/SmaFAQ'
import SmaHero from '@components/SMA/SmaHero'
import SmaResult from '@components/SMA/SmaResult'
import SmaSecond from '@components/SMA/SmaSecond'
import Smatraffic from '@components/SMA/Smatraffic'

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