import React, { useEffect } from "react";
import { Code, Palette, Smartphone, Globe, Zap } from "lucide-react";
import "./services.css";
import Servicecard from "./servicecard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TopSection from "./TopSection";

gsap.registerPlugin(ScrollTrigger);
const Servicesmain = () => {
  useEffect(() => {
    const tls2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".servicescardscontainer",
        start: "top 90%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });

    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardserviceimg",
        start: "top 90%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });

    tls2
      .fromTo(
        ".cardservice",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.4, ease: "power1.inOut" }
      )
      .fromTo(
        ".imagecharacard",
        { y: 10, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }
      );

    tls2
      .fromTo(
        ".cardservicetext h2",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.inOut" }
      )
      .fromTo(
        ".cardservbtn",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".cardservicetext p",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.5, delay: 2, ease: "power1.inOut" },
        "animationdv"
      )
      .fromTo(
        ".lijablahcontainer div",
        { opacity: 0, x: 6 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.4, ease: "power1.inOut" },
        "animationdv"
      );
    tls
      .fromTo(
        ".starelement2",
        { rotate: 0, y: 4 },
        { y: 0, rotate: 20, yoyo: true, repeat: -1, duration: 2 }
      )
      .fromTo(
        ".starelement1",
        { y: 10 },
        { y: 0, yoyo: true, repeat: -1, duration: 2 }
      )
      .fromTo(
        ".starelement3",
        { y: 10 },
        { y: 0, yoyo: true, repeat: -1, duration: 2 }
      );
  }, []);
  return (
    <main className="py-10 bg-blue-100 dark:bg-gunmetal">
      <div className="container">
        <TopSection
          subtitle="Our Services"
          title="Elevate your digital presence with our cutting-edge solutions"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />

        <div className="servicescardscontainer mt-6">
          <Servicecard
            imagechara="./character3.png"
            servicename="Landing Page"
          />
          <Servicecard
            imagechara="./character5.png"
            servicename="Web Application"
          />
          <Servicecard
            imagechara="./character2.png"
            servicename="E-commerce Website"
          />
        </div>
      </div>
    </main>
  );
};

export default Servicesmain;
