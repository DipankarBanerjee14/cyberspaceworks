"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91",
    website: "",
    service: "Web Development",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          countryCode: "+91",
          website: "",
          service: "Web Development",
          requirement: "",
        });
      } else {
        setMessage(`❌ Failed: ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-black text-white px-6">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Header Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Let's <span className="text-cyan-400">Transform </span><br /> Your <span className="text-cyan-400">Vision</span> into Reality
          </h1>
          <p className="text-gray-300">
            We understand your idea and what it means <br /> to you.  To make it
            a reality, we&apos;ll be happy to help you.
          </p>
          <p className="text-gray-300">
            Fill in the form and let our team send a <br />quotation that  will
            include plans, <br />strategies and technologies with a  price like
            no other in the market.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <div className="bg-cyan-400/80 rounded-xl p-6 sm:p-8 shadow-lg text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
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

              {/* Country Code + Contact */}
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

              {/* Service Selection */}
              <div>
                <label className="block mb-1 text-sm text-black font-medium">
                  {"Service you're interested in"}
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

              {/* Requirement Textarea */}
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

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-8 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Response Message */}
              {message && (
                <p className="text-center text-sm mt-4 text-black font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
