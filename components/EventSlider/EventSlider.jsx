import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import img from './Images/recruitment.png';
import recuritment24img from './Images/recuritment24.png';
import dsaBootcamp25 from './Images/DSABootcamp2025.jpg';
import eventImg from './Images/event.png';
import classes from './eventSlider.module.css';
import 'swiper/css/effect-cards';

const EventSlider = () => {
  return (
    <>
      <div className="pt-20 lg:pl-32 lg:pr-32">
        <h1 className="ml-12 text-center font-Paytone text-xl font-semibold text-white lg:ml-0 lg:text-4xl">
          Upcoming <span className="text-[#f32053]"> Events </span>{' '}
        </h1>
      </div>
      <div className={classes.eventmaindiv}>
        <Link href="events" className={classes.imagediv}>
          <Image style={{ cursor: 'pointer' }} alt="eventabcde" src={dsaBootcamp25} objectFit="cover" className={classes.posterimage} />
        </Link>
        <div className={classes.eventcontentdiv}>
          <h1>
            DSA Bootcamp <span>2025</span>
          </h1>
          <h3>
            Level up your Data Structures & Algorithms: Join our intensive coding bootcamp.
          </h3>
          <Link href="events">
            <button className={classes.btn}>
              <span className={classes.span}>Register Now</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="m-12 lg:m-[300px] lg:mt-12 lg:mb-0 lg:pl-16 lg:pr-16">
        <Swiper
          className="m-8 rounded-xl "
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1.5}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          //   navigation={true}
          modules={[Zoom, Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="justify-center   rounded-xl  text-center">
            <Link href="/masterstalk">
              <div style={{ cursor: 'pointer' }}>
                <Image alt="eventabcde" src={abcde} objectFit="cover" className="rounded-xl" />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
};
export default EventSlider;
