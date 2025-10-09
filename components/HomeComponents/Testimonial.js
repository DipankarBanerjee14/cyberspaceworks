'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
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
    testimonial: 'Impressive results in record time. These guys know what they’re doing.',
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
    testimonial: 'Impressive results in record time. These guys know what they’re doing.',
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

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative bg-black text-black px-6 py-16 overflow-hidden">
      {/* 🌟 Soft global teal glow in background */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 80% 80%, rgba(14,186,199,0.18), transparent 60%)',
        }}
      /> */}

      <h2 className="text-4xl font-bold text-center mb-12 text-white relative z-10">
        What <span className="text-[#0ebac7]">People</span> Say About Us
      </h2>

      <div className="relative overflow-hidden z-10">
        {/* Left fade */}
        <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-100 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Right fade */}
        <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-100 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Custom Navigation Arrows */}
        <div
          ref={prevRef}
          className="swiper-button-prev !text-white absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
        />
        <div
          ref={nextRef}
          className="swiper-button-next !text-white absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
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
                  className={`h-[250px] bg-cyan-400/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 relative overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'flex flex-row gap-4 items-start'
                      : 'flex flex-col items-center justify-center mb-10'
                  } group`}
                >
                  {/* ✨ Glow background (only visible when active) */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 animate-fadeIn transition-opacity duration-500"
                      aria-hidden
                      style={{
                        background:
                          'radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)',
                      }}
                    />
                  )}

                  {/* Avatar and Name */}
                  <div className="w-1/2 h-full flex flex-col items-center justify-center text-center text-black">
                    <img
                      src={item.avatar || 'https://via.placeholder.com/100'}
                      alt={`${item.firstname} ${item.lastname}`}
                      className="w-24 h-24 rounded-full mb-2 object-cover"
                    />
                    <h4 className="text-lg font-semibold">{item.firstname}</h4>
                    <h4 className="text-lg font-semibold">{item.lastname}</h4>
                    <p className="text-sm mt-5 text-gray-800">{item.position}</p>
                  </div>

                  {/* Testimonial */}
                  {isActive && (
                    <div className="w-1/2 relative flex items-center justify-center text-center text-sm h-full px-4 text-black">
                      {/* Background Double Quote */}
                      <div className="absolute text-[10rem] sm:text-[14rem] text-black/10 pointer-events-none select-none leading-none">
                        &ldquo;
                      </div>

                      {/* Testimonial Text */}
                      <p className="relative z-10 max-w-[90%]">{item.testimonial}</p>
                    </div>
                  )}

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="absolute bottom-3 right-3 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                  >
                    {isActive ? <FaTimes size={12} /> : <FaArrowRight size={12} />}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
