import React, { useEffect } from "react";
import "./why.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logoWhite from "@/assets/images/logo/white-logo.svg";
import logoDark from "@/assets/images/logo/dark-logo.svg";
import mainImg from "@/assets/images/character/hero-process-1.webp";
import TopSection from "./TopSection";
const Why = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: "#whymain",
        start: "top 70%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });
    tls
      .fromTo(
        ".messagew",
        { x: -10, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".messagej",
        { x: -10, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#whychara",
        { y: 10, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".message3-1 div",
        { x: 10, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
      );
  }, []);
  return (
    <div id="why" className="py-10 bg-blue-100 dark:bg-gunmetal relative">
      <div className="container">
        <TopSection
          subtitle="Why Choose Us"
          title="Tailored Solutions, Proven Results, and Exceptional Service"
          parag="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolor
        dicta tempora non. Eaque, optio!"
        />
        <div id="whymain" className={"mt-10"}>
          <div id="complexwhy">
            <div className="message messagew font-subtitle messagecomwpc  bg-turquoise bottomRight ">
              Websites Built to Convert and Impress
            </div>

            <div className="message messagew font-subtitle messagecomwphone  bg-turquoise bottomCenter ">
              Websites Built to Convert and Impress
            </div>

            <div className="message  messagej phonemessagej font-subtitle  bg-turquoise bottomCenter   ">
              Empowering Businesses Through Modern Design
            </div>

            <div className="message  messagej pcmessagej font-subtitle  bg-turquoise topRight   ">
              Empowering Businesses Through Modern Design
            </div>
          </div>

          <img src={mainImg} id="whychara" />

          <div className="message3-1">
            <div className="message  font-subtitle messagetlataphone  bg-turquoise topCenter ">
              Your Trusted Partner in Digital Growth
            </div>

            <div className="message  font-subtitle messagetlatapc  bg-turquoise bottomLeft ">
              Your Trusted Partner in Digital Growth
            </div>
          </div>
        </div>
      </div>

      <img src="./world.png" id="wrd" />

      <img src="./particle3pr.png" id="wrd2" />
      <img src="./particle1.png" id="wrd3" />
      <img src={logoWhite} id="wrd4" className="hidden dark:block" />
      <img src={logoDark} id="wrd5" className="block dark:hidden" />
    </div>
  );
};

export default Why;
