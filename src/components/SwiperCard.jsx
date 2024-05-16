import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../style.css";

import { Pagination } from "swiper/modules";
import Comments from "./Comments";

export default function SwiperCard() {
  return (
    <div className="swiper_card-container">
     <p className="clients_say">What our clients say</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
        <SwiperSlide style={{padding: "3px" }}>
          <Comments />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
