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
        "Fill out our easy appointment form to get started. This helps us understand your needs and goals, ensuring we’re aligned from the beginning.",
      image: processImg1,
    },
    {
      id: 2,
      title: "Our Team Contacts You",
      description:
        "Once we’ve reviewed your form, our team will reach out to discuss your project in detail. We’ll answer any questions and provide expert guidance.",
      image: processImg2,
    },
    {
      id: 3,
      title: "Get Your Project and Relax",
      description:
        "After finalizing the details, we’ll deliver your project on time, and you can relax knowing your digital presence is in expert hands.",
      image: processImg3,
    },
  ];
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Work Process"
          title="Efficient, Collaborative, and Tailored to You"
          parag="We follow a streamlined process to ensure your website is delivered on time, on budget, and to your satisfaction. From the first consultation to the final launch, we’re with you every step of the way."
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
