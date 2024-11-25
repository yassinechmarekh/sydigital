import React from 'react';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import "./singleproject.css"
const Heroproject = () => {
    return (
        <div className='bg-blue-100 dark:bg-gunmetal'>
               <section className="w-full py-5 md:py-8 lg:py-10 xl:py-12">
        <div className="px-4 md:px-6">
          <div className="containerprojecthero">
           
            <div className="heroprjcttxt">
              <div className="space-y-2">
                <h1 className="text-3xl  font-title font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gunmetal dark:text-turquoise">
                  Charlotte Ultimate Cleaning Services
                </h1>
                <p className="max-w-[600px] font-subtitle text-gunmetal dark:text-white md:text-xl">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum enim cum expedita sed, nobis cupiditate totam dolor ex incidunt corporis, iusto nihil veritatis iure ipsa porro minima ullam asperiores.  </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#21ebd6] text-[#142532] hover:bg-[#237379]"><Eye/> View Live Site</Button>
                 </div>
            </div>

            <img
              alt="Project Screenshot"
              className="imgheroprjct rounded-lg"
             
              src="/charlottethum.png"
       
            />
          </div>
        </div>
      </section>

        </div>
    );
}

export default Heroproject;
