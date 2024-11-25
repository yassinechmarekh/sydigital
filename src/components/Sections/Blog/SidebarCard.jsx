import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function SidebarCard({ blog }) {
  return (
    <div className={"mt-4"}>
      <div className={"w-full h-56 rounded-xl overflow-hidden relative"}>
        <Link to={`/blog/${blog.slug}`}>
          <img src={blog.image} alt="" className={"blog-img"} />
        </Link>
        <span className={"blog-tag"}>{blog.tag}</span>
      </div>
      <div className={"py-2 flex flex-col gap-1"}>
        <Link to={`/blog/${blog.slug}`}>
          <h3 className={"blog-title"}>{blog.title}</h3>
        </Link>
        <div
          className={
            "flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
          }
        >
          <h5>
            By :{" "}
            <span
              className={
                "text-caribbean-current dark:text-turquoise font-semibold"
              }
            >
              SyDigital
            </span>
          </h5>
          <span>-</span>
          <div className={"flex items-center gap-1"}>
            <MdDateRange
              size={16}
              className={"text-caribbean-current dark:text-turquoise"}
            />
            <h5>{blog.date}</h5>
          </div>
        </div>
        <Link
          to={`/blog/${blog.slug}`}
          className={
            "flex items-center justify-end gap-2 text-gunmetal dark:text-white text-sm hover:text-caribbean-current dark:hover:text-turquoise hover:underline capitalize transition-all duration-300 ease-in-out"
          }
        >
          <span>Read More</span>
          <FaCircleArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
