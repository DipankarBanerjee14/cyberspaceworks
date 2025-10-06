// app/tranding/page.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import OurServices from "@/components/OurServices.js";
import WhyChooseUs from "@/components/WhyChooseUs.js";
import AboutSection from "@/components/AboutSection.js";
import HowWeDoIt from "@/components/HowWeDoIt.js";
import Testimonial from "@/components/Testimonial.js";
import Dashboard from "@/components/Dasboard";
import Demo from "@/components/Demo.js";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function TrandingPage() {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
        fall: Math.random() < 0.02,
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      stars.forEach((star) => {
        ctx.moveTo(star.x, star.y);
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      });
      ctx.fill();
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
    <div className="relative max-w-7xl mx-auto overflow-y-auto text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_50%,_#000000_100%)]" />

      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
   

<nav className="relative w-full z-50 text-white mt-6">
  <div className="relative mx-auto w-[95%] md:w-[90%] border border-[#2b2b2b] bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_0_25px_rgba(140,0,255,0.2)]" style={{clipPath: "polygon(0% 0%, calc(50% - 110px) 0%, calc(50% - 75px) 25px, calc(50% + 75px) 25px, calc(50% + 110px) 0%, 100% 0%, 100% 100%, 0% 100%)", borderRadius: "12px"}}>
    <div className="flex justify-between items-center px-6 py-3 relative">
      <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-medium">
        {["Home", "About", "Live", "Contact Us"].map((item) => (
          <li key={item} className="relative group">
            <Link href="#" className="transition-colors duration-300 group-hover:text-purple-400">{item}</Link>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </li>
        ))}
      </ul>
      <div className="absolute left-1/2 -translate-x-1/2 -top-[2px] bg-[#0a0a0a] border border-[#2b2b2b] px-8 py-1.5 rounded-b-lg shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
      <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
        <span className="uppercase text-sm hidden md:inline">Menu</span>
        <FiMenu className="text-2xl text-purple-400" />
      </button>
    </div>
    <div className="md:hidden absolute right-6 mt-2 w-48 bg-[#0b0b0d]/95 border border-[#292929] rounded-lg backdrop-blur-md p-3 shadow-lg">
      <ul className="flex flex-col gap-3 text-gray-300">
        {["Home", "About", "Live", "Contact Us"].map((item) => (
          <li key={item}>
            <Link href="#" className="block px-3 py-2 rounded hover:bg-purple-500/10 transition">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4 overflow-hidden">
        <div className="mb-6 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-medium shadow-md">
          ✨ New: Our AI integration just landed
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover endless possibilities <br />
          in the world of{" "}
          <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">Trading</span>
        </h2>

        <p className="mt-4 max-w-2xl text-gray-300">
          Step into the world of trading excellence and seize every opportunity with our advanced platform,
          expert guidance, and strategic insights for unrivaled financial success.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg font-medium">
            Start Trading
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition font-medium">
            Try Demo
          </button>
        </div>

        <div className="mt-10">
          <Link href="/">
            <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition font-medium">
              ← Back to Home
            </button>
          </Link>
        </div>
      </main>

      <Demo />
      <OurServices />
      <WhyChooseUs />
      <Dashboard />
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />
    </div>
  );
}
