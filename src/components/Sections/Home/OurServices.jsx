import TopSection from "@/components/Global/TopSection";
import React from "react";
import { motion } from "framer-motion";

import landingPageIcon from "../../../assets/icons/landing-page.svg";
import appIcon from "../../../assets/icons/app.svg";
import ecommerceIcon from "../../../assets/icons/ecomerce.svg";
import mainImg from "../../../assets/images/character/Hero-OurServices.webp";

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: landingPageIcon,
      title: "Landing Page",
      description:
        "We create high-converting landing pages that grab attention, drive results, and increase engagement. Clear, compelling, and optimized for performance.",
    },
    {
      id: 2,
      icon: appIcon,
      title: "Web Application",
      description:
        "SyDigital builds secure, scalable web applications tailored to your business needs. Reliable solutions that improve user experience and efficiency.",
    },
    {
      id: 3,
      icon: ecommerceIcon,
      title: "Ecommerce Website",
      description:
        "We design eCommerce websites that are easy to navigate, mobile-friendly, and built to convert visitors into customers, growing your online business.",
    },
  ];
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Our Mission"
          title="Empowering Brands with Custom Websites"
          parag="Our mission is to build websites that enhance your brand and drive results. We deliver innovative solutions to help businesses grow in the digital world."
        />
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={mainImg} alt="" className={"w-full max-w-96 mx-auto"} />
          </motion.div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-y-4">
              {services.map((item) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + item.id * 0.1 }}
                  key={item.id}
                  className={`py-3 px-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#237379]/30 ${
                    item.id % 2 === 0
                      ? "hover:bg-turquoise/30 bg-transparent"
                      : "bg-turquoise/30 hover:bg-transparent dark:bg-[#21ebd6]/30"
                  } backdrop-blur-md border border-gunmetal dark:border-turquoise rounded-xl transition-colors duration-300 ease-in-out`}
                >
                  <div className={"p-2 bg-turquoise rounded-2xl"}>
                    <img
                      src={item.icon}
                      alt="landing page icon"
                      className={"w-16 sm:w-24"}
                    />
                  </div>
                  <div>
                    <h3
                      className={
                        "text-xl capitalize text-gunmetal dark:text-turquoise font-semibold"
                      }
                    >
                      {item.title}
                    </h3>
                    <p className={"text-slate-600 dark:text-slate-300 text-sm"}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
