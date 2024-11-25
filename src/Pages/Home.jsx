import ContactBanner from '@/components/Sections/Home/ContactBanner'
import Hero from '@/components/Sections/Home/Hero'
import OurServices from '@/components/Sections/Home/OurServices'
import WorkProcess from '@/components/Sections/Home/WorkProcess'
import Pricing from '@/components/Sections/services/Pricing'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <WorkProcess/>
      <Pricing/>
      <ContactBanner/>
    </div>
  )
}
