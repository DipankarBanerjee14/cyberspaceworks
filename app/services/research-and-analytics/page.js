"use client";
import React from "react";
import { FaChartLine, FaDatabase, FaPython, FaChartBar, FaTable } from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function ResearchAndAnalytics() {
  const subServices = [
    {
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights through structured analysis and modeling.",
    },
    {
      title: "Market Research",
      description: "Comprehensive market studies that uncover customer needs, trends, and opportunities.",
    },
    {
      title: "Business Intelligence",
      description: "Build smart dashboards and BI tools for data-driven decision-making.",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future outcomes using machine learning models and historical data.",
    },
    {
      title: "Data Visualization",
      description: "Communicate insights effectively with visually compelling dashboards and charts.",
    },
    {
      title: "Customer Insights",
      description: "Understand your audience’s behavior to improve retention and engagement strategies.",
    },
  ];

  const useCases = [
    {
      title: "Sales Forecasting",
      description: "Predict sales performance to plan inventory, marketing, and growth strategies effectively.",
    },
    {
      title: "Customer Segmentation",
      description: "Identify key customer groups based on behavior and demographics for targeted marketing.",
    },
    {
      title: "Market Trend Analysis",
      description: "Analyze emerging trends to adapt quickly to market demands and stay competitive.",
    },
    {
      title: "Operational Efficiency",
      description: "Use analytics to detect bottlenecks and improve process efficiency across departments.",
    },
    {
      title: "Risk Assessment",
      description: "Predict and mitigate potential risks with data-backed evaluation models.",
    },
    {
      title: "Campaign Performance",
      description: "Track, measure, and optimize digital marketing campaigns with data-driven insights.",
    },
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
