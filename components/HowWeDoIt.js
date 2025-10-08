"use client";
import React from "react";
import {
  FaLayerGroup,
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

export default function ITSupportSection() {
  return (
    <section className="relative bg-black text-white py-16 px-6 max-w-6xl mx-auto z-0">
      {/* Headings */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
         How We Do It
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          We solve, automate, and support your tech from day one to never-let-you-down.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 text-center md:text-left mb-20">
{/* Center Glowing Logo */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
  <div className="relative w-40 h-40 flex items-center justify-center rounded-full">
    
    {/* Animated Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 rounded-full 
      animate-pulseGlow">
    </div>

    {/* Inner Circle */}
    <div className="relative w-32 h-32 bg-black border border-gray-700 rounded-full flex items-center justify-center text-white font-semibold tracking-widest">
      <img src="/logo2.png" alt="Logo" className="h-25 w-auto" />
    </div>
  </div>
</div>

{/* Divider Lines */}

{/* Vertical Line — gradient from center to top & bottom */}
<div
  className="absolute left-1/2 top-0 bottom-0 w-[1.5px] z-0 
    bg-gradient-to-b from-transparent via-gray-500 to-transparent"
/>

{/* Horizontal Line — gradient from center to left & right */}
<div
  className="absolute top-1/2 left-0 right-0 h-[1px] z-0 
    bg-gradient-to-r from-transparent via-gray-500 to-transparent " 
/>


        {/* Top Left */}
        <div className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto">
           <h3 className="absolute -top-10 -left-6 md:-left-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600">
            01
          </h3>
          <FaLayerGroup className="text-4xl text-cyan-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">
            Stack Audit & Assessment
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We audit your systems, find what’s broken or bloated, and identify
            exactly what’s slowing you down. No fluff. Just facts.
          </p>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-center  text-center relative z-10 max-w-3xl mx-auto">
          <h3 className="absolute -top-10 -right-6 md:-right-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600">
            02
          </h3>
          <FaCogs className="text-4xl text-cyan-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">
            Custom Strategy & Solution Design
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We build a clear plan with tools, automations, and support aligned
            to your workflow. Smart, scalable, and future-ready.
          </p>
        </div>

        {/* Bottom Left */}
        <div className="flex flex-col items-center text-center  relative z-10 max-w-3xl mx-auto">
          <h3 className="absolute bottom-30 -left-6 md:-left-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600">
            03
          </h3>
          <FaProjectDiagram className="text-4xl text-cyan-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">
            Full Setup & Seamless Integration
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We deploy your stack, integrate it all, and keep it running smooth
            with zero surprises and documented support.
          </p>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-center text-center  relative z-10 max-w-3xl mx-auto">
         <h3 className="absolute bottom-30 -right-6 md:-right-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600">
            04
          </h3>
          <FaChartLine className="text-4xl text-cyan-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">
            Monitor, Optimize, and Scale
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We don’t disappear. We track, tweak, and improve your stack as you
            grow, all under flat fee support.
          </p>
        </div>
      </div>
    </section>
  );
}
