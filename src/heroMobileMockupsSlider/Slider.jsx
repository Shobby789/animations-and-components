import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "/mobile-mockup-01.png";
import slide_image_2 from "/mobile-mockup-02.png";
import slide_image_3 from "/mobile-mockup-03.png";
import slide_image_4 from "/mobile-mockup-04.png";
import slide_image_5 from "/mobile-mockup-05.png";
import slide_image_6 from "/mobile-mockup-06.png";
// import slide_image_7 from "/2.jpg";

function Slider() {
  return (
    <div className="w-full h-[100vh] bg-gray-950 relative mx-auto flex items-end justify-center">
      <img
        src="/iphone-mockup.png"
        alt=""
        className="w-[17.5rem] z-20 absolute left-1/2 -translate-x-1/2 bottom-0"
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 150,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Keep autoplay running even when user interacts
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="relative h-[59vh] flex items-center"
      >
        {[
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
        ].map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-[17rem] h-full relative rounded-[3rem]"
          >
            <img
              src={image}
              alt={`slide_image_${index + 1}`}
              className="w-[17rem] h-full rounded-[3rem] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
