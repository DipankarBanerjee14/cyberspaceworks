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
} from "react-icons/fa";

export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Research and Analytics", href: "/services/research-and-analytics" },
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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 z-20">
        {/* Neon top strip */}
        <div className="relative h-[10px] bg-cyan-400">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="text-white">
          <div className="relative flex items-center justify-between h-[70px] px-4">
            {/* Left Hamburger Icon (Mobile & Tablet) */}
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
      <Image
        src="/logo.png"
        alt="Logo"
        width={180}
        height={70}
        className="h-25 w-auto"
        priority
      />
    </div>
  </Link>
</div>


            {/* Right Hamburger Icon (Mobile & Tablet) */}
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


            {/* Left Menu (Desktop) */}
            <ul className="hidden lg:flex space-x-6 font-bold px-6 py-1.5 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute left-1 ml-4 left-menu-container">
              <li className="relative group">
                <Link
                  href="/"
                  className="transition-colors duration-300 group-hover:text-cyan-400"
                >
                  Home
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>
              <li className="relative group">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="transition-colors duration-300 group-hover:text-cyan-400 flex items-center gap-1 cursor-pointer services-button"
                >
                  Services
                  <span className="text-xs mt-[2px]">
                    <FaAngleDown />
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
                <ul
                  className={`absolute left-0 mt-2 w-52 bg-black/90 border border-white/10 rounded-lg shadow-lg scale-95 transition-all duration-300 origin-top z-50 backdrop-blur-md ${
                    isServicesOpen ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {services.map((service) => (
                    <li key={service.name} className="relative group/submenu">
                      <Link
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="relative block px-4 py-2 text-sm text-white hover:text-cyan-400 transition-colors duration-200 group/submenu"
                      >
                        {service.name}
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover/submenu:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="/about"
                  className="transition-colors duration-300 group-hover:text-cyan-400"
                >
                  About
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>
              <li className="relative group">
                <Link
                  href="/contact"
                  className="transition-colors duration-300 group-hover:text-cyan-400"
                >
                  Contact
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-1 relative px-4 py-1 text-black cursor-pointer bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>

            {/* Right Menu - Icons (Desktop) */}
            <ul className="hidden lg:flex space-x-3 font-bold px-6 py-1 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute right-12 top-1/2 -translate-y-1/2 mr-4 right-menu-container">
              <div className="flex items-center space-x-3 mr-6">
                {socialLinks.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col items-center justify-center w-10 h-9"
                    title={item.name}
                  >
                    <Link
                      href={item.link}
                      className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>

            {/* Left Side Menu (Mobile & Tablet) */}
            <div
              className={`fixed top-[80px] left-0 h-full w-64 bg-black/90 border-r border-white/10 shadow-lg transform transition-transform duration-300 z-50 backdrop-blur-md left-menu-container ${
                isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden`}
            >
              <ul className="flex flex-col p-4 space-y-4">
                <li className="relative group">
                  <Link
                    href="/"
                    onClick={() => setIsLeftMenuOpen(false)}
                    className="transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    Home
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </li>
                <li className="relative group">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsServicesOpen(!isServicesOpen);
                    }}
                    className="transition-colors duration-300 group-hover:text-cyan-400 flex items-center gap-1 services-button"
                  >
                    Services
                    <span className="text-xs mt-[2px]">
                      <FaAngleDown />
                    </span>
                  </button>
             <ul className={`mt-2 space-y-2 pl-4 ${isServicesOpen ? "block" : "hidden"}`}>
  {services.map((service) => (
    <li key={service.name} className="relative group/submenu">
      <Link
        href={service.href} // Changed from service.link to service.href
        onClick={() => {
          setIsLeftMenuOpen(false);
          setIsServicesOpen(false);
        }}
        className="block text-sm text-white hover:text-cyan-400 transition-colors duration-200"
      >
        {service.name}
      </Link>
    </li>
  ))}
</ul>
                </li>
                <li className="relative group">
                  <Link
                    href="/about"
                    onClick={() => setIsLeftMenuOpen(false)}
                    className="transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    About
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </li>
                <li className="relative group">
                  <Link
                    href="/contact"
                    onClick={() => setIsLeftMenuOpen(false)}
                    className="transition-colors duration-300 group-hover:text-cyan-400"
                  >
                    Contact
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </li>
                <li>
                  <Link
                    href="/quote"
                    onClick={() => setIsLeftMenuOpen(false)}
                    className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Side Menu (Mobile & Tablet) */}
            <div
              className={`fixed top-[80px] right-0 h-full w-64 bg-black/90 border-l border-white/10 shadow-lg transform transition-transform duration-300 z-50 backdrop-blur-md right-menu-container ${
                isRightMenuOpen ? "translate-x-0" : "translate-x-full"
              } lg:hidden`}
            >
              <ul className="flex flex-col p-4 space-y-4">
                {socialLinks.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center space-x-2"
                    title={item.name}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setIsRightMenuOpen(false)}
                      className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer"
                    >
                      {item.icon}
                    </Link>
                    <Link
                      href={item.link}
                      onClick={() => setIsRightMenuOpen(false)}
                      className="text-white hover:text-cyan-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}