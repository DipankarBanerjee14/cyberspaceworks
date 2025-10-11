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
      "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.45), transparent 40%)",
  }}
/>

     <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">

           
        {/* Form Section */}
        <div className="">
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
            {/* Header Section */}
      <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]  flex flex-col gap-3">
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-gray-300 font-bold">INNERAKTIVE</p>
            <p className="text-gray-400">📞 +971 50 344 3460</p>
            <p className="text-gray-400">✉️ hello@inneraktive.com</p>
            <p className="text-gray-400">
              🏢 Floor 8, Building 4, One Central, DWTC Dubai, UAE
            </p>
            <p className="text-gray-400 mt-2">
              Unlock Your Potential with no-code Solutions
            </p>
          </div>
      </div>
          {/* Map */}
        <div className="m-12 w-full h-[450px] max-w-6xl mx-auto">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.5100779555523!2d88.33852777576645!3d22.64347642643196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dd56c959339%3A0x59f91e11a807e487!2sCyberspace%20Works%20-%20Website%2C%20Software%20and%20App%20Developer%20in%20Howrah%2C%20Kolkata!5e1!3m2!1sen!2sin!4v1760195925843!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
    </section>
  );
};

export default TerritorySection;