import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Code, Zap } from 'lucide-react';

const Projectfeatures = () => {
    const[languages,setlanguages]=useState("Built with cutting-edge technologies like React, Next.js, and Tailwind CSS.")
    return (
        <section className="w-full py-3 md:py-6 lg:py-8 bg-blue-100 dark:bg-gunmetal">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-title font-bold tracking-tighter sm:text-5xl text-center mb-12 text-turquoise">Key Features</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="bg-blue-100 dark:bg-gunmetal border-turquoise shadow-lg shadow-turquoise/20 hover:shadow-turquoise/40 transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gunmetal dark:bg-turquoise flex items-center justify-center">
                  <Zap size={24} className="text-turquoise dark:text-gunmetal" />
                </div>
                <CardTitle className="text-gunmetal dark:text-turquoise font-title">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gunmetal dark:text-white">Fully responsive layout that looks great on desktop, tablet, and mobile devices.</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 dark:bg-gunmetal border-turquoise shadow-lg shadow-turquoise/20 hover:shadow-turquoise/40 transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gunmetal dark:bg-turquoise flex items-center justify-center">
                  <Zap size={24} className="text-turquoise dark:text-gunmetal" />
                </div>
                <CardTitle className="text-gunmetal dark:text-turquoise font-title">Modern Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gunmetal dark:text-white">{languages}</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 dark:bg-gunmetal border-turquoise shadow-lg shadow-turquoise/20 hover:shadow-turquoise/40 transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gunmetal dark:bg-turquoise flex items-center justify-center">
                  <Zap size={24} className="text-turquoise dark:text-gunmetal" />
                </div>
                <CardTitle className="text-gunmetal dark:text-turquoise font-title">Performance Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gunmetal dark:text-white">Blazing fast load times and smooth interactions for an excellent user experience.</p>
              </CardContent>
            </Card>
         
        
           
          
          </div>
        </div>
      </section>
    );
}

export default Projectfeatures;
