"use client";
import React from "react";
import {
  FaReact, FaNodeJs, FaCode, FaDatabase, FaJs, FaCss3Alt, FaMobileAlt,
  FaWordpress, FaWix, FaGlobe, FaDraftingCompass, FaCube, FaPaintBrush, FaBolt,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import ServicePage from "@/components/ServicePage";

export default function WebDevelopment() {
  const subServices = [
    "React.js Development",
    "Next.js Development",
    "PHP Development",
    "WordPress Development",
    "MERN Stack Development",
    "Shopify Development",
  ];

  const useCases = [
    "E-commerce Platforms",
    "Real Estate Portals",
    "SaaS Products",
    "Corporate Websites",
    "Tourism & Hospitality",
    "Educational Portals",
  ];

  const technologies = [
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Express.js", icon: <FaCode size={22} /> },
    { name: "MongoDB", icon: <FaDatabase size={22} /> },
    { name: "Next.js", icon: <FaJs size={22} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={22} /> },
    { name: "React Native", icon: <FaMobileAlt size={22} /> },
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "TypeScript", icon: <FaJs size={22} /> },
    { name: "WordPress", icon: <FaWordpress size={22} /> },
    { name: "Webflow", icon: <FaGlobe size={22} /> },
    { name: "Framer", icon: <FaDraftingCompass size={22} /> },
   
   
   
  ];

  return (
    <ServicePage
      title="Web Development"
      description="At CSW, we craft high-performance, secure, and scalable web solutions tailored to your business goals."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
