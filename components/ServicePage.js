"use client";
import React from "react";
import GlassCard from "@/components/GlassCard";
import SectionLayout from "@/components/SectionLayout";
import Technologies from "@/components/Technology"; // Ensure correct import

const ServicePage = ({ title, description, subServices, useCases, technologies }) => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-26 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 85%, rgba(14,186,199,0.45), transparent 30%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.45), transparent 25%)",
        }}
      />
      {/* -------- DESCRIPTION -------- */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
      </section>

      {/* -------- SUB SERVICES -------- */}
      <SectionLayout
        title="Sub-Service Offerings"
        items={subServices}
        renderItem={(service, i) => (
          <GlassCard
            key={i}
            title={service}
            description={`Custom ${service.toLowerCase()} solutions optimized for performance and scalability.`}
          />
        )}
      />

      {/* -------- TECHNOLOGIES -------- */}
      <Technologies technologies={technologies} /> {/* Use Technologies directly */}

      {/* -------- USE CASES -------- */}
      <SectionLayout
        title="Use Cases"
        items={useCases}
        renderItem={(use, i) => (
          <GlassCard
            key={i}
            title={use}
            description={`We help clients in ${use.toLowerCase()} achieve exceptional results through tailored digital solutions.`}
          />
        )}
      />
    </div>
  );
};

export default ServicePage;