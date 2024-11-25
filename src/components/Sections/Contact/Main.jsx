import React from "react";
import mainImg from "@/assets/images/character/Hero-OurServices.webp";
import FormCard from "./FormCard";
import { motion } from "framer-motion";

export default function main() {
  return (
    <div className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={"sub-title w-fit"}
            >
              Contact Us
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={"title mt-2"}
            >
              Let’s connect, say Hi to me.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={"parag mt-3"}
            >
              Craft a unique and compelling story that unfolds as users navigate
              through the contact form. Each step can reveal a new part of the
              story.
            </motion.p>
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              src={mainImg}
              alt=""
              className={"w-full max-w-96 mx-auto mt-4"}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <FormCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
