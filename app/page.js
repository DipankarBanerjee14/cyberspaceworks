"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar.js";

import preloader from "@/public/preloader.gif";

const HeroSection = dynamic(() => import("@/components/HeroSection.js"));
const Technology = dynamic(() => import("@/components/Technology.js"));
const OurServices = dynamic(() => import("@/components/OurServices.js"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs.js"));
const Dashboard = dynamic(() => import("@/components/Dasboard.js"));
const AboutSection = dynamic(() => import("@/components/AboutSection.js"));
const HowWeDoIt = dynamic(() => import("@/components/HowWeDoIt.js"));
const Testimonial = dynamic(() => import("@/components/Testimonial.js"));

export default function TrandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = preloader.src || preloader;
    img.onload = () => setLoading(false);
  }, []);

  useEffect(() => {
    const spotlight = document.getElementById("cursor-spotlight");
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Make the gradient more visible
      requestAnimationFrame(() => {
        spotlight.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, rgba(0,150,255,0.4) 0%, rgba(0,150,255,0.0) 80%)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#141416]">
        <img
          src={preloader.src || preloader}
          alt="Loading..."
          className="w-80 h-60"
        />
      </div>
    );
  }

  return (
    <>
      {/* Global custom cursor */}
      <style jsx global>{`
        * {
          cursor: url("/cursor.png") 8 8, auto;
        }
      `}</style>

      {/* Cursor glow layer */}
      <div
        id="cursor-spotlight"
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999] transition-all duration-75"
      />

      <div className="bg-black relative min-h-screen">
        <Navbar />
        <HeroSection />
        <OurServices />
        <WhyChooseUs />
        <Dashboard />
        <AboutSection />
        <HowWeDoIt />
        <Technology />
        <Testimonial />
      </div>
    </>
  );
}
