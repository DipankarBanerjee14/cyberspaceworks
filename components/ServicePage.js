"use client";
import React from "react";
import GlassCard from "@/components/GlassCard";
import SectionLayout from "@/components/SectionLayout";
import Technologies from "@/components/Technology";
import Pattern from "@/components/Pattern"; 

const ServicePage = ({ title, description, subServices, useCases, technologies }) => {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 md:px-16 py-26 z-10 overflow-hidden">
      {/* --- FULL PAGE PATTERN --- */}
      
  <Pattern />

      {/* --- Radial Backgrounds --- */}
    
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 17%, rgba(14,186,199,0.45), transparent 20)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 70%, rgba(14,186,199,0.45), transparent 25%)",
        }}
      />

      {/* --- MAIN DESCRIPTION --- */}
      <section className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
      </section>

      {/* --- SUB-SERVICES --- */}
      <SectionLayout
        title="Service Offerings"
        items={subServices}
        renderItem={(service, i) => (
          <GlassCard key={i} title={service.title} description={service.description} />
        )}
      />


      {/* --- TECHNOLOGIES --- */}
      <Technologies technologies={technologies} />

      {/* --- USE CASES (conditionally rendered) --- */}
      {useCases && useCases.length > 0 && (
        <SectionLayout
          title="Use Cases"
          items={useCases}
          renderItem={(useCase, i) => (
            <GlassCard key={i} title={useCase.title} description={useCase.description} />
          )}
        />
      )}
    </div>
  );
};

export default ServicePage;
