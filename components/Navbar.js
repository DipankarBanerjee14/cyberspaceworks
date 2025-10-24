"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { IoReorderThree } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";  
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaAngleDown,
  FaAngleUp,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
} from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { HomeIcon, Cog6ToothIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SiGoogleanalytics } from "react-icons/si";

export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();

  // Services data
  const services = [
    { name: "Web Development", icon: <FaLaptopCode />, subtext: "Custom, scalable web apps", href: "/services/web-development" },
    { name: "App Development", icon: <FaMobileAlt />, subtext: "iOS & Android native solutions", href: "/services/app-development" },
    { name: "Software Development", icon: <FaCode />, subtext: "Tailored enterprise solutions", href: "/services/software-development" },
    { name: "UI/UX Design", icon: <FaPalette />, subtext: "Designs that convert users", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", icon: <FaBullhorn />, subtext: "Boost your brand visibility", href: "/services/digital-marketing" },
    { name: "Graphic Design", icon: <FaBrush />, subtext: "Creative branding visuals", href: "/services/graphic-design" },
    { name: "Research & Analytics", icon: <SiGoogleanalytics />, subtext: "Data-driven insights", href: "/services/research-and-analytics" },
  ];

  const socialLinks = [
    { name: "Call", icon: <FaPhoneAlt />, link: "tel:7980715765" },
    { name: "Mail", icon: <FaEnvelope />, link: "mailto:cyberspaceworksofficial@gmail.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/7980715765" },
    { name: "Location", icon: <FaMapMarkerAlt />, link: "https://www.google.com/maps/place/Cyberspace+Works" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/cyberspaceworks" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/cyberspace-works" },
    { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100086774724799" },
  ];

  // Close menus on outside click or scroll
  useEffect(() => {
    const handleClickOrTouchOutside = (event) => {
      const leftMenu = document.querySelector(".left-menu-container-mobile");
      const rightMenu = document.querySelector(".right-menu-container-mobile");
      const leftButton = document.querySelector(".left-hamburger");
      const rightButton = document.querySelector(".right-hamburger");

      if (
        !leftMenu?.contains(event.target) &&
        !rightMenu?.contains(event.target) &&
        !leftButton?.contains(event.target) &&
        !rightButton?.contains(event.target)
      ) {
        setIsLeftMenuOpen(false);
        setIsRightMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsLeftMenuOpen(false);
      setIsRightMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOrTouchOutside);
    document.addEventListener("touchstart", handleClickOrTouchOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOrTouchOutside);
      document.removeEventListener("touchstart", handleClickOrTouchOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Desktop Services dropdown hover
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };
const isActive = (href) => {
  const current = pathname ?? ""; // Safe fallback
  if (href === current) return true;
  if (href === "/services" && current.startsWith("/services")) return true;
  return false;
};


  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Neon top strip */}
        <div className="relative h-[10px] bg-cyan-400 lg:block hidden">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="text-white">
          <div className="relative flex items-center justify-between h-[70px] px-4">

            {/* Left Hamburger (Mobile) */}
            <div
              className="lg:hidden flex items-center left-hamburger fixed left-8 z-50 group bg-black/30 border border-white/10 shadow-xl rounded-md"
              onMouseEnter={() => {
                setIsLeftMenuOpen(true);
                setIsRightMenuOpen(false);
              }}
            >
              <button className="text-3xl text-cyan-400">
                <IoReorderThree />
              </button>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] items-center justify-center lg:block hidden">
              <Link href="/">
                <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={180} height={70} className="h-25 w-auto" priority />
                </div>
              </Link>
            </div>

            {/* Right Hamburger (Mobile) */}
            <div
              className="lg:hidden flex items-center right-hamburger absolute right-10 top-1/2 -translate-y-1/2 group bg-black/30 border border-white/10 shadow-xl rounded-md"
              onMouseEnter={() => {
                setIsRightMenuOpen(true);
                setIsLeftMenuOpen(false);
              }}
            >
              <button className="text-3xl text-cyan-400">
                <IoReorderThree />
              </button>
            </div>

            {/* Left Menu (Desktop) */}
            <ul className="hidden lg:flex space-x-6 font-bold px-6 py-1.5 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute left-3 ml-4 left-menu-container">
              <li className="relative group">
                <Link href="/" className={`transition-colors duration-300 ${isActive("/") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
                  Home
                </Link>
                <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
                  isActive("/") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
                }`}>
                </span>
              </li>

{/* service */}
<li className="relative group services-dropdown-container" 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>
  
  <Link 
    href="/service" 
    className={`flex items-center gap-1 transition-colors duration-300 ${
      pathname.startsWith("/service") ? "text-cyan-400" : "text-white hover:text-cyan-400"
    }`}>
    Services
    <span className="text-xs mt-[2px]">{isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
  </Link>

  {/* Underline: Solid when ANY /service* page */}
  <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
    pathname.startsWith("/service") 
      ? "bg-cyan-400 scale-x-100" 
      : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
  }`}>
  </span>

  {/* Dropdown */}
  <div className={`absolute left-0 w-[900px] rounded-xl bg-black backdrop-blur-xl border border-white/10 transition-all duration-300 ease-in-out origin-top z-[999] backdrop-filter mt-6 ${
    isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
  } flex overflow-hidden p-6`}>
                  <div className="absolute top-0 left-0 w-[300px] h-[300px] -translate-x-32 -translate-y-32 blur-[160px] opacity-60 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}></div>
                  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] translate-x-32 translate-y-32 blur-[160px] opacity-60 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}></div>

                  <div className="grid grid-cols-3 gap-6 w-full">
                    {services.map((service) => (
                      <Link key={service.name} href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 transform hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]">
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
              </li>

              <li className="relative group">
                <Link href="/about-us" className={`transition-colors duration-300 ${isActive("/about-us") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
                  About
                </Link>
                <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
                  isActive("/about-us") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </li>

              <li className="relative group">
                <Link href="/contact-us" className={`transition-colors duration-300 ${isActive("/contact-us") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
                  Contact
                </Link>
                <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
                  isActive("/contact-us") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </li>

              <li>
                <Link href="/contact-us"
                  className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]">
                  Get a Quote
                </Link>
              </li>
            </ul>

            {/* Right Menu - Social Icons */}
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

            {/* Left Side Menu (Mobile) */}
            <div className={`lg:hidden left-menu-container-mobile fixed top-0 left-0 h-full w-64 bg-black/90 border-r border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
              isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
              <div className="flex flex-col p-6 space-y-6 text-white">
                <div className="flex flex-col items-start space-y-2">
                  <Link href="/" onClick={() => setIsLeftMenuOpen(false)}>
                    <img src="/logo2.png" alt="Logo" className="w-32 h-auto" />
                  </Link>
                  <p className="text-sm text-gray-300">
                    Cyberspace Works - Website, Software, App Developer | Digital Marketing | Graphics Design | UI/UX | Research & Analysis
                  </p>
                  <p className="text-gray-400 flex items-center gap-2 mt-3">
                    <IoCallOutline />
                    <a href="tel:+917980715765" className="hover:underline">+91 7980715765</a>
                  </p>
                  <p className="text-gray-400 flex items-center gap-2 mt-3">
                    <IoMailOutline />
                    <a href="mailto:cyberspaceworksofficial@gmail.com" className="hover:underline">cyberspaceworks
                      official@gmail.com</a>
                  </p>
                  <p className="text-gray-400 flex items-center gap-2 mt-3">
                    <IoLocationOutline />
                    <a href="https://maps.app.goo.gl/QABsaPuw5qL3BwRa7" className="hover:underline">
                      Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
                    </a>
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/contact-us"
                    className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                    onClick={() => setIsLeftMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side Menu (Mobile) */}
            <div className={`lg:hidden right-menu-container-mobile fixed top-0 right-0 h-full w-64 bg-black/90 border-l border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
              isRightMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
              <div className="flex flex-col p-6 space-y-4 text-white">
                {socialLinks.map((item) => (
                  <Link key={item.name} href={item.link} className="flex items-center gap-2 text-lg hover:text-cyan-400">
                    <span className="text-cyan-400 text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile & Tablet Bottom Navigation */}
      <div className="lg:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[330px] mx-auto bg-black/10 border border-white/10 shadow-xl backdrop-blur-sm rounded-2xl z-50">
        {/* FAB */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <Link href="/" className="bg-cyan-400 rounded-full p-2 shadow-lg w-14 h-14 flex items-center justify-center overflow-hidden">
            <Image src="/logo2.png" alt="Logo" width={100} height={100} className="object-cover h-18" />
          </Link>
        </div>

        {/* Bottom nav items */}
        <div className="flex justify-around items-center py-3 relative">

          {/* Home */}
          <Link href="/" className="flex flex-col items-center group relative">
            <HomeIcon className={`w-6 h-6 transition-colors ${isActive("/") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`} />
            <span className={`text-xs mt-1 transition-colors ${isActive("/") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`}>Home</span>
            {/* Hover underline */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            {/* Active underline */}
            {isActive("/") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>

 {/* Services (with dropdown + close button) */}
<div
  className="relative"
  onMouseEnter={() => setIsServicesOpenMobile(true)}
  onMouseLeave={() => setIsServicesOpenMobile(false)}
>
  <div className="flex flex-col items-center group relative cursor-pointer">
    <Cog6ToothIcon
      className={`w-6 h-6 transition-colors ${
        pathname.startsWith("/services")
          ? "text-cyan-400"
          : "text-cyan-400 group-hover:text-cyan-300"
      }`}
    />

    {/* Services text – clickable */}
    <Link
      href="/services"
      className={`text-xs mt-1 transition-colors ${
        pathname.startsWith("/services")
          ? "text-cyan-400"
          : "text-cyan-400 group-hover:text-cyan-300"
      }`}
    >
      Services
    </Link>

    {/* Hover underline */}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>

    {/* Active underline */}
    {pathname.startsWith("/services") && (
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
    )}
  </div>

  {/* Dropdown menu */}
  <div
    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900/95 backdrop-blur-sm border border-cyan-400/20 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-bottom ${
      isServicesOpenMobile
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
    onMouseEnter={() => setIsServicesOpenMobile(true)} // keep open when hovering dropdown
    onMouseLeave={() => setIsServicesOpenMobile(false)}
  >
    {/* CLOSE BUTTON */}
    <button
      onClick={() => setIsServicesOpenMobile(false)}
      className="absolute top-2 right-2 p-1 rounded-full hover:bg-cyan-400/20 transition-colors"
      aria-label="Close services menu"
    >
      <XMarkIcon className="w-5 h-5 text-cyan-400 cursor-pointer" />
    </button>

    <div className="py-2 pt-8"> {/* pt-8 gives space for the X button */}
      {services.map((service) => {
        const active = pathname === service.href;
        return (
          <Link
            key={service.name}
            href={service.href}
            onClick={() => setIsServicesOpenMobile(false)}
            className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors relative ${
              active
                ? "text-cyan-400 bg-cyan-400/10"
                : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
            }`}
          >
            <span className="text-lg">{service.icon}</span>
            {service.name}
            {active && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400"></span>
            )}
          </Link>
        );
      })}
    </div>
  </div>
</div>

          <div className="w-12" /> {/* FAB gap */}

          {/* About */}
          <Link href="/about-us" className="flex flex-col items-center group relative">
            <InformationCircleIcon className={`w-6 h-6 transition-colors ${isActive("/about-us") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`} />
            <span className={`text-xs mt-1 transition-colors ${isActive("/about-us") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`}>About</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            {isActive("/about-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>

          {/* Contact */}
          <Link href="/contact-us" className="flex flex-col items-center group relative">
            <PhoneIcon className={`w-6 h-6 transition-colors ${isActive("/contact-us") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`} />
            <span className={`text-xs mt-1 transition-colors ${isActive("/contact-us") ? "text-cyan-400" : "text-cyan-400 group-hover:text-cyan-300"}`}>Contact</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            {isActive("/contact-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>
        </div>
      </div>
    </>
  );
}