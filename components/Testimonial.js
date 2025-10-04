"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaBrain,
  FaDatabase,
  FaQuestionCircle,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    firstname: 'Tom',
    lastname: 'Ford',
    position: 'CEO, Iennep',
    testimonial: 'Their design process was smooth and easy to follow. Highly recommend.',
  },
  {
    firstname: 'Devid',
    lastname: 'Dee',
    position: 'CEO, Deepstack',
    testimonial: 'Impressive results in record time. These guys know what they\'re doing.',
  },
  {
    firstname: 'Jacob',
    lastname: 'Thomason',
    position: 'CEO, Rentpost',
    testimonial: 'Very professional team that delivered beyond expectations!',
  },
  {
    firstname: 'Jenny',
    lastname: 'Mark',
    position: 'CEO, Cofi',
    testimonial: 'Loved working with them. Great results and support throughout.',
  },
  {
    firstname: 'Tom',
    lastname: 'Ford',
    position: 'CEO, Iennep',
    testimonial: 'Their design process was smooth and easy to follow. Highly recommend.',
  },
  {
    firstname: 'Devid',
    lastname: 'Dee',
    position: 'CEO, Deepstack',
    testimonial: 'Impressive results in record time. These guys know what they\'re doing.',
  },
  {
    firstname: 'Jacob',
    lastname: 'Thomason',
    position: 'CEO, Rentpost',
    testimonial: 'Very professional team that delivered beyond expectations!',
  },
  {
    firstname: 'Jenny',
    lastname: 'Mark',
    position: 'CEO, Cofi',
    testimonial: 'Loved working with them. Great results and support throughout.',
  },
];

const VortaskyAISection = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCoords({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.2), transparent 60%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={spotlightStyle}
      />

      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
           About Us
          </h2>

          <div className="mb-12">
            <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Vortasky Intelligent Routing That Delivers
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Automatically route conversations to the right agent or
                    department—no delays, no confusion.
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-fit">
                    Get Started →
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4 rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10">
                    <FaBrain className="mx-auto mb-1 text-white" size={24} />
                    <p className="text-white font-semibold">
                      Intelligent Routing
                    </p>
                  </div>
                  <svg
                    className="w-64 h-16 mb-4"
                    viewBox="0 0 256 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M128 0 V32 M64 32 H192 M64 32 V64 M128 32 V64 M192 32 V64"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="flex justify-around w-full gap-4">
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaQuestionCircle
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Help Centre</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaEnvelope
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Email Marketing</p>
                    </div>
                    <div className="text-center rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/10 flex-1">
                      <FaHeadset
                        className="mx-auto mb-1 text-white"
                        size={24}
                      />
                      <p className="text-gray-300">Preferred Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Mission",
                desc: "Deliver personalized experiences by speaking every customer's language.",
                languages: ["English", "Spanish", "Bangla"],
                avatars: true,
              },
              {
                title:
                  "Vission",
                desc: "Vortasky AI remembers and understands conversation context to deliver truly personalized experiences.",
                highlight: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
              >
                <div
                  className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center w-full">
                  {item.title && (
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {item.title}
                    </h3>
                  )}
                  {item.desc && (
                    <p className="text-gray-300 mb-4 text-center">
                      {item.desc}
                    </p>
                  )}
                  {item.languages && (
                    <div className="space-y-2 mb-4 w-full max-w-xs">
                      {item.languages.map((lang, j) => (
                        <div
                          key={j}
                          className="bg-black/60 p-2 rounded text-gray-300 text-center flex justify-between items-center border border-white/10"
                        >
                          {lang}
                          <span>▼</span>
                        </div>
                      ))}
                    </div>
                  )}
                 
                  {!item.languages && (
                    <div className="relative w-full h-40 mt-4">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="25%"
                          y1="10%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="75%"
                          y1="10%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="20%"
                          y1="90%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <line
                          x1="80%"
                          y1="90%"
                          x2="50%"
                          y2="50%"
                          stroke="white"
                          strokeWidth="1"
                        />
                      </svg>
                      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaDatabase
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">
                            User Experience
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 transform translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaCheckCircle
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">Final Result</p>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <FaBrain className="mx-auto text-white" size={40} />
                      </div>
                      <div className="absolute bottom-0 right-0 transform -translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaArrowRight
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">Data Infoflow</p>
                        </div>
                      </div>
                      <div className="absolute top-0 right-1/4 transform translate-x-1/2 text-center">
                        <div className="rounded-lg bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <FaBrain
                            className="mx-auto mb-1 text-white"
                            size={24}
                          />
                          <p className="text-gray-300 text-sm">
                            AI Knowledge
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <section className="py-16 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                What <span className="text-[#0ebac7]">People</span> Say About Us
              </h2>

              <div className="relative overflow-hidden">
                <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
                <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>

                <div
                  ref={prevRef}
                  className="swiper-button-prev !text-[#0ebac7] absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
                />
                <div
                  ref={nextRef}
                  className="swiper-button-next !text-[#0ebac7] absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
                />

                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView="auto"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  grabCursor
                >
                  {testimonials.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <SwiperSlide
                        key={index}
                        style={{
                          width: isActive ? '500px' : '250px',
                          transition: 'width 0.3s ease',
                        }}
                      >
                        <div
                          className={`h-[250px] relative rounded-2xl p-4 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] ${isActive
                            ? 'flex flex-row gap-4 items-start'
                            : 'flex flex-col items-center justify-center mb-10'
                          }`}
                        >
                          <div
                            className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background:
                                "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                            }}
                          />

                          <div className="w-1/2 h-full flex flex-col items-center justify-center text-center relative z-10">
                            <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-2xl font-bold mb-2">
                              {item.firstname[0]}{item.lastname[0]}
                            </div>
                            <h4 className="text-lg font-semibold">{item.firstname}</h4>
                            <h4 className="text-lg font-semibold">{item.lastname}</h4>
                            <p className="text-sm mt-5 text-gray-300">{item.position}</p>
                          </div>

                          {isActive && (
                            <div className="w-1/2 relative flex items-center justify-center text-center text-sm h-full px-4 relative z-10">
                              <div className="absolute text-[10rem] sm:text-[14rem] text-[#0ebac7] opacity-15 pointer-events-none select-none leading-none">
                                &ldquo;
                              </div>
                              <p className="relative z-10 max-w-[90%] text-gray-300">{item.testimonial}</p>
                            </div>
                          )}

                          <button
                            onClick={() =>
                              setActiveIndex(isActive ? null : index)
                            }
                            className="absolute bottom-3 right-3 w-7 h-7 bg-[#0ebac7] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0ebac7] transition relative z-10"
                          >
                            {isActive ? <FaTimes size={12} /> : <FaArrowRight size={12} />}
                          </button>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default VortaskyAISection;