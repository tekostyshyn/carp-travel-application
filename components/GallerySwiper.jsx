"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../styles/swiper.css";

import slide_image_1 from "../public/images/gallery1.jpeg";
import slide_image_2 from "../public/images/gallery2.jpeg";
import slide_image_3 from "../public/images/gallery3.jpeg";
import slide_image_4 from "../public/images/gallery1.jpeg";
import slide_image_5 from "../public/images/gallery2.jpeg";
import slide_image_6 from "../public/images/gallery3.jpeg";

SwiperCore.use([Navigation]);

const GallerySwiper = () => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      spaceBetween={24}
      navigation={{
        nextEl: ".swiper_button_next",
        prevEl: ".swiper_button_prev",
        clickable: true,
      }}
      className="swiper_container"
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_3} alt="slide_image" />
      </SwiperSlide>

      <button className="swiper_button_prev">PREV</button>
      <button className="swiper_button_next">NEXT</button>
    </Swiper>
  );
};

export default GallerySwiper;
