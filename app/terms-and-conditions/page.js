"use client";

import React from "react";


export default function TermsAndConditions() {
  const terms = [
    {
      title: "Introduction",
      description:
        "Welcome to CSW. By accessing our website and using our services, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.",
    },
    {
      title: "Services",
      description:
        "CSW provides Web Development, App Development, Software Development, UI/UX Design, Digital Marketing, Graphic Design, Research, and Analytics services. All services are subject to these Terms.",
    },
    {
      title: "User Responsibilities",
      description:
        "Users must provide accurate information and use our services responsibly. You must not misuse our services or attempt to gain unauthorized access.",
    },
    {
      title: "Payment and Billing",
      description:
        "All payments must be made according to the agreed terms. Late payments may incur additional fees. CSW reserves the right to suspend services for non-payment.",
    },
    {
      title: "Intellectual Property",
      description:
        "All intellectual property created by CSW, including code, designs, and content, remains the property of CSW unless explicitly transferred through a contract.",
    },
    {
      title: "Limitation of Liability",
      description:
        "CSW shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the services.",
    },
    {
      title: "Privacy Policy",
      description:
        "We respect your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.",
    },
    {
      title: "Changes to Terms",
      description:
        "CSW may update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.",
    },
    {
      title: "Governing Law",
      description:
        "These Terms are governed by the laws of the jurisdiction in which CSW operates. Any disputes will be resolved under these laws.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Please read these Terms and Conditions carefully before using CSW
          services. By accessing or using our services, you agree to be bound
          by these Terms.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-8">
        {terms.map((term, index) => (
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
            <h3 className="text-xl font-semibold mb-2">{term.title}</h3>
            <p className="text-gray-400 text-sm">{term.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
