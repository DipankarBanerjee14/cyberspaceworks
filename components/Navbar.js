"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

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
        <nav className="text-white ">
          <div className="relative flex items-center justify-between h-[70px]">

            {/* Left Menu */}
            <ul className=" space-x-6 mr-6 font-bold px-6 py-3 rounded-full bg-black/10 border border-white/10 shadow-xl flex items-center justify-between backdrop-blur-sm  ">
              {["Home", "About", "Contact"].map((item) => (
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
            </ul>

            {/* Center Logo with thick border */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] flex items-center justify-center">
              <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="h-25 w-auto" />
              </div>
            </div>

            {/* Right Menu */}
            <ul className="space-x-6 mr-6 font-bold px-6 py-3 rounded-full bg-black/10 border border-white/10 shadow-xl flex items-center justify-between backdrop-blur-sm ">
              {["Home", "About", "Contact"].map((item) => (
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
            </ul>
          </div>
        </nav>
      </header>

      {/* Spacer for Fixed Navbar */}
      {/* <div className="pt-[70px]" /> */}
    </>
  );
}
