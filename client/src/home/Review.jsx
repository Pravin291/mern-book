import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ReviewUsable from "./ReviewUsable";
export default function Review() {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug ">
        Our Customers
      </h2>
      <div>
        <Swiper 
          
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ReviewUsable />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewUsable />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewUsable />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewUsable/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
