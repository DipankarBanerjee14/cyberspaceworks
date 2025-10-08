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

const VortaskyAISection = () => {
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
    <main
      className=" relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* soft global purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.18), transparent 60%)",
        }}
      />

      {/* radial backdrop glow - updated with purple gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.18), transparent 60%)",
        }}
      />

     
      {/* Vortasky AI Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Us
          </h2>

          {/* Top Row - Single Card */}
          <div className="mb-12">
            <div className="relative rounded-2xl p-8 bg-gradient-to-b from-transparent via-purple-800/60 to-white backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
              {/* purple → white glow - enhanced on hover */}
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(147,51,234,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Vortasky Intelligent Routing That Delivers
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Automatically route conversations to the right agent or
                    department—no delays, no confusion.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-2 rounded shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 w-fit">
                    Get Started →
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4 rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10">
                    <FaBrain className="mx-auto mb-1 text-white" size={24} />
                    <p className="text-white font-semibold">
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
                      d="M128 0 V32 M64 32 H192 M64 32 V64 M128 32 V64 M192 32 V64"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="flex justify-around w-full gap-4">
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaQuestionCircle
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Help Centre</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaEnvelope
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Email Marketing</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaHeadset
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Preferred Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mission",
                desc: "Deliver personalized experiences by speaking every customer's language.",
                languages: ["English", "Spanish", "Bangla"],
                avatars: true,
              },
              {
                title:
                  "Vission",
                desc: "Vortasky AI remembers and understands conversation context to deliver truly personalized experiences.",
                highlight: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 bg-gradient-to-b from-transparent via-purple-800/60 to-white backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
              >
                {/* purple → white glow - enhanced on hover */}
                <div
                  className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(147,51,234,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center w-full">
                  {item.title && (
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {item.title}
                    </h3>
                  )}
                  {item.desc && (
                    <p className="text-gray-300 mb-4 text-center">
                      {item.desc}
                    </p>
                  )}
                  {item.languages && (
                    <div className="space-y-2 mb-4 w-full max-w-xs">
                      {item.languages.map((lang, j) => (
                        <div
                          key={j}
                          className="bg-black/60 p-2 rounded text-gray-300 text-center flex justify-between items-center border border-white/10"
                        >
                          {lang}
                          <span>▼</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!item.languages && (
                    <div className="relative w-full h-40 mt-4">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="25%"
                          y1="10%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="75%"
                          y1="10%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="20%"
                          y1="90%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="80%"
                          y1="90%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                      </svg>
                      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaDatabase
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">
                            User Experience
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 transform translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaCheckCircle
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">Final Result</p>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <FaBrain className="mx-auto text-white" size={40} />
                      </div>
                      <div className="absolute bottom-0 right-0 transform -translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaArrowRight
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">Data Infoflow</p>
                        </div>
                      </div>
                      <div className="absolute top-0 right-1/4 transform translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaBrain
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">
                            AI Knowledge
                          </p>
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

export default VortaskyAISection;