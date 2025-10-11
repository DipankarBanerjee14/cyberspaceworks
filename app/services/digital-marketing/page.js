"use client";
import React from "react";
import {
  FaBullhorn, FaChartLine, FaFacebook, FaGoogle, FaEnvelope, FaInstagram, FaTwitter, FaSearch,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function DigitalMarketing() {
  const subServices = [
    "SEO & SEM",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Paid Campaign Management",
    "Analytics & Reporting",
  ];

  const useCases = [
    "Brand Awareness Campaigns",
    "Lead Generation",
    "Product Launch Promotion",
    "E-commerce Growth Strategy",
    "Customer Retention Campaigns",
    "Performance Optimization",
  ];

  const technologies = [
    { name: "Google Ads", icon: <FaGoogle size={22} /> },
    { name: "Facebook Ads", icon: <FaFacebook size={22} /> },
    { name: "Instagram", icon: <FaInstagram size={22} /> },
    { name: "Twitter", icon: <FaTwitter size={22} /> },
    { name: "SEO Tools", icon: <FaSearch size={22} /> },
    { name: "Mailchimp", icon: <FaEnvelope size={22} /> },
    { name: "Analytics", icon: <FaChartLine size={22} /> },
    { name: "Marketing Automation", icon: <FaBullhorn size={22} /> },
  ];

  return (
    <ServicePage
      title="Digital Marketing"
      description="We help brands grow online with strategic campaigns, creative content, and performance-driven digital marketing solutions."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
