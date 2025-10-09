"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp,  FaMapMarkerAlt,
  FaLinkedin, } from "react-icons/fa";
import logo from "..//public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-10 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-around gap-10 flex-wrap">

        {/* Logo & About */}
        <div className="w-full md:w-[250px] text-center lg:text-left">
          <Image
            src={logo}
            alt="logo"
            className="h-30 w-auto cursor-pointer mx-auto lg:mx-0"
          />
          <p className="mt-2 text-gray-300">
           Discover endless possibilities in the world of <span className="text-cyan-400">Cyberspace Works</span>
          </p>
         
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-[180px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Useful Links</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li><Link href="" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="" className="hover:text-white transition">Contact Us</Link></li>
            
            <li><Link href="" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="" className="hover:text-white transition">Terms & Conditions</Link></li>
            
          </ul>
        </div>

        {/* Online Shopping */}
        <div className="w-full md:w-[180px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="" className="hover:text-white transition">Web Development</Link></li>
            <li><Link href="" className="hover:text-white transition">App Development</Link></li>
            <li><Link href="" className="hover:text-white transition">Software Development</Link></li>
            <li><Link href="" className="hover:text-white transition">UI/UX Design</Link></li>
            <li><Link href="" className="hover:text-white transition">Digital Marketing</Link></li>
            <li><Link href="" className="hover:text-white transition">Graphic Design</Link></li>
            <li><Link href="" className="hover:text-white transition">Research and Analytics
</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-[220px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Get In Touch</h3>
         
          <div className="mt-4 space-y-2 ">
            <p >
             
              <span className="text-gray-300">+91 7980715765</span>
            </p>
            <p>
            
              <span className="text-gray-300">cyberspaceworksofficial@gmsil.com</span>
            </p>
             <div className="flex justify-center md:justify-start space-x-4 mt-4 text-cyan-400 text-xl">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
             <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
          </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-white/10 pt-4">
        © 2025 Cyberspace Works. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
