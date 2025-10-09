"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function TrandingPage() {
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
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Fixed Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-transparent to-black opacity-30 mix-blend-screen animate-gradientShift" />
      </div>

      {/* Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Hero Content */}
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
    </div>
  );
}