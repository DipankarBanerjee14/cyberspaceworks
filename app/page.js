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
import Demo from "@/components/Demo.js"

export default function TrandingPage() {


  return (
    <div className="relative w-full h-screen  text-white">
    
      <Navbar/>
      <HeroSection/>
      <Demo/>
      <OurServices />
      <WhyChooseUs />
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />

    </div>
  );
}
