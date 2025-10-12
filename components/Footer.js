"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-6 sm:px-6">
      <div className="max-w-6xl mx-auto bg-cyan-400 text-black rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center sm:text-left">
          {/* Logo & About */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={120}
              className="cursor-pointer w-24 sm:w-32 md:w-36"
            />
            <p className="mt-3 text-slate-900 leading-relaxed text-sm sm:text-base max-w-[220px] sm:max-w-[250px]">
              Discover endless possibilities in the world of{" "}
              <span className="font-semibold text-black">Cyber-space</span>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-black">
              Useful Links
            </h3>
            <ul className="space-y-2 text-slate-900 text-sm sm:text-base">
              <li>
                <Link href="about-us" className="hover:text-slate-700 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-slate-700 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-slate-700 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-slate-700 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-slate-700 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-black">
              Services
            </h3>
            <ul className="space-y-2 text-slate-900 text-sm sm:text-base">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-slate-700 transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="hover:text-slate-700 transition"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="hover:text-slate-700 transition"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="hover:text-slate-700 transition"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-slate-700 transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="hover:text-slate-700 transition"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/research-and-analytics"
                  className="hover:text-slate-700 transition"
                >
                  Research and Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-black">
              Get In Touch
            </h3>
            <p className="text-slate-900 text-sm sm:text-base">
              +91 7980715765
            </p>
            <p className="text-slate-900 text-sm sm:text-base">
              cyberspaceworksofficial@gmail.com
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-black text-lg sm:text-xl">
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
              <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-slate-900 text-xs sm:text-sm border-t border-gray-300/30 pt-4">
          © {currentYear} Cyberspace Works. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;