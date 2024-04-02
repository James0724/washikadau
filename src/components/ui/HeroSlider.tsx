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
          delay: 10000,
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
          <Imgix
            className="w-full h-screen object-cover"
            src="https://res.cloudinary.com/ddwkntgdf/image/upload/v1709750101/cpkjxwaro5c4tbbcbmro.jpg"
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
