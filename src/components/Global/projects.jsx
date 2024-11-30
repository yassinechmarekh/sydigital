import React, { useEffect, useState } from "react";
import Projetcard from "./projetcard";
import TopSection from "./TopSection";
import { projects } from "@/data/Projects";
import Card from "../Sections/Projects/Card";
const Projects = () => {
  return (
    <section className="py-10 px-4 bg-blue-100 dark:bg-gunmetal">
      <div className="container">
        <TopSection
          subtitle="Our Showcase Projects"
          title="See Our Work in Action"
          parag="We take pride in delivering high-quality digital solutions. Below are some of the projects we’ve successfully completed, showcasing our expertise in creating impactful online experiences for our clients."
        />
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
