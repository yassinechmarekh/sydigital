import React, { useEffect, useState } from 'react';
import Projetcard from './projetcard';
const projects = [
  {
    id: 1,
    title: "Charlotte's Ultimate Cleaning",
    description: "Charlotte's Ultimate Cleaning's website offers a clean, user-friendly design with service details, pricing, testimonials, and contact informations .",
    image: "./charlottethum.png",
  },
  {
    id: 2,
    title: "Diamond Bright Cleaning",
    description: "Diamond Bright Cleaning's website offers easy booking, service details, and a dashboard for managing messages and confirmations efficiently.",
    image: "./charlottethum.png",  
  },
  {
    id: 3,
    title: "Best Portland Cleaning",
    description: "Best Portland Cleaning's website combines a modern design with functionality, featuring a mini dashboard for managing messages, bookings, and confirmations efficiently.",
    image: "./charlottethum.png",
  },
  {
    id: 4,
    title: "Corporate Intranet",
    description: "A secure, feature-rich intranet solution for internal communication and document management.",
    image: "./charlottethum.png",

  }
]
const Projects = () => {
  const[contentcards,setcardscnt]=useState()
  useEffect(()=>{
    const cardss=projects.map(data=>{
      return  <Projetcard title={data.title} image={data.image} id={data.id} key={data.id} para={data.description}/>
    })
    setcardscnt(cardss)
  },[])
  return (
    <section className="py-16 px-4 bg-blue-100 dark:bg-gunmetal">
  
      <div className=" mx-auto">
        <h2 className="text-4xl font-title font-bold text-center mb-12 text-gunmetal dark:text-white">Our Showcase Projects</h2>
        <div className="orjctcardcont">
      {contentcards}
        </div>
      </div>
    </section>
  );
}

export default Projects;
