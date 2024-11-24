import TopSection from "@/components/Global/TopSection";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Pricing() {
  const initialCenter = { opacity: 0 };
  const animationCenter = { opacity: 1 };
  const initialLeft = { opacity: 0, x: -10 };
  const animationLeft = { opacity: 1, x: 0 };
  const initialRight = { opacity: 0, x: 10 };
  const animationRight = { opacity: 1, x: 0 };
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: 150,
      description: "Great for individuals and small projects.",
      benefits: [
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: false,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: false,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: false,
          text: "Up to 5-7 pages design",
        },
      ],
      initial: initialLeft,
      animation: animationLeft,
    },
    {
      id: 2,
      title: "Standard",
      price: 250,
      description: "Great for individuals and small projects.",
      benefits: [
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: false,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: false,
          text: "Up to 5-7 pages design",
        },
      ],
      initial: initialCenter,
      animation: animationCenter,
    },
    {
      id: 3,
      title: "Premium",
      price: 500,
      description: "Great for small projects and startups.",
      benefits: [
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
        {
          ischeck: true,
          text: "Up to 5-7 pages design",
        },
      ],
      initial: initialRight,
      animation: animationRight,
    },
  ];
  return (
    <section className={"py-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <TopSection
          subtitle="Pricing Package"
          title="Premium Web Design Services Without the Premium Price"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10"}>
          {plans.map((item) => (
            <motion.div
              initial={item.initial}
              whileInView={item.animation}
              transition={{ duration: 0.7 }}
              key={item.id}
              className={`px-6 py-8 flex flex-col gap-y-8 ${
                item.id % 2 === 0
                  ? "bg-turquoise dark:bg-turquoise/50 hover:bg-gunmetal"
                  : "bg-gunmetal hover:bg-turquoise dark:hover:bg-turquoise/50"
              } backdrop-blur-2xl border border-turquoise rounded-xl mx-auto lg:mx-0 group transition-colors`}
            >
              <div className="flex flex-col gap-1">
                <h3
                  className={`text-2xl ${
                    item.id % 2 === 0
                      ? "text-white dark:text-gunmetal  dark:group-hover:text-white"
                      : "text-white dark:group-hover:text-gunmetal"
                  } font-bold capitalize transition-colors`}
                >
                  {item.title}
                </h3>
                <h1 className={`text-4xl ${item.id % 2 === 0 ? 'text-gunmetal group-hover:text-turquoise' : 'text-turquoise group-hover:text-gunmetal'}  dark:text-turquoise dark:group-hover:text-turquoise font-bold`}>
                  ${item.price}
                </h1>
                <p
                  className={`${
                    item.id % 2 === 0
                      ? "text-gunmetal dark:text-white group-hover:text-slate-300"
                      : "text-slate-300 group-hover:text-gunmetal dark:group-hover:text-white"
                  } text-sm transition-colors`}
                >
                  {item.description}
                </p>
              </div>
              <hr className={`dark:border-turquoise dark:group-hover:border-turquoise ${item.id % 2 === 0 ? 'border-gunmetal group-hover:border-turquoise' : 'border-turquoise group-hover:border-gunmetal'} transition-colors`} />
              <ul>
                {item.benefits.map((benifit, index) => (
                  <li key={index} className={"flex items-center gap-2"}>
                    {benifit.ischeck ? (
                      <FaCheck size={20} className={`${item.id % 2 === 0 ? 'text-gunmetal group-hover:text-turquoise dark:text-turquoise' : 'text-turquoise group-hover:text-gunmetal dark:group-hover:text-turquoise'} transition-colors`} />
                    ) : (
                      <IoMdClose size={20} className={"text-red-600"} />
                    )}

                    <span
                      className={`${
                        item.id % 2 === 0
                          ? "text-gunmetal dark:text-white group-hover:text-slate-300"
                          : "text-slate-300 group-hover:text-gunmetal dark:group-hover:text-white"
                      } transition-colors`}
                    >
                      {benifit.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className={"flex flex-col gap-2"}>
                <Link
                  className={`py-2 text-lg font-bold text-center ${
                    item.id % 2 === 0
                      ? "bg-gunmetal group-hover:bg-turquoise text-turquoise group-hover:text-gunmetal"
                      : "text-gunmetal bg-turquoise group-hover:bg-gunmetal group-hover:text-turquoise"
                  } rounded-md transition-colors`}
                >
                  Start Now
                </Link>
                <p
                  className={`${
                    item.id % 2 === 0
                      ? "text-gunmetal dark:text-white group-hover:text-slate-300"
                      : "text-slate-300 group-hover:text-gunmetal dark:group-hover:text-white"
                  } text-sm transition-colors`}
                >
                  Payment is made after finishing your project.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
