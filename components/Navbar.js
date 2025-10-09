"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

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
        <nav className="text-white ">
          <div className="relative flex items-center justify-between h-[70px] ">

            {/* Left Menu */}
            <ul className="space-x-6 font-bold px-6 py-1.5 rounded-xl bg-black/10 border border-white/10 shadow-xl flex items-center backdrop-blur-sm absolute left-3 ml-4 ">
              {["Home","Services", "About", "Contact"].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    href="#"
                    className="transition-colors duration-300 group-hover:text-purple-400"
                  >
                    {item}
                  </Link>
                    
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </li>
              ))}
              <button
                    className="flex items-center justify-center gap-1 relative px-4 py-1 text-black cursor-pointer bg-blue-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)] "
                  >
                    Get a Quote
                  </button>
            </ul>

            {/* Center Logo with thick border */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] flex items-center justify-center">
              <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="h-25 w-auto" />
              </div>
            </div>

         
           {/* Right Menu - Horizontal Icon Cards */}
            <ul className=" space-x-3 font-bold px-6 py-1 rounded-xl bg-black/10 border border-white/10 shadow-xl flex items-center backdrop-blur-sm absolute right-12 top-1/2 -translate-y-1/2 mr-4 ">
<div className="flex items-center space-x-3 mr-6">
  {[
    { name: "Call", icon: <FaPhoneAlt /> },
    { name: "Mail", icon: <FaEnvelope /> },
    { name: "WhatsApp", icon: <FaWhatsapp /> },
    { name: "Location", icon: <FaMapMarkerAlt /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "Facebook", icon: <FaFacebookF /> },
  ].map((item) => (
    <div
      key={item.name}
      className="flex flex-col items-center justify-center w-10 h-9 "
      title={item.name}
    >
      <span className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer">{item.icon}</span>
    </div>
  ))}
</div>
</ul>
          </div>
        </nav>
      </header>

      {/* Spacer for Fixed Navbar */}
      {/* <div className="pt-[70px]" /> */}
    </>
  );
}
