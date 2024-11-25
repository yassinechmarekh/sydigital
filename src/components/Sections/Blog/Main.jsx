import React, { useState } from "react";
import SwiperBlogs from "./SwiperBlogs";
import TitleSection from "./TitleSection";
import LargeCard from "./LargeCard";
import Sidebar from "./Sidebar";
import { Blogs } from "@/data/Blogs";
import MyPagination from "@/components/Global/MyPagination";

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 4;
  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  const currentBlogs = Blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className={"pb-10 bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <SwiperBlogs />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <TitleSection title="Our Blog" />
            {currentBlogs.map((item, index) => (
              <LargeCard key={index} blog={item} />
            ))}
            <MyPagination totalPosts={Blogs.length} postsPerPage={blogPerPage} paginate={paginate} />
          </div>
          <div className="w-full lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
