// app/tranding/page.js
"use client";
import React, { useEffect, useRef } from "react";
import OurServices from "@/components/OurServices.js";
import WhyChooseUs from "@/components/WhyChooseUs.js";
import AboutSection from "@/components/AboutSection.js";
import HowWeDoIt from "@/components/HowWeDoIt.js";
import Testimonial from "@/components/Testimonial.js";
import Dashboard from "@/components/Dasboard";
import Link from "next/link";

export default function TrandingPage() {
  const canvasRef = useRef(null);

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
    <div className="relative w-full h-screen overflow-y-auto text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_50%,_#000000_100%)]" />

      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Header / Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">CapiTradie</h1>
        <nav className="flex gap-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <Link href="/aboutus" className="text-sm font-medium px-3 py-1 rounded-full hover:text-blue-400 transition">
            About Us
          </Link>
          <Link href="/ourservices" className="text-sm font-medium px-3 py-1 rounded-full hover:text-blue-400 transition">
            Our Services
          </Link>
          <Link href="/contactus" className="text-sm font-medium px-3 py-1 rounded-full hover:text-blue-400 transition">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full text-sm font-medium hover:text-blue-400">Login</button>
          <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg text-white font-medium transition">Start Free Trial</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4 overflow-hidden">
        
        {/* 🌌 Cosmic Cloud Animation (Hero Section Only) */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 
            bg-[radial-gradient(ellipse_at_30%_40%,rgba(125,211,252,0.4)_0%,transparent_70%),radial-gradient(ellipse_at_70%_60%,rgba(147,51,234,0.3)_0%,transparent_70%),radial-gradient(ellipse_at_50%_50%,rgba(236,72,153,0.25)_0%,transparent_80%)] 
            bg-[length:200%_200%] blur-[120px] animate-hero-nebula"></div>
        </div> */}

        <div className="mb-6 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-medium shadow-md">
          ✨ New: Our AI integration just landed
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover endless possibilities <br />
          in the world of{" "}
          <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            Trading
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-gray-300">
          Step into the world of trading excellence and seize every opportunity
          with our advanced platform, expert guidance, and strategic insights
          for unrivaled financial success.
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

      <OurServices />
      <WhyChooseUs />
      <Dashboard/>
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />
    </div>
  );
}
