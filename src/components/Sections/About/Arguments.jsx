import TopSection from "@/components/Global/TopSection";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import argumentImg1 from "@/assets/images/arguments/1.svg";
import argumentImg2 from "@/assets/images/arguments/2.svg";
import argumentImg3 from "@/assets/images/arguments/3.svg";
import { motion } from "framer-motion";

export default function Arguments() {
  const ourarguments = [
    {
      id: 1,
      image: argumentImg1,
      subtitle: "Argument 1",
      title: "Empowering Businesses Through Modern Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo vitae quia minus aspernatur non culpa officiis commodi et. Corrupti dicta odit ab quibusdam sint voluptas adipisci fugiat architecto soluta.",
    },
    {
      id: 2,
      image: argumentImg2,
      subtitle: "Argument 2",
      title: "Websites Built to Convert and Impress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo vitae quia minus aspernatur non culpa officiis commodi et. Corrupti dicta odit ab quibusdam sint voluptas adipisci fugiat architecto soluta.",
    },
    {
      id: 3,
      image: argumentImg3,
      subtitle: "Argument 3",
      title: "Your Trusted Partner in Digital Growth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo vitae quia minus aspernatur non culpa officiis commodi et. Corrupti dicta odit ab quibusdam sint voluptas adipisci fugiat architecto soluta.",
    },
  ];
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Why SyDigital ?"
          title="Tailored Solutions, Proven Results, and Exceptional Service"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <div className="mt-8 flex flex-col gap-y-8 lg:gap-y-0">
          {ourarguments.map((item) => (
            <div
              key={item.id}
              className={`flex ${
                item.id % 2 === 0
                  ? "flex-col-reverse lg:flex-row-reverse"
                  : "flex-col-reverse lg:flex-row"
              } items-center`}
            >
              <div className="w-full md:w-2/3 lg:w-1/2">
                <motion.h3
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={"text-caribbean-current dark:text-turquoise text-lg font-semibold capitalize"}
                >
                  {item.subtitle}
                </motion.h3>
                <motion.h1
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={"text-3xl text-gunmetal dark:text-white font-semibold"}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={"parag mt-2"}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className={"mt-6"}
                >
                  <Link
                    className={"flex items-center gap-2 main-btn text-base"}
                  >
                    <span>Get Started</span> <MdArrowOutward size={18} />
                  </Link>
                </motion.div>
              </div>
              <div className="w-full md:w-2/3 lg:w-1/2">
                <motion.img
                  initial={{ opacity: 0, x: item.id % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  src={item.image}
                  alt=""
                  className={"w-full max-w-[550px] mx-auto"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Empowering Businesses Through Modern Design
// Websites Built to Convert and Impress
// Your Trusted Partner in Digital Growth
