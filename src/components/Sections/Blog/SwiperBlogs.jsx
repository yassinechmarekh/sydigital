import React from "react";
import TitleSection from "./TitleSection";
import SwiperCard from "./SwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { Blogs } from "@/data/Blogs";

export default function SwiperBlogs() {
  return (
    <div className="py-6">
      <TitleSection title="Popular Blog" />
      <div className={"mt-4"}>
        <Swiper
          navigation={{
            nextEl: ".swp-button-next",
            prevEl: ".swp-button-prev",
          }}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper relative group"
        >
          {Blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <SwiperCard
                blog={item}
              />
            </SwiperSlide>
          ))}
          <div className={"flex gap-4"}>
            <div className="swp-button-prev -left-20 group-hover:left-2">
              <MdNavigateBefore />
            </div>
            <div className="swp-button-next -right-20 group-hover:right-2">
              <MdNavigateNext />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
