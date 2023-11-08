"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider5() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  “Briston HR have done an excellent job presenting the analysis
                  &amp; insights. we are confident that they have helped move
                  our business forward.”
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star style-two" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb5.jpg" alt="" />
                </div>
                <div className="author-title">Boris Elbert</div>
                <div className="designation">Green Tech</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  "HR Solutions by Briston has been a game-changer for our small
                  business. As a startup, we needed scalable HR support without
                  the overhead"
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb6.jpg" alt="" />
                </div>
                <div className="author-title">Fleix Everard</div>
                <div className="designation">HR, Blue Soft Sol</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  "Briston HR has transformed the way we handle HR within our
                  organization. Their innovative HR software has simplified our
                  administrative tasks, saving us time and resources"
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star style-two" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb5.jpg" alt="" />
                </div>
                <div className="author-title">Boris Elbert</div>
                <div className="designation">Green Tech</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  "I can't say enough about the exceptional HR services provided
                  by Briston HR. From day one, their team has shown a deep
                  understanding of our unique HR needs"
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb6.jpg" alt="" />
                </div>
                <div className="author-title">Fleix Everard</div>
                <div className="designation">HR, Blue Soft Sol</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  "Their commitment to diversity and inclusion aligns with our
                  values. Their guidance in talent acquisition and employee
                  development has been invaluable"
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star style-two" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb5.jpg" alt="" />
                </div>
                <div className="author-title">Boris Elbert</div>
                <div className="designation">Green Tech</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="logo">
                  <div className="default">
                    <img src="/assets/images/resource/client18.png" alt="" />
                  </div>
                  <div className="hover">
                    <img src="/assets/images/resource/client19.png" alt="" />
                  </div>
                </div>
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  "As a nonprofit organization, we needed HR support that
                  understood our unique challenges. Briston HR not only
                  understands but actively supports our mission"
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                </div>
              </div>
              <div className="author-box">
                <div className="image">
                  <img src="/assets/images/resource/author-thumb6.jpg" alt="" />
                </div>
                <div className="author-title">Fleix Everard</div>
                <div className="designation">HR, Blue Soft Sol</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination relative" />
      </Swiper>
    </>
  );
}
