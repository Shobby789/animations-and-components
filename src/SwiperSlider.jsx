import "./App.css";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 3,
    },
  },
};

// import required modules
import { Navigation } from "swiper/modules";
import { reviews } from "./reviews";

function SwiperSlider() {
  return (
    <div className="w-full p-6 overflow-hidden">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">This is Swiper Component</h1>
      </div>

      <Swiper {...sliderSettings} className="mySwiper my-12">
        <SwiperButtons />
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-2xl p-6 h-40">
              <h1 className="mb-3 font-bold text-base">{review.title}</h1>
              <p className="text-sm">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-end gap-2 absolute -top-20 right-1">
      <button
        className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center"
        onClick={() => swiper.slidePrev()}
      >
        <FaLessThan className="text-base" />
      </button>
      <button
        className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center"
        onClick={() => swiper.slideNext()}
      >
        <FaGreaterThan className="text-base" />
      </button>
    </div>
  );
};
