"use client";

import { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
// import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

import cursor from "@/public/cursor.png";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
// Fonts
const rubik = Rubik({
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // Hide loader after page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo2.png" />
        <title>
          Cyberspace Works - Website, Software and App Developer in Howrah,
          Kolkata
        </title>
      </head>
      <body
        className={`${rubik.variable} antialiased relative min-h-screen bg-black overflow-x-hidden`}
        style={{
          cursor: `url(${cursor.src}) 16 16, default`,
        }}
      >
        {/* Removed cursor spotlight glow */}

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
      
            <main className="relative z-10 ">{children}</main>
            <Analytics />
            <SpeedInsights />          
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
