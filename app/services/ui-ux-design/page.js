"use client";
import React from "react";
import {
  FaPaintBrush, FaDraftingCompass, FaDesktop, FaMobileAlt, FaFigma, FaSketch, FaEye, FaUser,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function UiUxDesign() {
  const subServices = [
    "UI Design",
    "UX Research",
    "Prototyping & Wireframing",
    "Mobile App Design",
    "Website Redesign",
    "User Testing",
  ];

  const useCases = [
    "Startup MVP Design",
    "SaaS Product Interfaces",
    "Mobile & Web App Design",
    "Corporate Websites",
    "E-commerce UX",
    "Landing Page Optimization",
  ];

  const technologies = [
    { name: "Figma", icon: <FaFigma size={22} /> },
    { name: "Adobe XD", icon: <FaPaintBrush size={22} /> },
    { name: "Sketch", icon: <FaSketch size={22} /> },
    { name: "InVision", icon: <FaEye size={22} /> },
    { name: "Framer", icon: <FaDraftingCompass size={22} /> },
    { name: "Webflow", icon: <FaDesktop size={22} /> },
    { name: "UsabilityHub", icon: <FaUser size={22} /> },
  ];

  return (
    <ServicePage
      title="UI / UX Design"
      description="We craft intuitive, user-centered designs that blend creativity with functionality to deliver seamless digital experiences."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
