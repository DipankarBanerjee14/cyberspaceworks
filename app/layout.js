"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader"; 
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
  const [loading, setLoading] = useState(true);

  // Hide loader after page load (2s here, adjust as needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cursor spotlight effect
  useEffect(() => {
    const spotlight = document.getElementById("cursor-spotlight");
    if (!spotlight) return;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    spotlight.style.background = `radial-gradient(400px at ${initialX}px ${initialY}px, rgba(147,51,234,0.3), transparent 60%)`;

    const updateSpotlight = (x, y) => {
      requestAnimationFrame(() => {
        spotlight.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(147,51,234,0.3), transparent 60%)`;
      });
    };

    const handleMouseMove = (e) => updateSpotlight(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      updateSpotlight(touch.clientX, touch.clientY);
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
        {/* Optional cursor spotlight */}
        {/* <div
          id="cursor-spotlight"
          className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        /> */}

        {/* Global Preloader */}
        {loading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <Loader />
          </div>
        )}

        {/* Main content */}
        {!loading && (
          <>
            <Navbar />
           
            <main className="relative z-10">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
