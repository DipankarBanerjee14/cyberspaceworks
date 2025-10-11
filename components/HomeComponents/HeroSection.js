"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaLaptopCode, FaMobileAlt, FaCode, FaPalette, FaBullhorn, FaBrush } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

export default function HomePage() {
  // HeroSection Component
  const HeroSection = () => {
    const canvasRef = useRef(null);

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
            Discover endless possibilities <br />
            in the world of{" "}
            <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              Cyber-space
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
        </main>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full flex justify-center">
          <FaAngleDown className="text-cyan-400 text-4xl animate-bounce w-23" />
        </div>
      </div>
    );
  };

  // OurServices Component
  const OurServices = () => {
    const boxRefs = useRef([]);
    const chipRef = useRef(null);

    const boxColors = [
      [14, 116, 144],
      [21, 128, 61],
      [4, 120, 87],
      [15, 118, 110],
      [3, 105, 161],
      [29, 78, 216],
      [67, 56, 202],
    ];

    const services = [
      { icon: <FaLaptopCode size={38} />, title: "Web Development", desc: "Crafting responsive and dynamic websites tailored to your needs." },
      { icon: <FaMobileAlt size={38} />, title: "App Development", desc: "Building innovative and user-friendly mobile applications." },
      { icon: <FaCode size={38} />, title: "Software Development", desc: "Custom software solutions to optimize your business processes." },
      { icon: <FaPalette size={38} />, title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces." },
      { icon: <FaBullhorn size={38} />, title: "Digital Marketing", desc: "Boost your online presence with targeted marketing strategies." },
      { icon: <FaBrush size={38} />, title: "Graphic Design", desc: "Designing stunning visuals to enhance your brand identity." },
      { icon: <SiGoogleanalytics size={38} />, title: "Branding", desc: "Developing a unique brand identity that stands out in the market." },
    ];

    return (
      <section className="relative z-0 py-16 overflow-hidden max-w-7xl mx-auto">
        <div className="relative text-center z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
            Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} ref={(el) => (boxRefs.current[idx] = el)} className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414] 
                  shadow-[0_0_15px_rgba(${boxColors[idx][0]},${boxColors[idx][1]},${boxColors[idx][2]},0.3),inset_0_0_15px_rgba(${boxColors[idx][0]},${boxColors[idx][1]},${boxColors[idx][2]},0.05)]
                  backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 rounded-lg`}
                >
                  <div className="text-cyan-400 mb-2">{service.icon}</div>
                  <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div ref={chipRef} className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-black rounded-lg opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center text-cyan-300 text-lg font-semibold tracking-wide">
              Cyberspace Works
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Full radial gradient background fading to black */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_40%,_#000000_70%)]" />
      </div>

      {/* Sections */}
      <HeroSection />
    </div>
  );
}
