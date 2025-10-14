"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaLaptopCode, FaMobileAlt, FaCode, FaPalette, FaBullhorn, FaBrush } from "react-icons/fa";
import OurServices from "@/components/HomeComponents/OurServices.js"; 
import Link from "next/link";
import { SiGoogleanalytics } from "react-icons/si";

export default function HomePage() {
   const servicesRef = useRef(null);
  // HeroSection Component
  const HeroSection = () => {
    const canvasRef = useRef(null);

const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let stars = [];
      const numStars = 300;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.2,
          speed: Math.random() * 0.8 + 0.2,
          fall: Math.random() < 0.04,
        });
      }

      function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          let alpha = 1;
          const fadeStart = canvas.height * 0.6; // start fading at 60% height
          const fadeEnd = canvas.height; // fully faded at bottom
          if (star.y > fadeStart) {
            alpha = 1 - (star.y - fadeStart) / (fadeEnd - fadeStart);
            alpha = Math.max(alpha, 0);
          }
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      function updateStars() {
        stars.forEach((star) => {
          if (star.fall) {
            star.y += star.speed * 6;
            star.x += star.speed * 2;
            if (star.y > canvas.height) {
              star.y = 0;
              star.x = Math.random() * canvas.width;
            }
          } else {
            star.y += star.speed * 0.3;
            if (star.y > canvas.height) {
              star.y = 0;
              star.x = Math.random() * canvas.width;
            }
          }
        });
      }

      function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="relative w-full h-screen text-white overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
        <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4 pt-30">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Endless Possibilities <br />
            in the{" "}
            <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              Cyber-space
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
           Step into the Cyber-space and seize every opportunity with our services,<br/> expert guidance, and strategic insights for unrivaled financial success.
          </p>
          <div className="mt-6 flex gap-4">
             <Link
             href="/contact-us"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg font-medium">
             Contact Us
            </Link>
            <Link
             href="/about-us"
             className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition font-medium">
              About Us
            </Link>
          </div>
        </main>
        <div
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full flex justify-center cursor-pointer"
        >
          <FaAngleDown className="text-cyan-400 text-4xl animate-bounce" />
        </div>
      </div>
    );
  };

 
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Full radial gradient background fading to black */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_20%,_#000000_40%)]" />
      </div>

      {/* Sections */}
      <HeroSection />
        {/* Our Services Section */}
      <div ref={servicesRef}>
        <OurServices />
      </div>
    </div>
  );
}
