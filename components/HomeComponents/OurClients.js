"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import english from "../../public/english.png";
import bewakoof from "../../public/bewakoof.jpg";
import emolifi from "../../public/emolifi.png";
import Everkind from "../../public/Everkind.png";
import growthshark from "../../public/growthshark.png";
import S_IB from "../../public/S_IB.png";
import hrp from "../../public/hrp.webp";
import hypergetshop from "../../public/hypergetshop.png";
import icons8 from "../../public/icons8.png";
// import itcosmetics from "../../public/itcosmetics.png";
import keyaseth from "../../public/keyaseth.png";
import kruti from "../../public/kruti.webp";
import mechanic from "../../public/mechanic.png";
import mfine from "../../public/mfine.png";
import myhealthcare from "../../public/myhealthcare.png";
// import nextprotocol from "../../public/nextprotocol.png";
// import peakdesign from "../../public/peakdesign.png";
import petaversa from "../../public/petaversa.png";
import phajil from "../../public/phajil.webp";
// import poolz from "../../public/poolz.png";
import space from "../../public/space.png";
import spythar from "../../public/spythar.png";
import sroutsocial from "../../public/sroutsocial.png";
import traveloka from "../../public/traveloka.webp";
import VoiceMap from "../../public/VoiceMap.png";
import workday from "../../public/workday.png";
import yesstyle from "../../public/yesstyle.png";

const logos = [
  bewakoof,
  Everkind,
  growthshark,
  emolifi,
  english,
  S_IB,
  icons8,
  hrp,
  hypergetshop,
  keyaseth,
  kruti,
  mechanic,
  mfine,
  myhealthcare,
  
  phajil,
  petaversa,
  
  space,
  spythar,
  sroutsocial,
  traveloka,
  VoiceMap,
  workday,
  yesstyle,
];

const LogoSection = () => {
   const swiperRef = useRef(null);
  return (
    <section className="pt-15 relative z-10  px-6 ">
      <div className="flex items-center gap-6 max-w-7xl mx-auto lg:flex-row flex-col lg:px-0 px-6">
        {/* Heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Clients
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