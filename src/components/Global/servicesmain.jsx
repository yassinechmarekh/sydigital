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
  const services = [
    {
      title: "Landing Page",
      imagechara: "./character3.png",
      tags: [
        "landing page design",
        "high-converting",
        "SEO optimized",
        "lead generation",
        "performance-driven",
        "responsive design",
      ],
      description:
        "We design high-converting landing pages that grab attention and optimize performance, helping you capture leads and grow your business.",
    },
    {
      title: "Web Application",
      imagechara: "./character5.png",
      tags: [
        "custom web application",
        "scalable",
        "performance optimization",
        "user experience",
        "business solutions",
        "responsive web app",
      ],
      description:
        "Our custom web applications are built for performance and scalability, designed to meet your business’s unique requirements and enhance user experience.",
    },
    {
      title: "E-commerce Website",
      imagechara: "./character2.png",
      tags: [
        "e-commerce design",
        "user-friendly",
        "online store",
        "conversion optimization",
        "mobile-friendly",
      ],
      description:
        "We create user-friendly, secure e-commerce websites that drive sales, improve customer experience, and help your business succeed online.",
    },
  ];
  return (
    <main className="py-10 bg-blue-100 dark:bg-gunmetal">
      <div className="container">
        <TopSection
          subtitle="Our Services"
          title="Elevate your digital presence with our cutting-edge solutions"
          parag="We offer innovative solutions to enhance your digital presence and drive success. Our services are tailored to meet your specific business needs and objectives."
        />

        <div className="servicescardscontainer mt-6">
          {services.map((service, index) => (
            <Servicecard key={index} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Servicesmain;
