"use client";
import React, { useEffect, useState } from "react";
import PreciseGrid from "@/components/GridPattern.js";
import Link from "next/link";

export default function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCoords({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(320px at ${coords.x}px ${coords.y}px, rgba(14,186,199,0.35), transparent 55%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#0D2D2A" }}
    >
      {/* cyan blurred background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[100px] rounded-full blur-[200px] bg-[#0ebac7] opacity-100" />
      </div>

      {/* soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      {/* spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none spotlight"
        style={spotlightStyle}
      />

      {/* SVG Grid */}
      <PreciseGrid />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center min-h-screen px-6 py-32">
        <div className="max-w-3xl">
          <h1
            className="text-5xl font-extrabold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Powerful design tools. Simple pricing.
          </h1>
          <p
            className="mt-6 text-lg"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Plans for teams of every size — from start-up to enterprise.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            {
              title: "Starter",
              price: "$0",
              desc: "Ideal for individuals who want to get started with simple design tasks.",
            },
            {
              title: "Pro",
              price: "$50",
              desc: "Enhanced design tools for scaling teams who need more flexibility.",
              highlight: true,
            },
            {
              title: "Advanced",
              price: "$85",
              desc: "Powerful tools designed for extensive collaboration and customization.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group"
            >
              {/* glow behind each card */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-[140px] ${
                  card.highlight ? "bg-[#0ebac7]/50" : "bg-[#0ebac7]/30"
                }`}
              />
              <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-4xl font-bold text-white">
                {card.price}
              </p>
              <p className="mt-4 text-gray-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-12">
          <Link href="/tranding">
            <button className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg font-medium text-white">
              Go to Tranding Page →
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}