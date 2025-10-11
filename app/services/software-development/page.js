"use client";
import React from "react";
import {
  FaJava, FaPython, FaNodeJs, FaReact, FaDatabase, FaCloud, FaCogs, FaDocker,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function SoftwareDevelopment() {
  const subServices = [
    "Custom Software Solutions",
    "Enterprise Application Development",
    "Cloud-based Software",
    "System Integration",
    "API Development",
    "Software Maintenance & Support",
  ];

  const useCases = [
    "ERP Systems",
    "CRM Platforms",
    "SaaS Applications",
    "Automation Tools",
    "Inventory Management Systems",
    "Data Analytics Platforms",
  ];

  const technologies = [
    { name: "Java", icon: <FaJava size={22} /> },
    { name: "Python", icon: <FaPython size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "MySQL", icon: <FaDatabase size={22} /> },
    { name: "PostgreSQL", icon: <FaDatabase size={22} /> },
    { name: "AWS", icon: <FaCloud size={22} /> },
    { name: "Docker", icon: <FaDocker size={22} /> },
    { name: "Kubernetes", icon: <FaCogs size={22} /> },
  ];

  return (
    <ServicePage
      title="Software Development"
      description="We engineer scalable, secure, and performance-oriented software solutions customized to meet unique business needs."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
