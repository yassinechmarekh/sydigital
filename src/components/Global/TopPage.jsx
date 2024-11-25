import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function TopPage({ page }) {
  return (
    <div
      className={"py-5 bg-blue-100 dark:bg-gunmetal"}
    >
      <div className="container">
        <div className="flex items-center justify-center gap-x-2 text-gunmetal dark:text-white capitalize text-lg">
          <Link
            to="/"
            className={
              "font-semibold hover:text-caribbean-current dark:hover:text-turquoise transition-colors"
            }
          >
            Home
          </Link>
          <IoIosArrowForward size={16} />
          <h3>{page}</h3>
        </div>
      </div>
    </div>
  );
}
