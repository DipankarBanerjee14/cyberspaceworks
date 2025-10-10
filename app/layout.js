"use client"; // required because we use useEffect

import { useEffect } from "react";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cursor from "@/public/cursor.png";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const spotlight = document.getElementById("cursor-spotlight");
    if (!spotlight) return;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    spotlight.style.background = `
      radial-gradient(400px at ${initialX}px ${initialY}px, rgba(147,51,234,0.3), transparent 60%)
    `;

    const updateSpotlight = (x, y) => {
      requestAnimationFrame(() => {
        spotlight.style.background = `
          radial-gradient(400px at ${x}px ${y}px, rgba(147,51,234,0.3), transparent 60%)
        `;
      });
    };

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      updateSpotlight(x, y);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const { clientX: x, clientY: y } = touch;
      updateSpotlight(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased relative min-h-screen bg-black overflow-x-hidden`}
        style={{
          cursor: `url(${cursor.src}) 16 16, auto`,
        }}
      >
        {/* Cursor spotlight glow */}
        {/* <div
          id="cursor-spotlight"
          className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        /> */}

        {/* Content */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
