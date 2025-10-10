"use client";

import React from "react";
import ServicesCircle from "@/components/Technology.js"; // optional if you want to include icons

export default function PrivacyPolicy() {
  const policies = [
    {
      title: "Introduction",
      description:
        "At CSW, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.",
    },
    {
      title: "Information We Collect",
      description:
        "We may collect personal information such as your name, email address, phone number, and other details you provide when contacting us or using our services.",
    },
    {
      title: "Use of Information",
      description:
        "We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. We do not sell your information to third parties.",
    },
    {
      title: "Cookies and Tracking",
      description:
        "We may use cookies and similar technologies to enhance your experience on our website, analyze trends, and gather demographic information about our users.",
    },
    {
      title: "Data Protection",
      description:
        "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.",
    },
    {
      title: "Third-Party Services",
      description:
        "We may use trusted third-party service providers to support our services. These providers have access to your data only to perform tasks on our behalf and are obligated to protect it.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, update, or delete your personal information. You may also opt out of communications or request restrictions on data processing by contacting us.",
    },
    {
      title: "Changes to This Policy",
      description:
        "CSW may update this Privacy Policy from time to time. Continued use of our services after changes constitutes acceptance of the updated policy.",
    },
    {
      title: "Contact Us",
      description:
        "For questions or concerns regarding this Privacy Policy, please contact us at info@csw.com or through our contact page.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      {/* ------------------ HEADER ------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Protecting your personal information is our top priority. Please read
          this Privacy Policy carefully to understand how we handle your data.
        </p>
      </section>

      {/* ------------------ POLICY CARDS ------------------ */}
      <section className="max-w-6xl mx-auto grid gap-8">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
          >
            <div
              className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
              }}
            />
            <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
            <p className="text-gray-400 text-sm">{policy.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
