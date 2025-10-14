"use client";
import React from "react";
import {
  FaPaintBrush, FaPenNib, FaImage, FaPencilRuler, FaFilePdf, FaCamera, FaBrush, FaLayerGroup,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function GraphicDesign() {
  const subServices = [
    {
      title: "Logo & Branding Design",
      description: "Create timeless logos and complete brand identities that communicate your company’s values.",
    },
    {
      title: "Social Media Creatives",
      description: "Design engaging posts, stories, and ad creatives tailored to your brand’s tone and audience.",
    },
    {
      title: "Print Design (Brochures, Posters)",
      description: "High-quality print designs like brochures, flyers, and posters that make an impact offline.",
    },
    {
      title: "Packaging Design",
      description: "Attractive packaging designs that enhance brand recognition and consumer appeal.",
    },
    {
      title: "Infographics & Illustrations",
      description: "Simplify complex information with clean, visually appealing infographics and illustrations.",
    },
    {
      title: "Marketing Collateral Design",
      description: "Design pitch decks, business cards, and promotional materials that strengthen brand presence.",
    },
  ];

  const useCases = [
    {
      title: "Brand Identity Creation",
      description: "Build a memorable visual identity that reflects your mission and differentiates your brand.",
    },
    {
      title: "Advertising Campaigns",
      description: "Visually compelling ad designs that attract attention and drive audience engagement.",
    },
    {
      title: "Event & Product Launch Design",
      description: "Promotional materials and graphics to elevate your next event or product reveal.",
    },
    {
      title: "E-commerce Visual Design",
      description: "Eye-catching banners and product images that boost online sales and conversion rates.",
    },
    {
      title: "Corporate Presentations",
      description: "Design professional pitch decks and presentations that leave a lasting impression.",
    },
    {
      title: "Digital Art & Illustrations",
      description: "Unique, creative digital artwork and illustrations that add personality to your brand.",
    },
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
