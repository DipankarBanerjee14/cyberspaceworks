// components/AboutUs.jsx
"use client";

import React from "react";
import Image from "next/image";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import Link from "next/link";
const values = [
  {
    title: "Customer-Centric Approach",
    description:
      "We place our clients at the forefront, focusing on their unique needs and providing our efforts to ensure sustainable and long-term success.",
  },
  {
    title: "Collaboration",
    description:
      "We deeply value teamwork, collaboration, and collective effort, ensuring consistently aligned outcomes toward goals and excellence.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency guide every interaction we pursue to understand, acknowledge, and fulfill high ethical standards.",
  },
  {
    title: "Innovation",
    description:
      "We passionately implement creativity and unique top-selling strategies, technologies, and approaches that transform thinking and provide results.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our unwavering drive for excellence motivates us to consistently improve, innovate, and exceed expectations in every project we take on.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto ">
 {/* Hero Section */}
<div className="grid lg:grid-cols-2 items-center gap-10 relative bg-black/10 p-10 rounded-2xl shadow-lg">
  {/* Left Content */}
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl lg:text-5xl font-bold">
      Empowering Businesses <br /> Through Technology
    </h1>
    <p className="text-gray-300 mb-5">
      We provide end-to-end support and are committed to helping businesses achieve their goals efficiently.
    </p>
  <div>
  <Link
    href="/contact-us"
    className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg font-medium "
  >
    Contact Us
  </Link>
</div>

  </div>

  {/* Right Content / Logo */}
  <div className="relative w-full h-80 lg:h-96 grid place-items-center">
    {/* Glowing Circle */}
    <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 animate-pulseGlow"></div>

    {/* Inner Circle with Logo */}
    <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border border-gray-700 rounded-full flex items-center justify-center">
      <Image
        src="/logo2.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
      />
    </div>
  </div>
</div>
      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Value</h2>
        <p className="text-gray-400 text-center mb-12">
          As a company, we prioritize a customer-first mindset, innovation, and integrity. Through collaboration and commitment to excellence, <br/>  we deliver impactful solutions that exceed expectations.
        </p>
      
        {/* Top 3 Values with Skeleton Loader */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {values.slice(0, 3).map((val, idx) => (
            <div
              key={idx}
              className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] transition group overflow-hidden"
            >
              {/* Glows */}
              <div
                className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
              />
              <div
                className="absolute -inset-20 blur-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />

              <h3 className="font-semibold text-xl mb-2 relative z-10">{val.title}</h3>
              <p className="text-gray-400 relative z-10">{val.description}</p>

              {/* Skeleton Loader */}
              <div className="mx-auto w-full max-w-sm rounded-md p-4 mt-6">
                <div className="flex animate-pulse space-x-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>

                  {/* Lines */}
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-3 w-full rounded bg-gray-200"></div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-3 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-3 rounded bg-gray-200"></div>
                      </div>
                      <div className="h-3 w-full rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Values */}
        <div className="grid lg:grid-cols-2 gap-6">
              <div
         className="absolute inset-0 pointer-events-none"
  aria-hidden
  style={{
    background:
      "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 40%)",
  }}
/> 
          {values.slice(3).map((val, idx) => (
            <div
              key={idx}
              className="relative bg-gray-900 p-6 rounded-2xl shadow-lg transition group overflow-hidden hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
            >
              {/* Glows */}
              <div
                className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
              />
              <div
                className="absolute -inset-20 blur-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />

              <h3 className="font-semibold text-xl mb-2 relative z-10">{val.title}</h3>
              <p className="text-gray-400 relative z-10">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dubai Section */}
      {/* <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16 text-center">
        <p className="text-gray-400 mb-4">Proud that we are based in Dubai.</p>
        <div className="relative w-full h-64 lg:h-96">
          <Image src="/dubai-map.png" alt="Dubai Map" fill className="object-contain" />
        </div>
      </div> */}


{/* What We Do Section */}
<div className="max-w-6xl mx-auto px-6 lg:px-0 py-16 flex flex-col gap-10 items-start">
  {/* Left Content */}
  <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.35), transparent 40%)",
      }}
    />
    <h2 className="text-3xl font-semibold mb-4 text-white">
      Your Vision, Powered by Innovation.
    </h2>
    <p className="text-gray-400 mb-6">
      Discover the boundless potential of your online presence with Cyberspace Works – where innovation meets imagination, and web development is elevated to an art form. Our journey is fueled by innovation and guided by your unique goals. We believe in the power of collaboration, working closely with you to understand your needs and aspirations. Whether you’re a startup striving for a digital debut or an established business aiming to revamp your online presence, we are your trusted partner on this transformative journey. We’re not just here to build websites or apps; we’re here to build your success. At Cyberspace Works, we merge cutting-edge technology with visionary design to create web solutions that not only impress but also drive growth.
    </p>

    {/* Our Services Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[
        {
          title: "Web Development",
          icon: <FaLaptopCode className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Crafting high-performance, visually stunning websites tailored for your business.",
        },
        {
          title: "App Development",
          icon: <FaMobileAlt className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Building intuitive, scalable, and engaging mobile experiences.",
        },
        {
          title: "Software Development",
          icon: <FaCode className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Custom software solutions engineered to streamline operations and drive growth.",
        },
        {
          title: "UI/UX Design",
          icon: <FaPalette className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Designing sleek, user-focused interfaces that enhance experience and usability.",
        },
        {
          title: "Graphic Design",
          icon: <FaBrush className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Transforming ideas into powerful visuals that leave a lasting impression.",
        },
        {
          title: "Digital Marketing",
          icon: <FaBullhorn className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Boosting brand visibility and engagement through strategic online campaigns.",
        },
        {
          title: "Research & Analytics",
          icon: <SiGoogleanalytics className="text-cyan-400 text-4xl mb-3 mx-auto" />,
          desc: "Delivering data-driven insights to fuel smarter decisions and business innovation.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="box-bg bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur"
        >
          {service.icon}
          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
