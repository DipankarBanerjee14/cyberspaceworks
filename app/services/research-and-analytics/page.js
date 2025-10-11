"use client";
import React from "react";
import { FaChartLine, FaDatabase, FaPython, FaChartBar, FaTable } from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function ResearchAndAnalytics() {
  const subServices = [
    "Data Analysis",
    "Market Research",
    "Business Intelligence",
    "Predictive Analytics",
    "Data Visualization",
    "Customer Insights",
  ];

  const useCases = [
    "Sales Forecasting",
    "Customer Segmentation",
    "Market Trend Analysis",
    "Operational Efficiency",
    "Risk Assessment",
    "Campaign Performance",
  ];

  const technologies = [
    { name: "Python", icon: <FaPython size={22} /> },
    { name: "Tableau", icon: <FaChartBar size={22} /> },
    { name: "Power BI", icon: <FaChartLine size={22} /> },
    { name: "SQL", icon: <FaDatabase size={22} /> },
    { name: "R", icon: <FaChartLine size={22} /> },
    { name: "Excel", icon: <FaTable size={22} /> },
  ];

  return (
    <ServicePage
      title="Research & Analytics"
      description="At CSW, we empower businesses with data-driven insights through advanced analytics and research."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
