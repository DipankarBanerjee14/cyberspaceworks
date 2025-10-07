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
    background: `radial-gradient(320px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.25), transparent 55%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  const features = [
    {
      code: "01/",
      title: "Configure Tasks Integrations",
      description:
        "Connect your systems. Vortasky AI handles everything from task creation to completion.",
    },
    {
      code: "02/",
      title: "Effortless Conversation Automation",
      description:
        "Stay engaged 24/7 with customers through AI-driven auto responses and smart inquiry labeling.",
    },
    {
      code: "03/",
      title: "Shape Your AI to Reflect How You Work",
      description:
        "With Vortasky AI, each team member can build a virtual assistant that mirrors their style and voice.",
    },
    {
      code: "04/",
      title: "Set a New Standard in Service Excellence",
      description:
        "Vortasky AI ensures fast, high-quality responses for consistently exceptional service.",
    },
  ];

  return (
    <main
      className=" relative overflow-hidden"
      style={{ background: "#000000" }} // black background
    >
      {/* Cyan blurred background glow */}
      {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[1000px] h-[500px] rounded-full blur-[300px] bg-[#0ebac7] opacity-20" />
      </div> */}

      {/* Radial backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 40%)",
        }}
      />

      {/* spotlight following cursor (optional, uncomment if needed) */}
      {/* <div
        className="absolute inset-0 pointer-events-none spotlight"
        style={spotlightStyle}
      /> */}

      {/* How We Do It Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">How We Do It</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden group text-left shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,150,255,0.5)]"
              >
                {/* blue → white glow behind each card */}
                <div
                  className="absolute -inset-20 blur-[150px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.6) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <p className="text-gray-400 text-sm mb-2">{feature.code}</p>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">
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
