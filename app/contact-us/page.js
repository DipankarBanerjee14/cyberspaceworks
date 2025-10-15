"use client";

import React, { useState } from "react";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91",
    service: "Web Development",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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
    <section className="relative py-30 bg-black text-white px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.35), transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Header Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Let&apos;s Transform <br /> Your Vision into Reality
          </h1>
          <p className="text-gray-300">
            We understand your idea and what it means to you. <br /> To make it
            a reality, we&apos;ll be happy to help you.
          </p>
          <p className="text-gray-300">
            Fill in the form and let our team send a quotation that <br /> will
            include plans, strategies and technologies with a <br /> price like
            no other in the market.
          </p>
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

      {/* Contact Info & Map */}
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mt-16 px-8">
      <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col gap-3 h-full hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
  {/* Gradient overlay — make sure it's visible */}
  {/* <div
    className="absolute inset-0 pointer-events-none z-0"
    aria-hidden="true"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 80%)",
    }}
  /> */}
 {/* Top-left cyan-400 glow */}
      <div
        className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
      />
      {/* Bottom-right indigo-400 glow */}
      <div
        className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40"
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
  {/* Content layered above the gradient */}
  <div className="relative z-10">
    <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
      Contact Information
    </h3>
    <p className="text-gray-300 font-bold">Cyberspace Works</p>

    {/* Phone */}
    <p className="text-gray-400 flex items-center gap-2 mt-3">
      <IoCallOutline />
      <a href="tel:+917980715765" className="hover:underline">
        +91 7980715765
      </a>
    </p>

    {/* Email */}
    <p className="text-gray-400 flex items-center gap-2 mt-3">
      <IoMailOutline />
      <a
        href="mailto:cyberspaceworksofficial@gmail.com"
        className="hover:underline"
      >
        cyberspaceworksofficial@gmail.com
      </a>
    </p>

    {/* Address */}
    <p className="text-gray-400 flex items-center gap-2 mt-3">
      <IoLocationOutline />
      <span>
        Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
      </span>
    </p>

    {/* Social Media Icons */}
    <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-cyan-400 text-lg sm:text-xl">
      <a
        href="https://www.facebook.com/profile.php?id=100086774724799"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href="https://www.instagram.com/cyberspaceworks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a href="https://wa.me/917980715765" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href="https://www.google.com/maps/place/Cyberspace+Works+-+Website,+Software+and+App+Developer+in+Howrah,+Kolkata/@22.6434765,88.3408238,716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89dd56c959339:0x59f91e11a807e487!8m2!3d22.6434765!4d88.3433987!16s%2Fg%2F11tfxl7lfx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href="https://www.linkedin.com/company/cyberspace-works"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
      </a>
    </div>
  </div>
</div>


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