"use client";

import React from "react";
import {
  FaReact,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaDatabase,
  FaJs,
  FaCode,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import ServicesCircle from "@/components/Technology.js";

export default function AppDevelopment() {
  const subServices = [
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Development",
    "Flutter Development",
    "React Native Development",
    "Mobile Backend Development",
  ];

  const useCases = [
    "E-commerce Apps",
    "Healthcare Apps",
    "Fitness & Wellness",
    "Social Networking",
    "On-Demand Services",
    "Gaming Apps",
  ];

  const technologies = [
    { name: "React Native", icon: <FaReact size={22} /> },
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "Swift", icon: <FaApple size={22} /> },
    { name: "Kotlin", icon: <FaAndroid size={22} /> },
    { name: "Firebase", icon: <FaDatabase size={22} /> },
    { name: "TypeScript", icon: <FaJs size={22} /> },
    { name: "GraphQL", icon: <FaCode size={22} /> },
    { name: "SQLite", icon: <FaDatabase size={22} /> },
    { name: "Dart", icon: <FaCode size={22} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      {/* ------------------ DESCRIPTION ------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">App Development</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          At CSW, we build innovative and user-friendly mobile applications for iOS, Android, and cross-platform environments. Our apps are designed for performance, scalability, and seamless user experiences across devices.
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
                High-performance {service.toLowerCase()} solutions for modern mobile experiences.
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
                Empowering {use.toLowerCase()} with engaging and scalable mobile solutions.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}