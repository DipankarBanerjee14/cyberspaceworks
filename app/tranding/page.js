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
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
        fall: Math.random() < 0.02, // chance of falling star
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
          // falling star
          star.y += star.speed * 6;
          star.x += star.speed * 2;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        } else {
          // slow drift
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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0d1b2a] to-black text-white">
      {/* Star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">CapiTradie</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full text-sm font-medium hover:text-blue-400">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg text-white font-medium">
            Start Free Trial
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
        {/* <div className="mb-6 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-medium shadow-md">
          ✨ New: Our AI integration just landed
        </div> */}

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover endless possibilities <br />
          in the world of{" "}
          <span className="text-blue-400">Trading</span>
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

        {/* Back Button */}
        <div className="mt-10">
          <Link href="/">
            <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition font-medium">
              ← Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}