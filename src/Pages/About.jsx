import TopPage from '@/components/Global/TopPage'
import Arguments from '@/components/Sections/About/Arguments'
import Hero from '@/components/Sections/About/Hero'
import Team from '@/components/Sections/About/Team'
import React from 'react'

export default function About() {
  return (
    <div>
      <TopPage page='about' />
      <Hero/>
      <Arguments/>
      <Team/>
    </div>
  )
}
