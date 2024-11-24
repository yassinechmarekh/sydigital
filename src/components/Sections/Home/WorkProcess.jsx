import TopSection from "@/components/Global/TopSection";
import React from "react";
import processImg1 from "@/assets/images/character/hero-process-1.webp";
import processImg2 from "@/assets/images/character/hero-process-2.webp";
import processImg3 from "@/assets/images/character/hero-process-3.webp";
import { motion } from "framer-motion";

export default function WorkProcess() {
  const process = [
    {
      id: 1,
      title: "complete our appointment form",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates, temporibus deserunt exercitationem qui consequuntur.",
      image: processImg1,
    },
    {
      id: 2,
      title: "complete our appointment form",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates, temporibus deserunt exercitationem qui consequuntur.",
      image: processImg2,
    },
    {
      id: 3,
      title: "complete our appointment form",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates, temporibus deserunt exercitationem qui consequuntur.",
      image: processImg3,
    },
  ];
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Work Process"
          title="Tailored Solutions, Proven Results, and Exceptional Service"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          {process.map((item) => (
            <div
              className={`flex ${
                item.id % 2 === 0 ? "flex-col lg:flex-col-reverse" : "flex-col"
              } items-center gap-y-4`}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className={
                  "w-12 h-12 flex items-center justify-center bg-turquoise text-gunmetal text-2xl font-bold rounded-full"
                }
              >
                {item.id}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={"p-3 bg-turquoise rounded-xl text-center"}
              >
                <h3
                  className={
                    "text-xl text-gunmetal font-semibold capitalize mb-1"
                  }
                >
                  {item.title}
                </h3>
                <p className={"text-slate-600 text-sm"}>{item.description}</p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                src={item.image}
                alt=""
                className={"w-full max-w-60 mx-auto"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
