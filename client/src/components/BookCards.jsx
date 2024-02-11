import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCartShopping } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

import "../components/BookCards.css";

import { Pagination } from "swiper/modules";

export default function BookCards({ headline, books }) {
  return (
    <div className="px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/api/book/getsinglebook/${book._id}`}>
                <div
                  className=" relative bg-gray-200 p-8 rounded-lg text-center hover:bg-blue-300 hover:transition-all hover:shadow-md
                 hover:shadow-black/50"
                >
                  <img
                    src={book.imageURL}
                    alt=""
                    className="shadow-lg transform transition duration-300 ease-in-out hover:scale-110 "
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p>{`\u20B9 ${book.bookPrice}`}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
