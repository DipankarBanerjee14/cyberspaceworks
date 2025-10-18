// components/DynamicCanonical.js
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DynamicCanonical() {
  const pathname = usePathname();
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    setCanonicalUrl(`${baseUrl}${cleanPath}`);
  }, [pathname]);

  if (!canonicalUrl) return null;

  return <link rel="canonical" href={canonicalUrl} />;
}
