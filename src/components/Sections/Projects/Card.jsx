import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Card({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ rotat: 1, scale: 0.98, transition:{duration: 0.3} }}
      transition={{ duration: 0.7 }}
    >
      <Link to={`/project/${project.id}`}>
        <img src={project.mainImag} alt="" className={"w-full"} />
      </Link>
      <div className="mt-6">
        <div className="flex gap-4 flex-wrap">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={
                "py-1 px-3 bg-transparent hover:bg-caribbean-current dark:hover:bg-turquoise text-caribbean-current dark:text-turquoise hover:text-blue-100 dark:hover:text-gunmetal text-sm border border-caribbean-current dark:border-turquoise rounded-lg transition-colors"
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/project/${project.id}`}>
          <h2
            className={
              "mt-2 text-2xl text-gunmetal dark:text-white font-semibold hover:underline transition-all duration-300 ease-in-out"
            }
          >
            {project.title}
          </h2>
        </Link>
      </div>
    </motion.div>
  );
}
