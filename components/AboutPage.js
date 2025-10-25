"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SEO from "@/components/SEO"
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaGem,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";


const values = [
  {
    title: "Customer-Centric Approach",
    description:
      "We place our clients at the forefront, focusing on their unique needs and providing our efforts to ensure sustainable and long-term success.",
    icon: <FaUsers className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Collaboration",
    description:
      "We deeply value teamwork, collaboration, and collective effort, ensuring consistently aligned outcomes toward goals and excellence.",
    icon: <FaHandshake className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency guide every interaction we pursue to understand, acknowledge, and fulfill high ethical standards.",
    icon: <FaStar className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Innovation",
    description:
      "We passionately implement creativity and unique top-selling strategies, technologies, and approaches that transform thinking and provide results.",
    icon: <FaLightbulb className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our unwavering drive for excellence relentlessly motivates us to consistently improve, innovate, and exceed expectations in every project we take on.",
    icon: <FaGem className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
];

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Crafting high-performance, visually stunning websites tailored for your business.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Building intuitive, scalable, and engaging mobile experiences.",
  },
  {
    title: "Software Development",
    icon: <FaCode className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Custom software solutions engineered to streamline operations and drive growth.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Designing sleek, user-focused interfaces that enhance experience and usability.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Boosting brand visibility and engagement through strategic online campaigns.",
  },
  {
    title: "Graphic Design",
    icon: <FaBrush className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Transforming ideas into powerful visuals that leave a lasting impression.",
  },
  {
    title: "Research & Analytics",
    icon: <SiGoogleanalytics className="text-cyan-400 text-4xl mb-3 mx-auto" />,
    desc: "Delivering data-driven insights to fuel smarter decisions and business innovation.",
  },
];

const AboutUs = () => {
  const swiperRef = useRef(null);

  // Handle card click without stopping Swiper
  const handleCardClick = (service) => {
    console.log(`Clicked on ${service.title}`);
    // Add your desired action here, e.g., open a modal, navigate, etc.
  };

  return (
     <>
      
    <section className="bg-black text-white lg:pt-10 px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 items-center gap-10 relative bg-black/10 rounded-2xl shadow-lg ">
          <div className="flex flex-col gap-4 lg:text-left text-center">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Empowering <span className="text-cyan-400">Businesses</span> <br /> Through <span className="text-cyan-400">Technology</span> 
            </h1>
            <p className="text-gray-300 mb-5">
              We provide end-to-end support and are committed to helping businesses achieve their goals efficiently.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative w-full h-80 lg:h-96 grid place-items-center">
            <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 animate-pulseGlow"></div>
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border border-gray-700 rounded-full flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        
        <div className="">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Value</h2>
          <p className="text-gray-400 text-center mb-12">
            As a company, we prioritize a customer-first mindset, innovation, and integrity. Through collaboration and commitment to excellence, <br /> we deliver impactful solutions that exceed expectations.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {values.slice(0, 3).map((val, idx) => (
              <div
                key={idx}
                className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] transition group overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
                />
                {/* <div
                  className="absolute -inset-20 blur-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                /> */}
                <h3 className="font-semibold text-xl mb-2 relative z-10">{val.title}</h3>
                <p className="text-gray-400 relative z-10">{val.description}</p>
                <div className="mt-4">{val.icon}</div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {values.slice(3).map((val, idx) => (
              <div
                key={idx}
                className="relative bg-gray-900 p-6 rounded-2xl shadow-lg transition group overflow-hidden hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
              >
                <div
                  className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
                />
                {/* <div
                  className="absolute -inset-20 blur-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                /> */}
                <h3 className="font-semibold text-xl mb-2 relative z-10">{val.title}</h3>
                <p className="text-gray-400 relative z-10">{val.description}</p>
                <div className="mt-4">{val.icon}</div>
              </div>
            ))}
          </div>
        </div>
     
        {/* What We Do Section */}
        <div className=" pt-20 flex flex-col gap-10 items-start">
          <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div
              className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
              style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40"
              style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white relative z-10">
                Your Vision, Powered by Innovation.
              </h2>
              <p className="text-gray-400 mb-6 relative z-10">
                Discover the boundless potential of your online presence with Cyberspace Works – where innovation meets imagination, and web development is elevated to an art form. Our journey is fueled by innovation and guided by your unique goals. We believe in the power of collaboration, working closely with you to understand your needs and aspirations. Whether you’re a startup striving for a digital debut or an established business aiming to revamp your online presence, we are your trusted partner on this transformative journey. We’re not just here to build websites or apps; we’re here to build your success. At Cyberspace Works, we merge cutting-edge technology with visionary design to create web solutions that not only impress but also drive growth.
              </p>
            </div>
          </div>

          {/* Services Swiper */}
          <div className="relative w-full pt-10 pb-20">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
<Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView="auto"
  spaceBetween={50}
  loop={true}
  speed={4000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false, // keeps autoplay after drag
    pauseOnMouseEnter: false,
  }}
  allowTouchMove={true}  // enable drag
  grabCursor={true}      // show grabbing cursor
  freeMode={false}       // ❌ disable freeMode for continuous autoplay
  modules={[Autoplay]}
  className="relative z-20 mySwiper"
>
  {[...services, ...services, ...services].map((service, index) => (
    <SwiperSlide
      key={index}
      className="!w-[280px] flex justify-center items-center cursor-pointer"
    >
      <div
        className="box-bg bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-2xl p-6 text-center shadow-lg backdrop-blur flex flex-col items-center justify-between w-full h-[200px] transition-transform duration-300 hover:scale-95"
        onClick={() => handleCardClick(service)}
      >
        {service.icon}
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm">{service.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>
      </div>
    </section>
     </>
  );
};

export default AboutUs;