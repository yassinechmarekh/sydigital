import React, { useState } from 'react'


import Bannerservices from '@/components/Global/bannerservices'
import Servicesmain from '@/components/Global/servicesmain'
import Serviceshero from '@/components/Global/serviceshero'



export default function ServicesPage() {
 

  return (
    <div className="min-h-screen bg-blue-100 text-gunmetal dark:bg-gunmetal dark:text-white ">
   <Serviceshero/>
<Servicesmain/>
      

   <Bannerservices/>

    </div>
  )
}