"use client";

import { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import BackToTopButton from "@/components/BackToTopButton";
import cursor from "@/public/cursor.png";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const GTM_ID = "GTM-KCNJRZVR";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>

        {/* GTM Script must be inside <head> */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        <link rel="icon" type="image/png" href="/logo2.png" />
        <title>Cyberspace Works - Website, Software and App Developer in Howrah, Kolkata</title>
      </head>

      <body
        className={`${rubik.variable} antialiased relative min-h-screen bg-black`}
        style={{ cursor: `url(${cursor.src}) 16 16, default` }}
      >
        {/* GTM noscript must be first inside <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {loading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <Loader />
          </div>
        )}

        {!loading && (
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
            <BackToTopButton />
          </div>
        )}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
