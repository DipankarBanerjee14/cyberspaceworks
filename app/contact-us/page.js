"use client";

import React, { useState } from "react";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91",
    website: "",
    service: "Social Media Marketing",
    requirement: "",
    revenue: "Less than $5,000",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMessage("✅ Thank you! Our team will contact you soon.");
      setFormData({
        name: "",
        email: "",
        contact: "",
        countryCode: "+91",
        website: "",
        service: "Web Development",
        requirement: "",
        revenue: "Less than $5,000",
      });
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-black text-white px-6 overflow-hidden">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.35), transparent 40%)",
        }}
      />

      {/* Heading & Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Let's Transform Your <br/> Vision into Reality
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          We understand your idea and what it means to you. To make it a reality,
          our expert team will be happy to help you every step of the way.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Fill in the form below, and our team will send a detailed quotation
          including <span className="text-cyan-400 font-semibold">plans, strategies,</span> and{" "}
          <span className="text-cyan-400 font-semibold">cutting-edge technologies</span> —
          all at a price unmatched in the market.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto flex justify-center relative z-10">
        <div className="bg-cyan-400/80 rounded-xl p-6 sm:p-8 shadow-lg text-black w-full max-w-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                name="countryCode"
                placeholder="Country Code"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className="w-1/5 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact or WhatsApp Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-4/5 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-black font-medium">
                Service you&apos;re interested in
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option>Web Development</option>
                <option>App Development</option>
                <option>Software Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>Graphic Design</option>
                <option>Research and Analytics</option>
              </select>
            </div>

            <div>
              <textarea
                name="requirement"
                rows="4"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Briefly discuss your requirement"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-8 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            {message && (
              <p className="text-center text-sm mt-4 text-black font-medium">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mt-16 px-8">
        {/* Contact Info */}
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col gap-3 h-full">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
            Contact Information
          </h3>
          <p className="text-gray-300 font-bold">Cyberspace Works</p>
          <p className="text-gray-400 flex items-center gap-2">
            <IoCallOutline /> +91 7980715765
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <IoMailOutline /> cyberspaceworksofficial@gmail.com
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <IoLocationOutline /> Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
          </p>
          <p className="text-gray-400 mt-2 italic">
            “Unlock Your Potential with No-Code Solutions.”
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.5100779555523!2d88.33852777576645!3d22.64347642643196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dd56c959339%3A0x59f91e11a807e487!2sCyberspace%20Works%20-%20Website%2C%20Software%20and%20App%20Developer%20in%20Howrah%2C%20Kolkata!5e1!3m2!1sen!2sin!4v1760195925843!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
