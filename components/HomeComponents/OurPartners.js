"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

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
];

const LogoSection = () => {
  return (
    <section className="mt-12 relative z-10 px-6 mb-16">
      <div className="flex items-center gap-6 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Partners
          </h2>
        </div>

        {/* Logo Slider */}
        <div className="w-2/3 relative">
          {/* Left fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-black to-transparent z-10"></div>

          {/* Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-black to-transparent z-10"></div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={50}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            allowTouchMove={false}
            modules={[Autoplay, FreeMode]}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <SwiperSlide
                key={i}
                className="!w-auto flex justify-center items-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <Image
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  height={56} // fixed height from previous code
                  className="w-auto object-contain transition-all duration-500"
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
