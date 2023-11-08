"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,
  //         spaceBetween: 30,
  //     },
  //     575: {
  //         slidesPerView: 2,
  //         spaceBetween: 30,
  //     },
  //     767: {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //     },
  //     991: {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //     },
  //     1199: {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //     },
  //     1350: {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //     },
  // }
};

export default function MapSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel position-relative">
        <SwiperSlide className="inner-box">
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-discussion" />
            </div>
            <h4>KENYA</h4>
            <h5>Branches over 2 cities</h5>
          </div>
          <h3>01. Nairobi</h3>
          <ul>
            <li>Cianda House, Koinange Street</li>
            <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
            <li>
              <Link href="tel: +254738382516"> +254738382516 &amp; </Link>
            </li>
            <li>
              <Link href="mailto:CONSULT@BRISTONHR.COM">
                CONSULT@BRISTONHR.COM
              </Link>
            </li>
          </ul>
          <Link href="#" className="link-btn">
            Get Direction
          </Link>
        </SwiperSlide>
        <SwiperSlide className="inner-box">
          <div className="icon-box">
            <div className="icon">
              <span className="flaticon-discussion" />
            </div>
            <h4>Kenya</h4>
            <h5>Branches over 2 cities</h5>
          </div>
          <h3>01. Nairobi</h3>
          <ul>
            <li>Cianda House, Koinange Street</li>
            <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
            <li>
              <Link href="tel: +254738382516"> +254738382516 &amp; </Link>
            </li>
            <li>
              <Link href="mailto:CONSULT@BRISTONHR.COM">
                CONSULT@BRISTONHR.COM
              </Link>
            </li>
          </ul>
          <Link href="#" className="link-btn">
            Get Direction
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="owl-nav">
        <button type="button" className="owl-prev h1p">
          <span>‹</span>
        </button>
        <button type="button" className="owl-next h1n">
          <span>›</span>
        </button>
      </div>
    </>
  );
}
