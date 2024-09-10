import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <section className="relative xl:h-screen background-container mt-10 lg:mt-16">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/Group 9 (2).png" className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner-k3lh-1 (1).png" className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/bgweb2.png" className="object-cover w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
