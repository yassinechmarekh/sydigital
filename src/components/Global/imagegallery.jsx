import React, { useState } from 'react'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fingerprint, MousePointerClick, Search, ZoomIn } from 'lucide-react'

const images = [
  { id: 1, src: "/charlotte.png", alt: "Gallery Image 1" },
  { id: 2, src: "/aboutcharlotte.png", alt: "Gallery Image 2" },
  { id: 3, src: "/charlotteserv.png", alt: "Gallery Image 3" },
  
]

const ImageGallery = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100 dark:bg-gunmetal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-transparent py-3 bg-clip-text bg-gradient-to-r from-turquoise  to-gunmetal dark:bg-gradient-to-r dark:from-turquoise dark:to-white font-title mb-4"
           
          >
            Stunning Image Gallery
          </h2>
      
        </div>
        <div 
          className="projectimagecontai"
     
        >
          {images.map((image) => (
            <div
              key={image.id}
           
              className="relative cardimgg group"
   
            >
              <Card className="overflow-hidden cardcontainerimage bg-gray-800 border-2 border-gray-700">
                <CardContent className="p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full  transition-all duration-300 group-hover:brightness-75"
                  />
                  {hoveredId === image.id && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  
                    >
                      <Button variant="secondary" size="icon" className="mr-2">
                        <Search className="h-5 w-5" />
                      </Button>
                      <Button variant="secondary" size="icon">
                        <ZoomIn className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
           <div id='seemorebtn' className='rounded-lg text-gunmetal font-bold bg-turquoise cursor-pointer hover:bg-gunmetal hover:text-turquoise border border-turquoise self-center'> <MousePointerClick className='mr-1' /> you wanna see more watch this website live </div>
      

        </div>
       </div>
    </section>
  )
}

export default ImageGallery

