import Heroproject from "@/components/Global/heroproject"
import ImageGallery from "@/components/Global/imagegallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import "@/components/Global/singleproject.css"

import Projectfeatures from "@/components/Global/projectfeatures"
import Projectpara from "@/components/Global/projectpara"
import Callprjct from "@/components/Global/callprjct"

export default function Singleproject() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Hero Section */}
   <Heroproject/>
   <Projectpara/>
   <ImageGallery/>
      {/* Features Section */}
   <Projectfeatures/>

      {/* Gallery Section */}
  
    

      {/* Call-to-Action Section */}
   <Callprjct/>
    </div>
  )
}

