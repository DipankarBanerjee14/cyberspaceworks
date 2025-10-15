"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  FaAngleUp,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaTrademark,

} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Services data
  const services = [
    {
      name: "Web Development",
      icon: <FaLaptopCode />,
      subtext: "Custom, scalable web apps",
      href: "/services/web-development",
    },
    {
      name: "App Development",
      icon: <FaMobileAlt />,
      subtext: "iOS & Android native solutions",
      href: "/services/app-development",
    },
    {
      name: "Software Development",
      icon: <FaCode />,
      subtext: "Tailored enterprise solutions",
      href: "/services/software-development",
    },
    {
      name: "UI/UX Design",
      icon: <FaPalette />,
      subtext: "Designs that convert users",
      href: "/services/ui-ux-design",
    },
    {
      name: "Digital Marketing",
      icon: <FaBullhorn />,
      subtext: "Boost your brand visibility",
      href: "/services/digital-marketing",
    },
    {
      name: "Graphic Design",
      icon: <FaBrush />,
      subtext: "Creative branding visuals",
      href: "/services/graphic-design",
    },
    {
      name: "Research & Analytics",
      icon: <SiGoogleanalytics />,
      subtext: "Data-driven insights",
      href: "/services/research-and-analytics",
    },
  ];

  const socialLinks = [
    { name: "Call", icon: <FaPhoneAlt />, link: "tel:7980715765" },
    { name: "Mail", icon: <FaEnvelope />, link: "mailto:cyberspaceworksofficial@gmail.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/7980715765" },
    { name: "Location", icon: <FaMapMarkerAlt />, link: "https://www.google.com/maps/place/Cyberspace+Works+-+Website,+Software+and+App+Developer+in+Howrah,+Kolkata/@22.6434765,88.3408238,716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f89dd56c959339:0x59f91e11a807e487!8m2!3d22.6434765!4d88.3433987!16s%2Fg%2F11tfxl7lfx?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/cyberspaceworks" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/cyberspace-works" },
    { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100086774724799" },
  ];

  // Close hamburger menus when clicking or touching outside or scrolling
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

  // Services dropdown hover logic
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };
const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
const pathname = usePathname();

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Neon top strip */}
        <div className="relative h-[10px] bg-cyan-400">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="text-white">
          <div className="relative flex items-center justify-between h-[70px] px-4">

         {/* Left Hamburger (Mobile) */}
<div
  className="lg:hidden flex items-center left-hamburger fixed  left-8 z-50 group bg-black/30 border border-white/10 shadow-xl rounded-md"
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
                <Link  href="/"
      className={`transition-colors duration-300 ${
        pathname === "/" ? "text-cyan-400" : "hover:text-cyan-400"
      }`}>
                  Home
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative services-dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                   className={`transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
        pathname.startsWith("/services") ? "text-cyan-400" : "text-white hover:text-cyan-400"
      }`}
                >
                  Services
                  <span className="text-xs mt-[2px]">
                    {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </button>

               <div
  className={`absolute left-0 w-[900px] rounded-xl 
    bg-black backdrop-blur-xl border border-white/10  
    transition-all duration-300 ease-in-out origin-top 
    z-[999] backdrop-filter  mt-6
    
    ${isServicesOpen
      ? "opacity-100 scale-100 pointer-events-auto"
      : "opacity-0 scale-95 pointer-events-none"
    } 
    flex overflow-hidden p-6`}
>
{/* Top-left cyan-400 large glow */}
<div
  className="absolute top-0 left-0 w-[300px] h-[300px] -translate-x-32 -translate-y-32 blur-[160px] opacity-60 pointer-events-none"
  style={{
    background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)",
  }}
/>

{/* Bottom-right indigo-400 large glow */}
<div
  className="absolute bottom-0 right-0 w-[300px] h-[300px] translate-x-32 translate-y-32 blur-[160px] opacity-60 pointer-events-none"
  style={{
    background: "radial-gradient(circle, #6366f1 0%, transparent 100%)",
  }}
/>

    
                  <div className="grid grid-cols-3 gap-6 w-full">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 transform hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
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
              </li>

              <li className="relative group">
                <Link href="/about-us"
      className={`transition-colors duration-300 ${
        pathname === "/about-us" ? "text-cyan-400" : "hover:text-cyan-400"
      }`}>
                  About
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>

              <li className="relative group">
                <Link  href="/contact-us"
      className={`transition-colors duration-300 ${
        pathname === "/contact-us" ? "text-cyan-400" : "hover:text-cyan-400"
      }`}>
                  Contact
                </Link>
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                >
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
<div
  className={`lg:hidden left-menu-container-mobile fixed top-0 left-0 h-full w-64 bg-black/90 border-r border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
    isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex flex-col p-6 space-y-4 text-white">
    <Link
      href="/"
      className="hover:text-cyan-400"
      onClick={() => setIsLeftMenuOpen(false)}
    >
      Home
    </Link>

    {/* Mobile Services Dropdown */}
    <div className="relative">
      <div
        onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)} // <-- mobile state
        className="flex items-center justify-between cursor-pointer hover:text-cyan-400"
      >
        <span>Services</span>
        <span className="text-xs">
          {isServicesOpenMobile ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isServicesOpenMobile ? "max-h-[500px] mt-2" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 pl-3 border-l border-cyan-400/20">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="flex items-center gap-2 hover:text-cyan-400 text-sm"
              onClick={() => setIsServicesOpenMobile(false)} // Close dropdown only
            >
              <span className="text-cyan-400 text-base">{service.icon}</span>
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    <Link href="/about-us" className="hover:text-cyan-400" onClick={() => setIsLeftMenuOpen(false)}>About</Link>
    <Link href="/contact-us" className="hover:text-cyan-400" onClick={() => setIsLeftMenuOpen(false)}>Contact</Link>
    
    <Link
      href="/quote"
      className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
      onClick={() => setIsLeftMenuOpen(false)}
    >
      Get a Quote
    </Link>
  
  </div>
</div>


            {/* Right Side Menu (Mobile) */}
            <div
              className={`lg:hidden right-menu-container-mobile fixed top-0 right-0 h-full w-64 bg-black/90 border-l border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
                isRightMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col p-6 space-y-4 text-white">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="flex items-center gap-2 text-lg hover:text-cyan-400"
                  >
                    <span className="text-cyan-400 text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </nav>
      </header>
    </>
  );
}
