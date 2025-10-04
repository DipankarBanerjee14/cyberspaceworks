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

const services = [
  {
    icon: <FaPalette size={42} className="text-cyan-400" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
  },
  {
    icon: <FaLaptopCode size={42} className="text-cyan-400" />,
    title: "Web Development",
    description:
      "Crafting responsive and dynamic websites tailored to your business needs.",
  },
  {
    icon: <FaMobileAlt size={42} className="text-cyan-400" />,
    title: "App Development",
    description: "Building innovative and user-friendly mobile applications.",
  },
  {
    icon: <FaCode size={42} className="text-cyan-400" />,
    title: "Software Development",
    description:
      "Custom software solutions to optimize your business processes.",
  },
  {
    icon: <FaBullhorn size={42} className="text-cyan-400" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence with targeted marketing strategies.",
  },
  {
    icon: <FaBrush size={42} className="text-cyan-400" />,
    title: "Graphic Design",
    description: "Designing stunning visuals to enhance your brand identity.",
  },
  {
    icon: <FaTrademark size={42} className="text-cyan-400" />,
    title: "Branding",
    description:
      "Developing a unique brand identity that stands out in the market.",
  },
];

const OurServices = () => {
  return (
    <section className="relative z-10 py-20 px-4 bg-black overflow-hidden">
         {/* Soft global teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-wide">
          Our Services
        </h2>

        <div className="flex flex-col items-center">
          {/* Top Row (3 hexagons) */}
          <div className="flex gap-8 mb-[-45px]">
            {services.slice(0, 3).map((service, idx) => (
              <HexCard key={idx} {...service} />
            ))}
          </div>

          {/* Bottom Row (4 hexagons) */}
          <div className="flex gap-8 mt-0">
            {services.slice(3, 7).map((service, idx) => (
              <HexCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HexCard = ({ icon, title, description }) => {
  return (
    <div
      className="relative group w-[170px] h-[195px] transition-transform duration-500 ease-out hover:scale-[1.2] hover:z-20"
      style={{ transformOrigin: "center" }}
    >
      <div
        className={`absolute inset-0 clip-hexagon 
          bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
          border border-white/10
          shadow-[0_0_15px_rgba(0,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
          backdrop-blur-xl
          transition-all duration-500 ease-out
          flex flex-col items-center justify-center text-center
          px-4
          group-hover:border-cyan-400/70
          group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]`}
      >
        <div className="mb-2">{icon}</div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-gray-400 mt-1 leading-tight">{description}</p>
      </div>

      {/* Hexagon Shape */}
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
    </div>
  );
};

export default OurServices;
