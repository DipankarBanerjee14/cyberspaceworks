'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
// import Image1 from '../../assets/images1.jpg';
// import Image2 from '../../assets/images2.jpg';
// import Image3 from '../../assets/images3.jpg';
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
        <section className="relative z-10 py-16 px-6 bg-transparent text-white">
              {/* cyan blurred background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[100px] rounded-full blur-[200px] bg-[#0ebac7] opacity-100" />
      </div>
            <h2 className="text-4xl font-bold text-center mb-12">
                What <span className="text-[#0ebac7]">People</span> Say About Us
            </h2>

            <div className="relative overflow-hidden">
                {/* Left fade */}
                <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-100 bg-gradient-to-r from-[#0D2D2A] to-transparent z-10"></div>

                {/* Right fade */}
                <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-100 bg-gradient-to-l from-[#0D2D2A] to-transparent z-10"></div>

                {/* Custom Navigation Arrows */}
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
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
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
                                    className={`h-[250px] relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group transition-all duration-300 ${isActive
                                        ? 'flex flex-row gap-4 items-start'
                                        : 'flex flex-col items-center justify-center mb-10'
                                        }`}
                                >
                                    {/* glow behind each card */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-[140px] bg-[#0ebac7]/30"
                                    />

                                    {/* Avatar and Name */}
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center text-center">
                                        <img
                                            src={item.avatar}
                                            alt={`${item.firstname} ${item.lastname}`}
                                            className="w-24 h-24 rounded-full mb-2 object-cover"
                                        />
                                        <h4 className="text-lg font-semibold">{item.firstname}</h4>
                                        <h4 className="text-lg font-semibold">{item.lastname}</h4>
                                        <p className="text-sm mt-5 text-gray-300">{item.position}</p>
                                    </div>

                                    {/* Testimonial */}
                                    {isActive && (
                                        <div className="w-1/2 relative flex items-center justify-center text-center text-sm h-full px-4">
                                            {/* Background Double Quote */}
                                            <div className="absolute text-[10rem] sm:text-[14rem] text-[#0ebac7] opacity-15 pointer-events-none select-none leading-none">
                                                &ldquo;
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="relative z-10 max-w-[90%] text-gray-300">{item.testimonial}</p>
                                        </div>
                                    )}


                                    {/* Expand/Collapse Button */}
                                    <button
                                        onClick={() =>
                                            setActiveIndex(isActive ? null : index)
                                        }
                                        className="absolute bottom-3 right-3 w-7 h-7 bg-[#0ebac7] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0ebac7] transition"
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