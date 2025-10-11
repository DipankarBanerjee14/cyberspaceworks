"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import logo from "..//public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-cyan-400 text-white py-10 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-around gap-10 flex-wrap">

        {/* Logo & About */}
        <div className="w-full md:w-[250px] text-center lg:text-left">
          <Image
            src={logo}
            alt="logo"
            className="h-30 w-auto cursor-pointer mx-auto lg:mx-0"
          />
          <p className="mt-2 text-slate-800">
            Discover endless possibilities in the world of <span className="text-black font-medium">Cyber-space</span>
          </p>
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-[180px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-black">Useful Links</h3>
          <ul className="space-y-2 text-slate-800">
            <li><Link href="" className="hover:text-slate-600 transition">About Us</Link></li>
            <li><Link href="" className="hover:text-slate-600 transition">Contact Us</Link></li>
            <li><Link href="privacy-policy" className="hover:text-slate-600 transition">Privacy Policy</Link></li>
            <li><Link href="terms-and-conditions" className="hover:text-slate-600 transition">Terms & Conditions</Link></li>
            <li><Link href="faq" className="hover:text-slate-600 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full md:w-[180px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-black">Services</h3>
          <ul className="space-y-2 text-slate-800">
            <li><Link href="/services/web-development" className="hover:text-slate-600 transition">Web Development</Link></li>
            <li><Link href="/services/app-development" className="hover:text-slate-600 transition">App Development</Link></li>
            <li><Link href="/services/software-development" className="hover:text-slate-600 transition">Software Development</Link></li>
            <li><Link href="/services/ui-ux-design" className="hover:text-slate-600 transition">UI/UX Design</Link></li>
            <li><Link href="/services/digital-marketing" className="hover:text-slate-600 transition">Digital Marketing</Link></li>
            <li><Link href="/services/graphic-design" className="hover:text-slate-600 transition">Graphic Design</Link></li>
            <li><Link href="/services/research-and-analytics" className="hover:text-slate-600 transition">Research and Analytics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-[220px] text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-3 text-black">Get In Touch</h3>
          <div className="mt-4 space-y-2">
            <p><span className="text-slate-800">+91 7980715765</span></p>
            <p><span className="text-slate-800">cyberspaceworksofficial@gmsil.com</span></p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-black text-xl">
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
      <div className="mt-10 text-center text-slate-900 text-sm border-t border-white/10 pt-4">
        © {currentYear} Cyberspace Works. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
