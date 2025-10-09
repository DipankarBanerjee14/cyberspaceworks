"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar.js";

import preloader from "@/public/preloader.gif";

// Dynamically import heavy sections to reduce initial bundle size
const HomePage = dynamic(() => import("@/pages/HomePage.js"))
// const HeroSection = dynamic(() => import("@/components/HeroSection.js"));
// const Technology = dynamic(() => import("@/components/Technology.js"));
// const OurServices = dynamic(() => import("@/components/OurServices.js"));
// const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs.js"));
// const Dashboard = dynamic(() => import("@/components/Dasboard.js"));
// const AboutSection = dynamic(() => import("@/components/AboutSection.js"));
// const HowWeDoIt = dynamic(() => import("@/components/HowWeDoIt.js"));
// const Testimonial = dynamic(() => import("@/components/Testimonial.js"));

export default function TrandingPage() {
  const [loading, setLoading] = useState(true);

  // Preloader logic
  

  // Global cursor spotlight glow with mouse and touch support
  useEffect(() => {
    const spotlight = document.getElementById("cursor-spotlight");
    if (!spotlight) return;

    // Set initial gradient position to center of viewport
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    spotlight.style.background = `
      radial-gradient(400px at ${initialX}px ${initialY}px, rgba(147,51,234,0.3), transparent 60%)
    `;

    const updateSpotlight = (x, y) => {
      requestAnimationFrame(() => {
        spotlight.style.background = `
          radial-gradient(400px at ${x}px ${y}px, rgba(147,51,234,0.3), transparent 60%)
        `;
      });
    };

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      updateSpotlight(x, y);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const { clientX: x, clientY: y } = touch;
      updateSpotlight(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

 
 return (
  <>
   

    {/* Global cursor spotlight (purple glow) */}
    <div id="cursor-spotlight" />

    {/* Main Page */}
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />
      {/* <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <Dashboard />
      <AboutSection />
      <HowWeDoIt />
      <Technology />
      <Testimonial /> */}
      <HomePage/>
    </div>
  </>
);

}