import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import mainAnimation from "../../../assets/animations/contact-home.json";
import { motion } from "framer-motion";

export default function ContactBanner() {
  const mainAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: mainAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-start p-6 bg-turquoise/30 dark:bg-[#21ebd6]/30 backdrop-blur-md border border-caribbean-current dark:border-turquoise rounded-xl">
          <div className="w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={"title"}
            >
              Ready to Take Your Business To The Next Level
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={"parag mt-2"}
            >
              Effective SEO strategies not only elevate a website's visibility
              but also drive targeted traffic, enhance user experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={"my-6"}
            >
              <Link className="main-btn">Contact Us</Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <div className={"w-full max-w-[350px] mx-auto"}>
              <Lottie options={mainAnimationOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
