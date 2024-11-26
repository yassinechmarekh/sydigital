import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import TopSection from "@/components/Global/TopSection";
import Card from "./Card";
import { motion } from "framer-motion";
import { projects } from "@/data/Projects";

export default function Single() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));
  const otherProjects = projects.filter((item) => item.id !== parseInt(id));
  return (
    <section className={"bg-blue-100 dark:bg-gunmetal"}>
      <div className="container">
        <div>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className="project-swp"
          >
            {project.detailsImgs.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="" className="w-full md:w-4/5 mx-auto select-none" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <div
              className={
                "flex flex-col gap-y-1 items-center lg:items-stretch lg:mx-auto"
              }
            >
              <h4
                className={
                  "text-lg text-caribbean-current dark:text-turquoise font-semibold uppercase"
                }
              >
                Client
              </h4>
              <span className={"parag text-sm"}>{project.client}</span>
            </div>
            <div
              className={
                "flex flex-col gap-y-1 items-center lg:items-stretch lg:mx-auto"
              }
            >
              <h4
                className={
                  "text-lg text-caribbean-current dark:text-turquoise font-semibold uppercase"
                }
              >
                Date
              </h4>
              <span className={"parag text-sm"}>{project.date}</span>
            </div>
            <div
              className={
                "flex flex-col gap-y-1 items-center lg:items-stretch lg:mx-auto"
              }
            >
              <h4
                className={
                  "text-lg text-caribbean-current dark:text-turquoise font-semibold uppercase"
                }
              >
                Category
              </h4>
              <span className={"parag text-sm"}>{project.category}</span>
            </div>
            <div
              className={
                "flex flex-col gap-y-1 items-center lg:items-stretch lg:mx-auto"
              }
            >
              <h4
                className={
                  "text-lg text-caribbean-current dark:text-turquoise font-semibold uppercase"
                }
              >
                Plan
              </h4>
              <span className={"parag text-sm"}>{project.plan}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-6">
          <Link to={project.link} target="_blank">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={"main-btn mx-auto flex items-center gap-3"}
            >
              <FaEye size={20} />
              <span>Live Preview</span>
            </motion.div>
          </Link>
          <div>
            <h2
              className={
                "text-2xl text-gunmetal dark:text-white font-semibold capitalize"
              }
            >
              About Project
            </h2>
            <p className={"parag mt-2"}>{project.about}</p>
          </div>
          <div>
            <h2
              className={
                "text-2xl text-gunmetal dark:text-white font-semibold capitalize"
              }
            >
              Tools & Frameworks
            </h2>
            <p className={"parag mt-2"}>{project.tools.parag}</p>
            <div
              className={"grid grid-cols-2 sm:grid-cols-4 gap-6 my-8"}
            >
              {project.tools.frameworks.map((item, index) => (
                <div key={index} className="flex flex-col gap-y-2 items-center">
                  <img
                    src={item.logo}
                    alt=""
                    className={"w-full max-w-20 mx-auto"}
                  />
                  <h5
                    className={
                      "text-lg text-gunmetal dark:text-white font-semibold"
                    }
                  >
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2
              className={
                "text-2xl text-gunmetal dark:text-white font-semibold capitalize"
              }
            >
              Features
            </h2>
            <p className={"parag mt-2"}>{project.features.parag}</p>
            <ul
              className={
                "mt-2 w-11/12 mx-auto list-disc parag flex flex-col gap-y-2"
              }
            >
              {project.features.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className={
                "text-2xl text-gunmetal dark:text-white font-semibold capitalize"
              }
            >
              App Screens
            </h2>
            <p className={"parag mt-2"}>{project.appscreens.parag}</p>
            <div className={"mt-8"}>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="screens-swp"
              >
                {project.appscreens.screens.map((screen, index) => (
                  <SwiperSlide key={index} className="mb-10">
                    <img src={screen} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Link to={project.link} target="_blank">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={"main-btn mx-auto flex items-center gap-3"}
            >
              <FaEye size={20} />
              <span>Live Preview</span>
            </motion.div>
          </Link>
        </div>
        <div className={"py-10"}>
          <TopSection
            subtitle="Others Projects"
            title="Tailored Solutions, Proven Results, and Exceptional Service"
            parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
          />
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"}>
            {otherProjects.slice(0, 2).map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
