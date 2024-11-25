import React from "react";
import TitleSection from "./TitleSection";
import SidebarCard from "./SidebarCard";
import blogImg1 from "@/assets/images/blog/1.jpg";
import blogImg2 from "@/assets/images/blog/2.jpg";
import { Blogs } from "@/data/Blogs";

export default function Sidebar() {
  const tags = [
    "ai hardware",
    "autonomous systems",
    "robotics",
    "Tools & Framework",
    "Startups",
    "Machine Learning",
    "SEO",
    "Marketing",
    "Web Application",
    "Landing Page",
    "Ecommerce",
  ];
  const latestBlog = Blogs.sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return dateB - dateA;
  });
  
  return (
    <div>
      <div>
        <TitleSection title="Last Blog" />
        {latestBlog.slice(0,2).map((item) => (
          <SidebarCard
            key={item.id}
            blog={item}
          />
        ))}
      </div>
      <div>
        <TitleSection title="Tags" />
        <div className="flex gap-4 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={
                "py-1 px-3 bg-caribbean-current/15 dark:bg-turquoise/30 backdrop-blur-sm border border-caribbean-current dark:border-turquoise text-caribbean-current dark:text-turquoise font-semibold capitalize rounded-xl"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
