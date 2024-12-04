import TopSection from "@/components/Global/TopSection";
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import yassineImg from "@/assets/images/team/Yassine.jpg";
import sfenImg from "@/assets/images/team/Sfen.jpeg";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Team"
          title="Experts Dedicated to Your Success"
          parag="Our talented team combines design, development, and strategy to create websites that drive results. We focus on delivering high-quality digital solutions that help your business thrive."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={"max-w-80 mx-auto sm:mx-0 sm:ml-auto"}
          >
            <div className={"h-[400px] w-full rounded-3xl overflow-hidden"}>
              <img
                src={yassineImg}
                alt=""
                className={
                  "w-full object-cover object-center filter hover:grayscale transition-all duration-300 ease-in-out"
                }
              />
            </div>
            <div className={"py-2 flex justify-between text-slate-600 dark:text-slate-300"}>
              <div>
                <h2 className={"text-gunmetal dark:text-white text-xl font-semibold capitalize"}>
                  Yassine <span className={"uppercase"}>Chmarekh</span>
                </h2>
                <h4>CEO Founder, Web Devloper</h4>
              </div>
              <div className={"flex gap-3"}>
                <Link
                  className={
                    "hover:text-caribbean-current dark:hover:text-turquoise hover:scale-90 transition-all duration-300 ease-in-out"
                  }
                >
                  <TbWorldWww size={24} />
                </Link>
                <Link
                  className={
                    "hover:text-caribbean-current dark:hover:text-turquoise hover:scale-90 transition-all duration-300 ease-in-out"
                  }
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={"max-w-80 mx-auto sm:mx-0 sm:mr-auto"}
          >
            <div className={"h-[400px] w-full rounded-3xl overflow-hidden"}>
              <img
                src={sfenImg}
                alt=""
                className={
                  "w-full object-cover object-center filter hover:grayscale transition-all duration-300 ease-in-out"
                }
              />
            </div>
            <div className={"py-2 flex justify-between text-slate-600 dark:text-slate-300"}>
              <div>
                <h2 className={"text-gunmetal dark:text-white text-xl font-semibold capitalize"}>
                  Soufiane <span className={"uppercase"}>Taki</span>
                </h2>
                <h4>CEO Founder, Web Devloper</h4>
              </div>
              <div className={"flex gap-3"}>
                <Link
                  className={
                    "hover:text-caribbean-current dark:hover:text-turquoise hover:scale-90 transition-all duration-300 ease-in-out"
                  }
                >
                  <TbWorldWww size={24} />
                </Link>
                <Link
                  className={
                    "hover:text-caribbean-current dark:hover:text-turquoise hover:scale-90 transition-all duration-300 ease-in-out"
                  }
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
