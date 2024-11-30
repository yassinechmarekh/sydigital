import TopPage from "@/components/Global/TopPage";
import Bannerservices from "@/components/Global/bannerservices";
import Serviceshero from "@/components/Global/serviceshero";
import Servicesmain from "@/components/Global/servicesmain";
import Pricing from "@/components/Sections/services/Pricing";
import React, { useState } from "react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-100 text-gunmetal dark:bg-gunmetal dark:text-white ">
      <TopPage page='services' />
      <Serviceshero />
      <Servicesmain />
      <Pricing/>
      <Bannerservices />
    </div>
  );
}
