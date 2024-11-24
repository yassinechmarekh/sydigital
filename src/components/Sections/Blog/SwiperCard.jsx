import React from "react";
import { Link } from "react-router-dom";

export default function SwiperCard({ blog }) {
  return (
    <div
      className={
        "bg-blue-100 dark:bg-gunmetal border border-gunmetal dark:border-turquoise rounded-xl overflow-hidden"
      }
    >
      <div className={"h-52 w-full overflow-hidden"}>
        <Link to={`/blog/${blog.slug}`}>
          <img src={blog.image} alt="" className={"blog-img"} />
        </Link>
      </div>
      <div className={"py-4 px-3 flex flex-col gap-y-1"}>
        <Link to={`/blog/${blog.slug}`}>
          <h3 className={"text-xl blog-title"}>{blog.title}</h3>
        </Link>
        <div className={"flex gap-2"}>
          <h4 className={"text-slate-600 dark:text-slate-300 capitalize"}>
            By :{" "}
            <span
              className={
                "text-caribbean-current dark:text-turquoise font-semibold"
              }
            >
              SyDigital
            </span>{" "}
          </h4>
          <span className={"text-slate-600 dark:text-slate-300"}>-</span>
          <h4 className={"text-slate-600 dark:text-slate-300 capitalize"}>
            Date : {blog.date}
          </h4>
        </div>
        <Link to={`/blog/${blog.slug}`}
          className={
            "self-end text-gunmetal dark:text-slate-300 hover:text-caribbean-current dark:hover:text-turquoise hover:underline transition-all duration-300 ease-in-out"
          }
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
