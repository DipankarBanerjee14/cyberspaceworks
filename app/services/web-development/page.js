"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaJs,
  FaCss3Alt,
  FaMobileAlt,
  FaWordpress,
  FaWix,
  FaGlobe,
  FaDraftingCompass,
  FaCube,
  FaPaintBrush,
  FaBolt,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import ServicesCircle from "@/components/Technology.js"; // ✅ import your reusable component

export default function WebDevelopment() {
  const subServices = [
    "React.js Development",
    "Next.js Development",
    "PHP Development",
    "WordPress Development",
    "MERN Stack Development",
    "Shopify Development",
  ];

  const useCases = [
    "E-commerce Platforms",
    "Real Estate Portals",
    "SaaS Products",
    "Corporate Websites",
    "Tourism & Hospitality",
    "Educational Portals",
  ];

  const technologies = [
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Express.js", icon: <FaCode size={22} /> },
    { name: "MongoDB", icon: <FaDatabase size={22} /> },
    { name: "Next.js", icon: <FaJs size={22} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={22} /> },
    { name: "React Native", icon: <FaMobileAlt size={22} /> },
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "PostgreSQL", icon: <FaDatabase size={22} /> },
    { name: "TypeScript", icon: <FaJs size={22} /> },
    { name: "WordPress", icon: <FaWordpress size={22} /> },
    { name: "Wix", icon: <FaWix size={22} /> },
    { name: "Webflow", icon: <FaGlobe size={22} /> },
    { name: "Framer", icon: <FaDraftingCompass size={22} /> },
    { name: "three.js", icon: <FaCube size={22} /> },
    { name: "GSAP", icon: <FaBolt size={22} /> },
    { name: "shadcn", icon: <FaPaintBrush size={22} /> },
    { name: "radix ui", icon: <FaDraftingCompass size={22} /> },
  ];

  const GlassCard = ({ title, description }) => (
    <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
      {/* Top-left cyan-400 glow */}
      <div
        className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
      />
      {/* Bottom-right indigo-400 glow */}
      <div
        className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
      />
      {/* Hover glow */}
      <div
        className="absolute -inset-20 blur-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
        }}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      {/* ------------------ DESCRIPTION ------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          At CSW, we craft high-performance, secure, and scalable web solutions
          tailored to your business goals. From custom-built websites to complex
          web applications, our focus is on innovation, performance, and seamless
          user experience across all devices.
        </p>
      </section>

      {/* ------------------ SUB-SERVICES ------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Sub-Service Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subServices.map((service, index) => (
            <GlassCard
              key={index}
              title={service}
              description={`Custom ${service.toLowerCase()} solutions optimized for speed, SEO, and scalability.`}
            />
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
            <GlassCard
              key={index}
              title={use}
              description={`We have helped clients in the ${use.toLowerCase()} industry build robust and scalable digital experiences.`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
