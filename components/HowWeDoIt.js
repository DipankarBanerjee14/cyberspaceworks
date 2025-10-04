"use client";
import React, { useEffect, useState } from "react";

const HowWeDoIt = () => {
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

  const features = [
    {
      code: "01/",
      title: "Configure Tasks Integrations",
      description: "Connect your systems. Vortasky AI handles everything from task creation to completion.",
    },
    {
      code: "02/",
      title: "Effortless Conversation Automation",
      description: "Stay engaged 24/7 with customers through AI-driven auto responses and smart inquiry labeling.",
    },
    {
      code: "03/",
      title: "Shape Your AI to Reflect How You Work",
      description: "With Vortasky AI, each team member can build a virtual assistant that mirrors their style and voice.",
    },
    {
      code: "04/",
      title: "Set a New Standard in Service Excellence",
      description: "Vortasky AI ensures fast, high-quality responses for consistently exceptional service.",
    },
  ];

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
      {/* <div
        className="absolute inset-0 pointer-events-none spotlight"
        style={spotlightStyle}
      /> */}

      {/* How We Do It Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">How We Do It</h2>
          {/* <h3 className="text-3xl font-bold text-white mb-12">Driven by Vortasky AI</h3> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group text-left"
              >
                {/* glow behind each card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-[140px] bg-[#0ebac7]/30"
                />
                <p className="text-gray-400 text-sm mb-2">{feature.code}</p>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#0ebac7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0ebac7]/80 transition">
              Get Started →
            </button>
            <button className="bg-transparent border border-[#0ebac7] text-[#0ebac7] px-6 py-3 rounded-full font-semibold hover:bg-[#0ebac7]/20 transition">
              Request a Demo →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeDoIt;