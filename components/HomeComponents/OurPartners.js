"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

// Import logos
import cognosutra from "../../public/cognosutra.jpg";
import netlify from "../../public/netlify.png";
import google from "../../public/google.png";
import Vercel from "../../public/Vercel.png";
import meta from "../../public/meta.png";
import hostinger from "../../public/hostinger.png";
import Digital from "../../public/Digital.png";
import growthshark from "../../public/growthshark.png";
import adobe from "../../public/adobe.png";
import aws from "../../public/aws.png";

const logos = [
  google,
  Vercel,
  meta,
  hostinger,
  Digital,
  growthshark,
  adobe,
  aws,
  cognosutra,
  netlify,
];

const LogoSection = () => {
   const swiperRef = useRef(null);
  return (
    <section className="pt-15 relative z-10  px-6 ">
      <div className="flex items-center gap-6 max-w-7xl mx-auto lg:flex-row flex-col lg:px-0 px-6">
        {/* Heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Partners
          </h2>
        </div>

        {/* Logo Slider */}
        <div className="lg:w-2/3  lg:px-0 px-6 overflow-hidden relative">
          {/* Left fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-black to-transparent z-10"></div>

          {/* Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-black to-transparent z-10"></div>

  <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView="auto"
  spaceBetween={50}
  loop={true}
  speed={2000}
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
          
            {[...logos, ...logos, ...logos, ...logos, ...logos,...logos,...logos,...logos,...logos, ...logos].map((logo, i) => (
              <SwiperSlide
  key={i}
  className="!w-auto flex justify-center items-center transition-all duration-300 transform hover:scale-110 cursor-pointer py-5"
>
  <Image
    src={logo}
    alt={`Logo ${i + 1}`}
    height={80}
    className="h-14 w-auto transition-all duration-500"
  />
</SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;