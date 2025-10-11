"use client";
import React, { useState, useEffect } from "react";
import { IoReorderThree } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaAngleDown,
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaPalette,
  FaChartLine,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Web Development", icon: <FaCode />, subtext: "Custom, scalable web apps", href: "/services/web-development" },
    { name: "App Development", icon: <FaMobileAlt />, subtext: "iOS & Android native solutions", href: "/services/app-development" },
    { name: "Software Development", icon: <FaDesktop />, subtext: "Tailored enterprise solutions", href: "/services/software-development" },
    { name: "UI/UX Design", icon: <FaPalette />, subtext: "Designs that convert users", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", icon: <FaChartLine />, subtext: "Boost your brand visibility", href: "/services/digital-marketing" },
    { name: "Graphic Design", icon: <FaPaintBrush />, subtext: "Creative branding visuals", href: "/services/graphic-design" },
    { name: "Research & Analytics", icon: <FaSearch />, subtext: "Data-driven insights", href: "/services/research-and-analytics" },
  ];

  const socialLinks = [
    { name: "Call", icon: <FaPhoneAlt />, link: "tel:+1234567890" },
    { name: "Mail", icon: <FaEnvelope />, link: "mailto:contact@example.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/1234567890" },
    { name: "Location", icon: <FaMapMarkerAlt />, link: "https://maps.google.com" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/example" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/company/example" },
    { name: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com/example" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const leftMenu = document.querySelector(".left-menu-container");
      const rightMenu = document.querySelector(".right-menu-container");
      const leftButton = document.querySelector(".left-hamburger");
      const rightButton = document.querySelector(".right-hamburger");
      const servicesButton = document.querySelector(".services-button");

      if (
        !leftMenu?.contains(event.target) &&
        !rightMenu?.contains(event.target) &&
        !leftButton?.contains(event.target) &&
        !rightButton?.contains(event.target) &&
        !servicesButton?.contains(event.target)
      ) {
        setIsLeftMenuOpen(false);
        setIsRightMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    const handleScroll = () => setIsServicesOpen(false);

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 z-20">
        <div className="relative h-[10px] bg-cyan-400">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
          </div>
        </div>

        <nav className="text-white">
          <div className="relative flex items-center justify-between h-[70px] px-4">
            
            {/* Left Hamburger */}
            <div className="lg:hidden flex items-center left-hamburger">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLeftMenuOpen(!isLeftMenuOpen);
                  setIsRightMenuOpen(false);
                  setIsServicesOpen(false);
                }}
                className="text-3xl text-cyan-400"
              >
                <IoReorderThree />
              </button>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] flex items-center justify-center">
              <Link href="/">
                <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={180} height={70} className="h-25 w-auto" priority />
                </div>
              </Link>
            </div>

            {/* Right Hamburger */}
            <div className="lg:hidden flex items-center right-hamburger absolute right-10 top-1/2 -translate-y-1/2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRightMenuOpen(!isRightMenuOpen);
                  setIsLeftMenuOpen(false);
                  setIsServicesOpen(false);
                }}
                className="text-3xl text-cyan-400"
              >
                <IoReorderThree />
              </button>
            </div>

            {/* Left Menu */}
            <ul className="hidden lg:flex space-x-6 font-bold px-6 py-1.5 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute left-1 ml-4 left-menu-container">
              
              <li className="relative group">
                <Link href="/" className="transition-colors duration-300 group-hover:text-cyan-400">
                  Home
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(window.servicesTimeout);
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  window.servicesTimeout = setTimeout(() => setIsServicesOpen(false), 250);
                }}
              >
                <button
                  className="transition-colors duration-300 hover:text-cyan-400 flex items-center gap-1 cursor-pointer services-button"
                >
                  Services
                  <span className="text-xs mt-[2px] animate-bounce">
                    <FaAngleDown />
                  </span>
                </button>

                {isServicesOpen && (
                  <div
                    onMouseEnter={() => clearTimeout(window.servicesTimeout)}
                    onMouseLeave={() => {
                      window.servicesTimeout = setTimeout(() => setIsServicesOpen(false), 250);
                    }}
                    className="absolute left-0 mt-3 w-[900px] bg-[#161320]/95 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 origin-top z-50 backdrop-blur-lg flex overflow-hidden p-6 animate-fadeIn"
                  >
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 transform hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] ${
                            index === 6 ? "col-span-1" : ""
                          }`}
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 border border-white/10 text-xl text-cyan-400">
                            {service.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">{service.name}</p>
                            <p className="text-gray-400 text-xs">{service.subtext}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li className="relative group">
                <Link href="/about" className="transition-colors duration-300 group-hover:text-cyan-400">
                  About
                </Link>
              </li>
              <li className="relative group">
                <Link href="/contact" className="transition-colors duration-300 group-hover:text-cyan-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>

            {/* Right Menu - Social */}
            <ul className="hidden lg:flex space-x-3 font-bold px-6 py-1 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute right-12 top-1/2 -translate-y-1/2 mr-4 right-menu-container">
              <div className="flex items-center space-x-3 mr-6">
                {socialLinks.map((item) => (
                  <li key={item.name} className="flex flex-col items-center justify-center w-10 h-9" title={item.name}>
                    <Link href={item.link} className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer">
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
