"use client";
import React from "react";
import {
  FaAndroid, FaApple, FaReact, FaCode, FaMobileAlt, FaCloud, FaDatabase, FaNodeJs, FaBolt,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import ServicePage from "@/components/ServicePage";

export default function AppDevelopment() {
  const subServices = [
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Apps",
    "Flutter App Development",
    "React Native App Development",
    "App Maintenance & Optimization",
  ];

  const useCases = [
    "On-demand Services",
    "E-commerce Applications",
    "Social Media Apps",
    "Healthcare & Fitness Apps",
    "Educational Apps",
    "Business Productivity Tools",
  ];

  const technologies = [
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "React Native", icon: <FaReact size={22} /> },
    { name: "Swift", icon: <FaApple size={22} /> },
    { name: "Kotlin", icon: <FaAndroid size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Firebase", icon: <FaDatabase size={22} /> },
    { name: "AWS Amplify", icon: <FaCloud size={22} /> },
    { name: "REST APIs", icon: <FaCode size={22} /> },
    { name: "GraphQL", icon: <FaBolt size={22} /> },
  ];

  return (
    <ServicePage
      title="App Development"
      description="We build powerful, user-friendly, and high-performance mobile applications for iOS, Android, and cross-platform ecosystems."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
