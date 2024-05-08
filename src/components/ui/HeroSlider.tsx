import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Imgix from "react-imgix";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper bg-black !relative"
      >
        <SwiperSlide>
          <Imgix
            className="w-full h-screen object-cover"
            src="https://res.cloudinary.com/ddwkntgdf/image/upload/v1709750106/og0f2n1r7l7turdktqbt.jpg"
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FDJI_0771logo.jpg?alt=media&token=62c05655-e615-426c-aef3-5654300aa6e6"
            alt="photography"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FDSC_4340a.jpg?alt=media&token=56561732-e7eb-4306-abbd-11acb078b150"
            alt="photography"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
