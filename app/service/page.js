"use client";
import { FaLaptopCode, FaMobileAlt, FaCode, FaPalette, FaBullhorn, FaBrush, FaQuoteLeft } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import Testimonials from "@/components/HomeComponents/Testimonial";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  // ✅ Services Data with href
  const services = [
    { name: "Web Development", icon: <FaLaptopCode size={32} />, desc: "Crafting high-performance, visually stunning websites tailored for your business.", href: "/services/web-development" },
    { name: "App Development", icon: <FaMobileAlt size={32} />, desc: "Building intuitive, scalable, and engaging mobile app experiences for businesses.", href: "/services/app-development" },
    { name: "Software Development", icon: <FaCode size={32} />, desc: "Custom software solutions engineered to streamline operations and drive growth.", href: "/services/software-development" },
    { name: "UI/UX Design", icon: <FaPalette size={32} />, desc: "Designing sleek, user-focused interfaces that enhance experience and usability.", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", icon: <FaBullhorn size={32} />, desc: "Boosting brand visibility and engagement through strategic online campaigns.", href: "/services/digital-marketing" },
    { name: "Graphic Design", icon: <FaBrush size={32} />, desc: "Transforming ideas into powerful visuals that leave a lasting impression.", href: "/services/graphic-design" },
    { name: "Research & Analytics", icon: <SiGoogleanalytics size={32} />, desc: "Delivering data-driven insights to fuel smarter decisions and business innovation.", href: "/services/research-and-analytics" },
  ];

  // ✅ Reusable Service Card
  const ServiceCardSketch = ({ icon, title, desc, href }) => (
    <div className="relative bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 p-6 rounded-2xl overflow-visible hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300 mt-6">
      {/* Top-left Icon Circle */}
      <div className="absolute -top-10 -left-2 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-cyan-800 shadow-lg">
        <div className="text-cyan-400">{icon}</div>
      </div>

      {/* Main Card Box */}
      <div className="my-10 py-6 px-3 bg-gray-800 border-4 border-cyan-800 rounded-3xl relative">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>

      {/* ✅ Bottom-right Arrow (Clickable Link) */}
      <Link href={href}>
        <svg
          className="absolute -bottom-1 -right-4 w-10 h-10 text-cyan-400 bg-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-800 shadow-lg cursor-pointer hover:bg-cyan-500/20 transition"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  return (
    <main className="bg-black text-white lg:pt-10 px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 items-center gap-10 relative bg-black/10 rounded-2xl shadow-lg">
          <section className="flex flex-col gap-4 lg:text-left text-center">
            <h1 className="text-4xl lg:text-5xl font-bold">
              We Build <span className="text-cyan-400">Brands</span> <br />
              That <span className="text-cyan-400">Stand Out</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </p>
            <div className="flex flex-row gap-2 justify-center lg:justify-start">
             <a href="tel:+917980715765">
  <button className="bg-cyan-500 text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-400 transition cursor-pointer">
    Book Free Call
  </button>
</a>

              
              <Link href="/contact-us"
               className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-full font-medium hover:bg-cyan-500 hover:text-black transition">
                Get Free Quote
              </Link>
            </div>
          </section>

          {/* Logo with Glow */}
          <div className="relative w-full h-80 lg:h-96 grid place-items-center">
            <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 animate-pulseGlow"></div>
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

       {/* Our Services Section */}
<section className="pt-10 pb-15">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-13">
    Our <span className="text-cyan-400">Services</span>
  </h2>

  {/* First Row - 4 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {services.slice(0, 4).map((service, index) => (
      <ServiceCardSketch
        key={index}
        icon={service.icon}
        title={service.name}
        desc={service.desc}
        href={service.href}
      />
    ))}
  </div>

  {/* Second Row - 3 Cards (Centered) */}
  <div className="mt-12 flex lg:flex-row flex-col justify-center gap-10 lg:max-w-5xl mx-auto lg:px-6 px-0">
    {services.slice(4).map((service, index) => (
      <div key={index}>
        <ServiceCardSketch
          icon={service.icon}
          title={service.name}
          desc={service.desc}
          href={service.href}
        />
      </div>
    ))}
  </div>
</section>


        <Testimonials />
      </div>
    </main>
  );
}
