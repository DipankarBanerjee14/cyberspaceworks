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
    icon: <FaPalette size={42} className="text-cyan-400" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
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
    <section className="relative z-10 py-16 px-4 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-wide">
          Our Services
        </h2>

        <div className="honeycomb">
          {services.map((service, index) => (
            <div key={index} className="hex group">
              <div
                className={`
                  clip-hexagon 
                  bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                  border border-white/10
                  shadow-[0_0_20px_rgba(0,255,255,0.15),inset_0_0_30px_rgba(255,255,255,0.05)]
                  flex flex-col items-center justify-center text-center
                  p-4 transition-all duration-500 ease-out
                  group-hover:border-cyan-400/60
                  group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.1)]
                `}
              >
                <div className="mb-2 text-cyan-400">{service.icon}</div>
                <h3 className="text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .honeycomb {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          gap: 10px;
        }

        .hex {
          width: 120px;
          height: 140px;
          margin: 5px;
          position: relative;
          transition: all 0.4s ease-in-out;
        }

        /* Offset every second hexagon */
        .hex:nth-child(odd) {
          margin-top: 70px;
        }

        @media (max-width: 768px) {
          .hex:nth-child(odd) {
            margin-top: 0;
          }
        }

        /* Main hex shape */
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          width: 150%;
          height: 150%;
          backdrop-filter: blur(12px);
        }

        
        .hex:hover {
          width: 150px;
          height: 170px;
        }
      `}</style>
    </section>
  );
};

export default OurServices;
