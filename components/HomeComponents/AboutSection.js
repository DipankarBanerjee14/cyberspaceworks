"use client";
import React, { useEffect, useState } from "react";
import {
  FaBrain,
  FaDatabase,
  FaQuestionCircle,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const AboutSection = () => {
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
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(147,51,234,0.2), transparent 60%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  return (
    <main className="relative overflow-hidden" style={{ background: "#000000" }}>
      {/* soft global purple glow */}
     {/* <div
  className="absolute inset-0 pointer-events-none"
  aria-hidden
  style={{
    background:
      "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.18), transparent 60%)",
  }}
/> */}

 <div
  className="absolute inset-0 pointer-events-none"
  aria-hidden
  style={{
    background:
      "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 40%)",
  }}
/>


      {/* radial backdrop glow */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.18), transparent 60%)",
        }}
      /> */}

      {/* Vortasky AI Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Us
          </h2>

          {/* 🔹 Top Row - Purple → White */}
          <div className="mb-12">
            <div className="relative rounded-2xl p-8 bg-gradient-to-b from-cyan-900 via-cyan-700 to-cyan-400 backdrop-blur-xl  overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(0,255,255,0.6) 40%, transparent 70%)",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="flex flex-col text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Vortasky Intelligent Routing That Delivers
                  </h3>
                  <p className="text-gray-900 mb-4">
                    Automatically route conversations to the right agent or
                    department—no delays, no confusion.
                  </p>
                 <div className="w-full flex justify-center md:justify-start">
  <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-black px-4 py-2 rounded shadow-lg  hover:shadow-cyan-700/50 w-fit">
    Get Started →
  </button>
</div>

                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4 rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10">
                    <FaBrain className="mx-auto mb-1 text-black" size={24} />
                    <p className="text-gray-900 font-semibold">
                      Intelligent Routing
                    </p>
                  </div>
                  <svg
                    className="w-64 h-16 mb-4"
                    viewBox="0 0 256 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M128 0 V92 M4 32 H692 M4 32 V64 M128 32 V4 M255 32 V64"
                      stroke="black"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="flex justify-around w-full gap-4">
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaQuestionCircle
                        className="mx-auto mb-1 text-black"
                        size={24}
                      />
                      <p className="text-gray-900">Help Centre</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaEnvelope
                        className="mx-auto mb-1 text-black"
                        size={24}
                      />
                      <p className="text-gray-900">Email Marketing</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaHeadset
                        className="mx-auto mb-1 text-black"
                        size={24}
                      />
                      <p className="text-gray-900">Preferred Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Bottom Row - White → Cyan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mission",
                desc: "Deliver personalized experiences by speaking every customer's language.",
                languages: ["English", "Spanish", "Bangla"],
              },
              {
                title: "Vision",
                desc: "Vortasky AI remembers and understands conversation context to deliver truly personalized experiences.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 bg-gradient-to-b from-cyan-400 via-cyan-700 to-cyan-950 backdrop-blur-xl  overflow-hidden shadow-lg flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              >
                <div
                  className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(0,255,255,0.6) 40%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center w-full">
                  {item.title && (
                    <h3 className="text-xl font-semibold text-b;ack mb-3 text-center text-black">
                      {item.title}
                    </h3>
                  )}
                  {item.desc && (
                    <p className="text-gray-900 mb-4 text-center">
                      {item.desc}
                    </p>
                  )}
                  {item.languages && (
                    <div className="space-y-2 mb-4 w-full max-w-xs">
                      {item.languages.map((lang, j) => (
                        <div
                          key={j}
                          className="bg-black/60 p-2 rounded text-gray-200 text-center flex justify-between items-center border border-white/10"
                        >
                          {lang}
                          <span>▼</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!item.languages && (
                    <div className="relative w-full h-64 mt-4">
        {/* Connection Lines */}
  <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
    <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
    <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
    <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
  </svg>
                  {/* Center Brain */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <FaBrain className="mx-auto text-black" size={40} />
  </div>

  {/* Top Left - User Experience */}
  <div className="absolute top-[10%] left-[15%] transform -translate-x-1/2 text-center">
    <div className="rounded-lg bg-white/10 backdrop-blur-md p-3 border border-white/10">
      <FaDatabase className="mx-auto mb-1 text-black" size={24} />
      <p className="text-gray-900 text-sm">User Experience</p>
    </div>
  </div>

  {/* Top Right - AI Knowledge */}
  <div className="absolute top-[10%] right-[15%] transform translate-x-1/2 text-center">
    <div className="rounded-lg bg-white/10 backdrop-blur-md p-3 border border-white/10">
      <FaBrain className="mx-auto mb-1 text-black" size={24} />
      <p className="text-gray-900 text-sm">AI Knowledge</p>
    </div>
  </div>

  {/* Bottom Left - Final Result */}
  <div className="absolute bottom-[10%] left-[15%] transform -translate-x-1/2 text-center">
    <div className="rounded-lg bg-white/10 backdrop-blur-md p-3 border border-white/10">
      <FaCheckCircle className="mx-auto mb-1 text-black" size={24} />
      <p className="text-gray-900 text-sm">Final Result</p>
    </div>
  </div>

  {/* Bottom Right - Data Inflow */}
  <div className="absolute bottom-[10%] right-[15%] transform translate-x-1/2 text-center">
    <div className="rounded-lg bg-white/10 backdrop-blur-md p-3 border border-white/10">
      <FaArrowRight className="mx-auto mb-1 text-black" size={24} />
      <p className="text-gray-900 text-sm">Data Inflow</p>
    </div>
  </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;