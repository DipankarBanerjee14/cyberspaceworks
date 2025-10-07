"use client";
import React from "react";
import { FaDollarSign, FaChartLine, FaExchangeAlt, FaLock, FaCogs, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaDollarSign size={30} />,
    title: "Instant Savings",
    description: "Get immediate savings on every purchase, powered by AI to optimize your transactions.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Real-Time Insights",
    description: "Make smarter decisions with live data and actionable insights, delivered in real-time.",
  },
  {
    icon: <FaExchangeAlt size={30} />,
    title: "Flexible Plans",
    description: "Choose plans that adapt to your business needs, offering scalability and cost-effectiveness.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Secure Transactions",
    description: "Prioritize safety with encryption and robust security features for every interaction.",
  },
  {
    icon: <FaCogs size={30} />,
    title: "Adaptive Features",
    description: "Leverage AI-driven features that evolve with your business for efficiency and innovation.",
  },
  {
    icon: <FaHeadset size={30} />,
    title: "Dedicated Support",
    description: "Access expert assistance 24/7 to ensure you’re never alone on your growth journey.",
  },
];

export default function GlassCards() {
  return (
    <section className="relative bg-black min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-12">Our Features</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-[2px] bg-gradient-to-b from-cyan-500/60 to-transparent overflow-hidden"
          >
            {/* Inner glass container */}
            <div className="relative bg-black/50 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
              {/* Icon */}
              <div className="text-cyan-400">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Bottom blur overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
