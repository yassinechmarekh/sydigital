import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import "./projectspage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from '@/assets/images/logo/white-logo.svg'
const Projectshero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tls2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#heroprojects",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });
    tls2
      .fromTo(
        "#heroprojectstxt h2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "animtxtprjcts"
      )
      .fromTo(
        "#heroprojectstxt p",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "animtxtprjcts"
      )
      .fromTo(
        ".btnheroprjcts",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "animtxtprjcts"
      )
      .fromTo("#sepaprjcts", { width: 0 }, { width: "100%" })
      .fromTo("#overl", { opacity: 0, y: 20 }, { y: 0, opacity: 1 })
      .fromTo("#logoover", { opacity: 0, y: 20 }, { y: 0, opacity: 1 })
      .fromTo(
        "#characterprojectshero",
        { opacity: 0, y: 20 },
        { y: 0, opacity: 1 }
      );
  }, []);
  return (
    <div id="heroprojects" className="bg-blue-100 dark:bg-gunmetal ">
      <div id="heroprojectstxt">
        <h2 className="text-gunmetal dark:text-turquoise font-title font-bold text-4xl mb-6 ml-1">
          OUR PROJECTS
        </h2>
        <Separator
          id="sepaprjcts"
          className="bg-gunmetal dark:bg-turquoise mb-3"
        />
        <p className="text-gunmetal dark:text-white font-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae numquam at, doloribus distinctio, qui libero ad tempora
          illum deleniti minima? Explicabo, accusantium aperiam minus facere
          officia consectetur facilis eos.
        </p>
        <div className="bg-turquoise btnheroprjcts mt-3 cursor-pointer ">
          Check Our Projects
        </div>
      </div>

      <div id="heroprojectsimgs">
        <img src="./character2.png" id="characterprojectshero" alt="" />

        <div id="overl">
          <img src={logo} id="logoover" />
        </div>
      </div>
    </div>
  );
};

export default Projectshero;
