import Banda from '@/components/Global/banda'
import Why from '@/components/Global/why'
import ContactBanner from '@/components/Sections/Home/ContactBanner'
import Hero from '@/components/Sections/Home/Hero'
import OurProjects from '@/components/Sections/Home/OurProjects'
import OurServices from '@/components/Sections/Home/OurServices'
import WorkProcess from '@/components/Sections/Home/WorkProcess'
import Pricing from '@/components/Sections/services/Pricing'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Banda/>
      <Why/>
      <OurServices/>
      <OurProjects/>
      <WorkProcess/>
      <Pricing/>
      <ContactBanner/>
    </div>
  )
}
