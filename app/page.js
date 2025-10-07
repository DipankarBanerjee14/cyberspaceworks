// app/tranding/page.js
"use client";
import React, { useEffect, useRef } from "react";
import OurServices from "@/components/OurServices.js";
import WhyChooseUs from "@/components/WhyChooseUs.js";
import AboutSection from "@/components/AboutSection.js";
import HowWeDoIt from "@/components/HowWeDoIt.js";
import Testimonial from "@/components/Testimonial.js";
import Navbar from "@/components/Navbar.js";
import HeroSection from "@/components/HeroSection.js"

import Dashboard from "@/components/Dasboard.js"
export default function TrandingPage() {


  return (
    <div className="bg-black">
    
      <Navbar/>
      <HeroSection/>
  
      <OurServices />
      <WhyChooseUs />
      <Dashboard/>
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />

    </div>
  );
}
