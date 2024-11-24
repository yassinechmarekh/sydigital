import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

export default function LargeCard({ blog }) {
  return (
    <div className={"flex flex-col sm:flex-row gap-3 mt-8 sm:mt-4"}>
      <div className={"w-full sm:w-2/5 rounded-xl overflow-hidden relative"}>
        <Link to={`/blog/${blog.slug}`}>
          <img src={blog.image} alt="" className={"blog-img"} />
        </Link>
        <span
          className={
            "blog-tag"
          }
        >
          {blog.tag}
        </span>
      </div>
      <div className={"w-full sm:w-3/5 flex flex-col gap-2"}>
        <Link to={`/blog/${blog.slug}`} >
          <h3 className={"text-2xl blog-title"}>{blog.title}</h3>
        </Link>
        <div
          className={
            "flex items-center gap-2 text-slate-600 dark:text-slate-300"
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
              size={20}
              className={"text-caribbean-current dark:text-turquoise"}
            />
            <h5>{blog.date}</h5>
          </div>
        </div>
        <p className={"parag text-sm"}>{blog.article[0].slice(0,100)}</p>
        <Link to={`/blog/${blog.slug}`}
          className={
            "py-1 px-3 w-fit bg-transparent hover:bg-caribbean-current dark:hover:bg-turquoise border border-caribbean-current/30 dark:border-turquoise/30 text-caribbean-current dark:text-turquoise hover:text-blue-100 dark:hover:text-gunmetal text-sm rounded-lg transition-colors capitalize"
          }
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
