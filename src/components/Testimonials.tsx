"use client"; // Required for Next.js app

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  { quote: "“This product changed our business!”", name: "John Doe" },
  { quote: "“An amazing experience overall.”", name: "Sarah Smith" },
  { quote: "“Highly recommended for professionals.”", name: "Michael Johnson" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        What Our Clients Say
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-8 shadow-lg rounded-2xl bg-white text-gray-700 min-h-[250px]"
          >
            <p className="italic">{testimonial.quote}</p>
            <h3 className="mt-4 font-bold">- {testimonial.name}</h3>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden mt-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="max-w-sm"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-2xl bg-white text-gray-700 min-h-[250px]">
                <p className="italic">{testimonial.quote}</p>
                <h3 className="mt-4 font-bold">- {testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
