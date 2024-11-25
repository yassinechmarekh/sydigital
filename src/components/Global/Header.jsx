import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "./Logo";

import { menuLinks } from "@/data/MenuLinks";
import WelcomeBar from "./WelcomeBar";
import MenuMobile from "./MenuMobile";

import { RiMenu2Fill } from "react-icons/ri";
import BgOverlay from "./BgOverlay";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={"sticky top-0 left-0 right-0 z-30"}>
      <header
        className={
          "py-2 bg-blue-100 dark:bg-gunmetal border-b border-gunmetal shadow-none dark:shadow-sm shadow-gunmetal dark:shadow-turquoise"
        }
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>
            <ul className={"hidden lg:flex gap-6"}>
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
            <div className={"flex items-center gap-x-4"}>
              <Link
                to='/appointment'
                className={
                  "hidden xs:block bg-gunmetal dark:bg-turquoise hover:bg-transparent border-2 border-gunmetal dark:border-turquoise py-2 px-6 rounded-3xl text-blue-100 dark:text-gunmetal hover:text-gunmetal dark:hover:text-turquoise font-semibold transition-all duration-300 ease-in-out"
                }
              >
                Let's Go
              </Link>
              <RiMenu2Fill
                onClick={() => setOpenMenu(true)}
                size={30}
                className={
                  "block lg:hidden text-gunmetal dark:text-turquoise transition-all duration-300 ease-in-out"
                }
              />
            </div>
          </div>
        </div>
      </header>
      <WelcomeBar />
      <MenuMobile isOpen={openMenu} setIsOpen={setOpenMenu} />
      {openMenu && <BgOverlay setOpenMenu={setOpenMenu} />}
    </div>
  );
}
