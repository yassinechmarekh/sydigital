import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import heroAnimation from "../../../assets/animations/hero-home.json";
import bgElement1 from "../../../assets/animations/hero-element-1.json";
import bgElement2 from "../../../assets/animations/hero-element-2.json";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const mainImgOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bgElement1Options = {
    loop: true,
    autoplay: true,
    animationData: bgElement1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bgElement2Options = {
    loop: true,
    autoplay: true,
    animationData: bgElement2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      className={"py-10 lg:py-4 bg-blue-100 dark:bg-gunmetal overflow-hidden"}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={
                "absolute -top-10 lg:-top-28 right-0 sm:-right-10 w-20 lg:w-28"
              }
            >
              <Lottie options={bgElement1Options} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={
                "py-1 px-3 bg-turquoise/30 dark:bg-[#21ebd6]/30 backdrop-blur-md border border-caribbean-current dark:border-turquoise text-caribbean-current dark:text-turquoise flex items-center gap-2 w-fit rounded-xl"
              }
            >
              <FaCode size={20} />
              <h3 className={"font-semibold font-subtitle"}>
                Top #1 Website builders
              </h3>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={
                "my-4 text-4xl xs:text-6xl text-gunmetal dark:text-white font-title font-bold leading-tight"
              }
            >
              Elevate Your Brand with{" "}
              <span className={"text-caribbean-current dark:text-turquoise"}>
                SyDigital
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={"text-slate-600 dark:text-slate-300"}
            >
              At SyDigital, we craft custom websites that are not only visually
              appealing but also optimized to drive results. Our team designs
              websites tailored to your brand’s needs, helping you thrive in the
              competitive online world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className={"mt-6"}
            >
              <Link className={"flex items-center gap-2 main-btn"}>
                <span>Get Started</span> <FaArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"absolute top-full left-1/3 w-28 hidden xl:block"}
            >
              <Lottie options={bgElement2Options} />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className={"w-full max-w-[550px] mx-auto"}
            >
              <Lottie options={mainImgOptions} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
