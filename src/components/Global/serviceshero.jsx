import React, { useEffect } from 'react';
import { Separator } from "@/components/ui/separator"
import Serviceherocard from './serviceherocard';
import "./servicehero.css"
import { AppWindowMac, MonitorCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Serviceshero = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#servicehero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#servicesheroimages",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        tls.fromTo("#servicescharahero",{y:20,opacity:0},{opacity:1,y:0})
        tls2.fromTo("#serviceheroheadli",{x:10,opacity:0},{x:0,opacity:1,duration:.5})
        .fromTo("#serviceherotxt h2",{x:10,opacity:0},{x:0,opacity:1,duration:.5})
        .fromTo("#serviceherotxt p",{x:10,opacity:0},{x:0,opacity:1,duration:.5})
        .fromTo("#iconserv",{y:10,opacity:0},{y:0,opacity:1,duration:.5},"animcrd")
        .fromTo("#cardsev span",{y:10,opacity:0},{y:0,opacity:1,duration:.5},"animcrd")
        .fromTo("#separhero1",{width:0},{width:"100%",duration:.5})
    },[])
    return (
        <div id='servicehero'>
          
            <div id='serviceherotxt'>
                <div id='serviceheroheadli'  >WE HELP YOU TO GROW ONLINE</div>
                <h2 className='font-title text-4xl font-bold mt-4'>Creating Cultires Of Engagement</h2>
                <p className='font-subtitle '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla perferendis nisi dolore nesciunt natus voluptates nihil.</p>
                <Separator id="separhero1" />
                <div id='serviceherocardscont'>
                    <Serviceherocard paraservcard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente modi libero dolores iure animi ducimus rerum." titleservcard="Web Developement" iconser={<AppWindowMac id='iconserv' className='text-gunmetal dark:text-turquoise' />}/>
                    <Serviceherocard paraservcard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente modi libero dolores iure animi ducimus rerum." titleservcard="Desktop Application" iconser={<MonitorCheck  id='iconserv' className=' text-gunmetal dark:text-turquoise' />}/>
                </div>

            </div>

            <div id='servicesheroimages'>
<img src='./character4.png' id='servicescharahero'/>
            <img src='blob(7).svg' id='blob'/>
            </div>
        </div>
    );
}

export default Serviceshero;
