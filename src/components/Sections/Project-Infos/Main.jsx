import TopSection from '@/components/Global/TopSection'
import React from 'react'
import Form from './Form'

export default function Main() {
  return (
    <section className={'py-6 bg-blue-100 dark:bg-gunmetal'}>
        <div className="container">
        <TopSection
          subtitle="Project Information"
          title="Tailored Solutions, Proven Results, and Exceptional Service"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <Form/>
        </div>
    </section>
  )
}
