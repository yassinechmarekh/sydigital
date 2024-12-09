import TopSection from "@/components/Global/TopSection";
import { projects } from "@/data/Projects";
import React from "react";
import Card from "../Projects/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OurProjects() {
  const ourprojects = projects.filter((item) => item.id === 1 || item.id === 3);
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Projects"
          title="Transforming Ideas into Digital Reality"
          parag="We take pride in delivering exceptional projects that bring our clients' visions to life. From custom websites to advanced web applications, our work reflects our commitment to quality, innovation, and success."
        />
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"}>
          {ourprojects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <Link to='/projects' >
          <motion.div initial={{ opacity: 0, y: 5 }} whileTap={{ scale: 0.95 }} whileInView={{ opacity: 1, y:0, transition: {duration: 0.3} }} className="main-btn text-base capitalize mt-8 mx-auto">
            More projects
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
