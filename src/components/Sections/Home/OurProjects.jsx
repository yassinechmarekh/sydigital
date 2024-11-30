import TopSection from "@/components/Global/TopSection";
import { projects } from "@/data/Projects";
import React from "react";
import Card from "../Projects/Card";

export default function OurProjects() {
    const ourprojects = projects.filter((item) => item.id === 1 || item.id === 3);
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Projects"
          title="Tailored Solutions, Proven Results, and Exceptional Service"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <div className={'grid grid-cols-2 gap-8 mt-8'}>
            {ourprojects.map((project) => (
                <Card key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
