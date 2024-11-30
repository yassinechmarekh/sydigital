import React from "react";
import Sidebar from "./Sidebar";
import { MdDateRange } from "react-icons/md";
import SwiperBlogs from "./SwiperBlogs";
import { Blogs } from "@/data/Blogs";
import { useParams } from "react-router-dom";

export default function Single() {
  const {slug} = useParams();
  const blog = Blogs.find((blog) => blog.slug === slug);
  return (
    <div className={"mb-6 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          <div className="w-full lg:w-2/3">
            <div className="sm:h-[450px] overflow-hidden">
              <img src={blog.image} alt="" className={"blog-img"} />
            </div>
            <h2
              className={
                "mt-4 text-2xl sm:text-3xl text-gunmetal dark:text-white font-bold"
              }
            >
              {blog.title}
            </h2>
            <div
              className={
                "mt-2 flex items-center gap-4 text-slate-600 dark:text-slate-300"
              }
            >
              <h4 className={"capitalize"}>
                by :{" "}
                <span className="font-semibold text-caribbean-current dark:text-turquoise">
                  Sydigital
                </span>
              </h4>
              <span>-</span>
              <div className={"flex items-center gap-2"}>
                <MdDateRange
                  size={16}
                  className={"text-caribbean-current dark:text-turquoise"}
                />
                <h4>{blog.date}</h4>
              </div>
            </div>
            <div className={"mt-6 parag flex flex-col gap-y-4"}>
              {blog.article.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Sidebar />
          </div>
        </div>
        <SwiperBlogs />
      </div>
    </div>
  );
}
