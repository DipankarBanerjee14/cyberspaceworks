"use client";

import React from "react";
import {
  FaFigma,
  FaSketch,
  FaPaintBrush,
  FaDraftingCompass,
  FaPenNib,
} from "react-icons/fa";
import ServicesCircle from "@/components/Technology.js";

export default function UiUxDesign() {
  const subServices = [
    "UI/UX Design",
    "Prototyping",
    "Wireframing",
    "User Research",
    "Interaction Design",
    "Usability Testing",
  ];

  const useCases = [
    "Mobile App Interfaces",
    "Web Interfaces",
    "SaaS Dashboards",
    "E-commerce UX",
    "Enterprise Portals",
    "Game UI Design",
  ];

  const technologies = [
    { name: "Figma", icon: <FaFigma size={22} /> },
    { name: "Sketch", icon: <FaSketch size={22} /> },
    { name: "Adobe XD", icon: <FaPaintBrush size={22} /> },
    { name: "InVision", icon: <FaDraftingCompass size={22} /> },
    { name: "Framer", icon: <FaDraftingCompass size={22} /> },
    { name: "Zeplin", icon: <FaPenNib size={22} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      {/* ------------------ DESCRIPTION ------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">UI/UX Design</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          At CSW, we create intuitive and visually stunning user interfaces that enhance user satisfaction. Our UI/UX design services focus on usability, aesthetics, and seamless interactions.
        </p>
      </section>

      {/* ------------------ SUB-SERVICES ------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Sub-Service Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subServices.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-400 text-sm">
                Crafting {service.toLowerCase()} for engaging user experiences.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ TECHNOLOGIES (Reusable Component) ------------------ */}
      <ServicesCircle
        title="Technologies We Use"
        items={technologies}
        centerLogo="/logo2.png"
      />

      {/* ------------------ USE CASES ------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Use Cases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((use, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{use}</h3>
              <p className="text-gray-400 text-sm">
                Enhancing {use.toLowerCase()} with intuitive and beautiful designs.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}