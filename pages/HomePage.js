"use client";

import dynamic from "next/dynamic";

// Dynamically import heavy sections to reduce initial bundle size
const HeroSection = dynamic(() => import("@/components/HomeComponents/HeroSection.js"));
const OurServices = dynamic(() => import("@/components/HomeComponents/OurServices.js"));
const WhyChooseUs = dynamic(() => import("@/components/HomeComponents/WhyChooseUs.js"));
const Dashboard = dynamic(() => import("@/components/HomeComponents/Dasboard.js"));
const AboutSection = dynamic(() => import("@/components/HomeComponents/AboutSection.js"));
const HowWeDoIt = dynamic(() => import("@/components/HomeComponents/HowWeDoIt.js"));
const Testimonial = dynamic(() => import("@/components/HomeComponents/Testimonial.js"));
const ContactForm = dynamic(() => import("@/components/HomeComponents/ContactForm.js"));
export default function HomePage() {
 
 return (
  <>
   
    <div className="relative min-h-screen bg-black overflow-hidden">
    
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <Dashboard />
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />
      <ContactForm/>
    </div>
  </>
);

}