import { menuLinks } from "@/data/MenuLinks";
import { socialLinks } from "@/data/SocialMedia";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={"pt-6 pb-3 mt-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <ul className={"flex justify-center gap-x-6 gap-y-2 flex-wrap"}>
          {menuLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "header-nav-active" : "header-nav-inactive"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={"flex justify-center gap-6 mt-6"}>
          {socialLinks.map((item, index) => (
            <motion.li key={index} initial={{ y: 0 }} whileHover={{ y: -5 }}>
              <Link
                to={item.link}
                className={
                  "text-xl text-gunmetal dark:text-slate-300 hover:text-gunmetal dark:hover:text-turquoise transition-colors duration-300 ease-in-out"
                }
              >
                {item.icon}
              </Link>
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 sm:mt-4 text-center text-gunmetal dark:text-slate-300 text-sm">
          &copy; 2024{" "}
          <span className={"text-gunmetal dark:text-turquoise font-semibold"}>SyDigital</span>, All
          Right Reserved. Designed By{" "}
          <Link
            className={
              "text-gunmetal dark:text-white font-semibold hover:text-gunmetal dark:hover:text-turquoise hover:underline transition-all duration-300 ease-in-out"
            }
          >
            Yassine_ChM
          </Link>{" "}
          &{" "}
          <Link
            className={
              "text-gunmetal dark:text-white font-semibold hover:text-gunmetal dark:hover:text-turquoise hover:underline transition-all duration-300 ease-in-out"
            }
          >
            Sfen_TK
          </Link>
        </p>
      </div>
    </footer>
  );
}
