import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Serviceherocard from "./serviceherocard";
import "./servicehero.css";
import { AppWindowMac, MonitorCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Serviceshero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tls2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#servicehero",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: "#servicesheroimages",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play none none reverse",
      },
    });
    tls.fromTo(
      "#servicescharahero",
      { y: 20, opacity: 0 },
      { opacity: 1, y: 0 }
    );
    tls2
      .fromTo(
        "#serviceheroheadli",
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        "#serviceherotxt h2",
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        "#serviceherotxt p",
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        "#iconserv",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "animcrd"
      )
      .fromTo(
        "#cardsev span",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "animcrd"
      )
      .fromTo("#separhero1", { width: 0 }, { width: "100%", duration: 0.5 });
  }, []);
  return (
    <div id="servicehero" className="container">
      <div id="serviceherotxt">
        <div className="sub-title w-fit">WE HELP YOU TO GROW ONLINE</div>
        <h2 className="title mt-2">Creating Cultires Of Engagement</h2>
        <p className="parag">
          We design and develop websites that foster strong connections with
          your audience, helping your business grow in the digital world. Our
          approach is centered on engagement, performance, and results.
        </p>
        <Separator id="separhero1" />
        <div id="serviceherocardscont">
          <Serviceherocard
            paraservcard="We create custom websites to showcase your brand and boost your online presence."
            titleservcard="Small Projects"
            iconser={
              <AppWindowMac
                id="iconserv"
                className="text-caribbean-current dark:text-turquoise"
              />
            }
          />
          <Serviceherocard
            paraservcard="We offer scalable, cost-effective web solutions that help startups stand out and grow online."
            titleservcard="Startups"
            iconser={
              <MonitorCheck
                id="iconserv"
                className=" text-caribbean-current dark:text-turquoise"
              />
            }
          />
        </div>
      </div>

      <div id="servicesheroimages">
        <img src="./character4.png" id="servicescharahero" className="z-10" />
        <img src="blob(7).svg" id="blob" />
      </div>
    </div>
  );
};

export default Serviceshero;
