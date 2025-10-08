"use client";
import React, { useEffect, useState } from "react";
import OurServices from "@/components/OurServices.js";
import WhyChooseUs from "@/components/WhyChooseUs.js";
import AboutSection from "@/components/AboutSection.js";
import HowWeDoIt from "@/components/HowWeDoIt.js";
import Testimonial from "@/components/Testimonial.js";
import Navbar from "@/components/Navbar.js";
import HeroSection from "@/components/HeroSection.js";
import Demo from "@/components/Demo.js";
import Dashboard from "@/components/Dasboard.js";
import preloader from "@/public/preloader.gif";

export default function TrandingPage() {
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // --- Mouse tracking for spotlight ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- Preloader logic ---
  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoaded");
    if (!hasLoadedBefore) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <img
          src={preloader.src || preloader}
          alt="Loading..."
          className="w-50 h-50"
        />
      </div>
    );
  }

  // --- Cursor glow (spotlight) style ---
  const spotlightStyle = {
    position: "fixed", // ensures it covers the whole viewport
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 10, // ensures it's visible above sections
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.18), transparent 60%)`,
    transition: "background-position 80ms linear",
  };

  return (
    <>
      {/* --- Global cursor --- */}
      <style jsx global>{`
        * {
          cursor: url("/cursor.png") 8 8, auto;
        }
      `}</style>

      {/* --- Cursor Glow Layer --- */}
      <div style={spotlightStyle}></div>

      {/* --- Main Page --- */}
      <div className="bg-black relative min-h-screen">
        <Navbar />
        <HeroSection />
        <Demo />
        <OurServices />
        <WhyChooseUs />
        <Dashboard />
        <AboutSection />
        <HowWeDoIt />
        <Testimonial />
      </div>
    </>
  );
}
