import React from "react";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { menuLinks } from "@/data/MenuLinks";
import { socialLinks } from "@/data/SocialMedia";
import { motion } from "framer-motion";

export default function MenuMobile({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 ${
        isOpen ? "left-0" : "left-[-150%]"
      } bottom-0 w-72 py-6 px-4 bg-blue-100 dark:bg-gunmetal border-r border-gunmetal dark:border-turquoise transition-all duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-10">
          <div className={"flex items-center justify-between"}>
            <Link to="/">
              <Logo />
            </Link>
            <IoClose
              size={30}
              className={
                "text-gunmetal dark:text-turquoise hover:rotate-90 cursor-pointer transition-all duration-300 ease-in-out"
              }
              onClick={() => setIsOpen(false)}
            />
          </div>
          <nav>
            <ul className={"leading-10"}>
              {menuLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "header-nav-active" : "header-nav-inactive"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className={"flex gap-x-4 justify-center"}>
          {socialLinks.map((item, index) => (
            <motion.li key={index} initial={{ y: 0 }} whileHover={{ y: -10 }}>
              <Link
                to={item.link}
                className={
                  "text-xl text-gunmetal dark:text-slate-300 hover:text-turquoise transition-colors duration-300 ease-in-out"
                }
              >
                {item.icon}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
