import Bannerservices from '@/components/Global/bannerservices'
import Serviceshero from '@/components/Global/serviceshero'
import Servicesmain from '@/components/Global/servicesmain'
import React, { useState } from 'react'





export default function ServicesPage() {
 

  return (
    <div className="min-h-screen bg-blue-100 text-gunmetal dark:bg-gunmetal dark:text-white ">
   <Serviceshero/>
<Servicesmain/>
      

   <Bannerservices/>

    </div>
  )
}