"use client";
import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaTrademark,
} from "react-icons/fa";

export default function OurServices() {
  return (
    <section className="relative z-10 py-16 px-4 bg-black overflow-hidden max-w-7xl mx-auto">
      {/* Soft global teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-wide">
          Our Services
        </h2>

        {/* Wrapper for hexagons */}
        <div className="flex flex-col items-center space-y-10 md:space-y-0">
          {/* Top Row (3 hexagons) */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8">
            {/* 1️⃣ Web Development */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaLaptopCode size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">
                  Web Development
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Crafting responsive and dynamic <br/> websites tailored to your 
                </p>
              </div>
            </div>

            {/* 2️⃣ App Development */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaMobileAlt size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">
                  App Development
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Building innovative and user- <br/>friendly mobile applications.
                </p>
              </div>
            </div>

            {/* 3️⃣ Software Development */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaCode size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">
                  Software Development
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Custom software solutions to <br/> optimize your business processes.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row (4 hexagons) */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8">
            {/* 4️⃣ UI/UX Design */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaPalette size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">UI/UX Design</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Creating intuitive and visually <br/> appealing user interfaces.
                </p>
              </div>
            </div>

            {/* 5️⃣ Digital Marketing */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaBullhorn size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">
                  Digital Marketing
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Boost your online presence with <br/> targeted marketing strategies.
                </p>
              </div>
            </div>

            {/* 6️⃣ Graphic Design */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaBrush size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">Graphic Design</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Designing stunning visuals to <br/> enhance your brand identity.
                </p>
              </div>
            </div>

            {/* 7️⃣ Branding */}
            <div className="relative group w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20">
              <div
                className={`absolute inset-0 clip-hexagon 
                bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                backdrop-blur-xl flex flex-col items-center justify-center text-center px-4
                transition-all duration-500 ease-out group-hover:border-cyan-400/70
                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
              >
                <FaTrademark size={38} className="text-cyan-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">Branding</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  Developing a unique brand identity <br/> that stands out in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hexagon shape style */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
        }
      `}</style>
    </section>
  );
}
