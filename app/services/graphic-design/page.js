"use client";
import React from "react";
import {
  FaPaintBrush, FaPenNib, FaImage, FaPencilRuler, FaFilePdf, FaCamera, FaBrush, FaLayerGroup,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function GraphicDesign() {
  const subServices = [
    "Logo & Branding Design",
    "Social Media Creatives",
    "Print Design (Brochures, Posters)",
    "Packaging Design",
    "Infographics & Illustrations",
    "Marketing Collateral Design",
  ];

  const useCases = [
    "Brand Identity Creation",
    "Advertising Campaigns",
    "Event & Product Launch Design",
    "E-commerce Visual Design",
    "Corporate Presentations",
    "Digital Art & Illustrations",
  ];

  const technologies = [
    { name: "Adobe Photoshop", icon: <FaImage size={22} /> },
    { name: "Adobe Illustrator", icon: <FaPenNib size={22} /> },
    { name: "Canva", icon: <FaBrush size={22} /> },
    { name: "Figma", icon: <FaPaintBrush size={22} /> },
    { name: "CorelDRAW", icon: <FaPencilRuler size={22} /> },
    { name: "Adobe Lightroom", icon: <FaCamera size={22} /> },
    { name: "InDesign", icon: <FaFilePdf size={22} /> },
    { name: "Blender", icon: <FaLayerGroup size={22} /> },
  ];

  return (
    <ServicePage
      title="Graphic Design"
      description="We deliver stunning, brand-consistent visuals that make a lasting impression — from digital creatives to full brand design systems."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
