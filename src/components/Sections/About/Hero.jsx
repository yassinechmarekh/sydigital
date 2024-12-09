import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import mainImg from "@/assets/images/character/about-hero.webp";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    {
      number: 500,
      name: "Campaigns",
      suffix: "+",
    },
    {
      number: 98,
      name: "Client Satisfaction",
      suffix: "%",
    },
    {
      number: 25,
      name: "Country Reach",
      suffix: "+",
    },
    {
      number: 15,
      name: "Certified Experts",
      suffix: "+",
    },
  ];
  return (
    <section className={"py-6 bg-bl dark:bg-gunmetal"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-y-8">
          <div className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row items-center gap-y-4">
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col gap-y-4">
                {stats.map((item, index) => (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
                      key={index}
                      className={"flex flex-col items-center gap-y-1"}
                    >
                      <h4
                        className={
                          "text-4xl font-semibold text-caribbean-current dark:text-turquoise"
                        }
                      >
                        <CountUp
                          end={item.number}
                          duration={5}
                          suffix={item.suffix}
                        />
                      </h4>
                      <span
                        className={
                          "text-xl text-gunmetal dark:text-white capitalize"
                        }
                      >
                        {item.name}
                      </span>
                    </motion.div>
                    {index !== stats.length - 1 && (
                      <hr className={"border-slate-400"} />
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                src={mainImg}
                alt=""
                className={"w-full max-w-80 mx-auto"}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={"sub-title w-fit"}
            >
              About Us
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={"title mt-2"}
            >
              Meet the Experts Behind Your Online Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={"parag mt-4"}
            >
              We’re a team of passionate web developers, designers, and digital
              strategists dedicated to creating custom websites that drive
              growth. With years of expertise, we help businesses stand out in a
              competitive digital world, delivering results that matter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className={"mt-6"}
            >
              <Link to='/appointment' className={"flex items-center gap-2 main-btn text-base"}>
                <span>Get Started</span> <FaArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
