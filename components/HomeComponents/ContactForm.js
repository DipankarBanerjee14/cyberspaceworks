"use client";

import React, { useState } from "react";

const TerritorySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91", // ✅ default country code
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
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMessage("✅ Thank you! Our team will contact you soon.");
      setFormData({
        name: "",
        email: "",
        contact: "",
        countryCode: "+91", // keep default
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
    <section className="relative py-20 bg-black text-white  px-6">
       <div
  className="absolute inset-0 pointer-events-none"
  aria-hidden
  style={{
    background:
      "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 40%)",
  }}
/>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
           
        {/* Header Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Know Your Territory <br /> Before The Hunt
          </h1>
          <p className="text-gray-300">
            Be aware of other &lsquo;predators&rsquo; & your strategy for a strike. <br />
            Organize, strategize, and delegate with precision.
          </p>
          <p className="text-gray-300">
            Fill the form below and let our Marketing team identify <br />
            your blue ocean strategy for a perfect take down.
          </p>
          <button
            type=""
            disabled={loading}
            className="py-2 px-8 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <div className="bg-cyan-400/80 rounded-xl p-6 sm:p-8 shadow-lg text-black">
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

              {/* ✅ Country Code + Contact */}
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

              {/* Message */}
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

export default TerritorySection;
