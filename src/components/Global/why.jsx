import React, { useEffect } from 'react';
import "./why.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Why = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#whymain",
                start: "top 70%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        tls.fromTo(".messagew",{x:-10,opacity:0},{opacity:1,x:0,duration:.5,ease:"power1.inOut"})
        .fromTo(".messagej",{x:-10,opacity:0},{opacity:1,x:0,duration:.5,ease:"power1.inOut"})
        .fromTo("#whychara",{y:10,opacity:0},{opacity:1,y:0,duration:.5,ease:"power1.inOut"})
        .fromTo(".message3-1 div",{x:10,opacity:0},{opacity:1,x:0,duration:.5,ease:"power1.inOut"})

    },[])
    return (
        <div id='why' className='bg-gradient-to-r from-caribbean-current/60 via-turquoise/80 to-gunmetal/70 dark:from-caribbean-current/60 dark:via-gunmetal/80 dark:to-turquoise/70' >
            <h2 className='text-center text-gunmetal font-title'>Why Choose Us</h2>
         <div id='whymain'>

         <div id='complexwhy' >

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

           <img src='./whycharacter.png' id='whychara'/>

       <div className='message3-1'>

       <div className="message  font-subtitle messagetlataphone  bg-turquoise topCenter ">
                Your Trusted Partner in Digital Growth
             
                </div>

                <div className="message  font-subtitle messagetlatapc  bg-turquoise bottomLeft ">
                Your Trusted Partner in Digital Growth
             
                </div>
       </div>

<img src='./world.png' id='wrd'/>

<img src='./particle3pr.png' id='wrd2'/>
<img src='./particle1.png' id='wrd3'/>
<img src='../src/assets/logo/white-logo.svg' id='wrd4'/>

         </div>
            
         
            
        </div>
    );
}

export default Why;
