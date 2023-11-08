"use client";
import { useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperOptions1 = {
    modules: [FreeMode, Autoplay, Navigation, Thumbs],
    onSwiper: setThumbsSwiper,
    freeMode: true,
    // preloadImages: false,
    loop: true,
    speed: 2400,
    spaceBetween: 0,
    effect: "slide",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  const swiperOptions2 = {
    modules: [FreeMode, Autoplay, Navigation, Thumbs],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: { swiper: thumbsSwiper },
    // preloadImages: false,
    loop: true,
    speed: 2400,
    spaceBetween: 0,
    effect: "slide",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <>
      <section className="testimonial-section">
        <div className="auto-container">
          <div className="testimonial-outer">
            <div className="testimonial-carousel">
              <div className="row m-0">
                <div className="col-xl-6 p-0">
                  <Swiper
                    {...swiperOptions1}
                    // navigation={true}
                    className="swiper-container testimonial-thumbs"
                  >
                    <SwiperSlide>
                      <div className="author-thumb">
                        <img src="/assets/images/resource/image6.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="author-thumb">
                        <img src="/assets/images/resource/image7.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="author-thumb">
                        <img src="/assets/images/resource/image6.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="author-thumb">
                        <img src="/assets/images/resource/image7.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-xl-6 p-0">
                  <div
                    className="swiper-container testimonial-content wow fadeInUp"
                    data-wow-delay="300ms"
                    style={{
                      backgroundImage: "url(assets/images/background/bg2.jpg)",
                    }}
                  >
                    <Swiper {...swiperOptions2} className="swiper-wrapper">
                      <SwiperSlide>
                        {/* Testimonial Block */}
                        <div className="testimonial-block">
                          <div className="inner-box">
                            <div className="icon">
                              <span className="flaticon-blog" />
                            </div>
                            <h4>
                              Best Service Ever, We <br />
                              Highly Recommend!
                            </h4>
                            <div className="text">
                              I can't say enough about the exceptional HR
                              services provided by
                              <br />
                              BristonHR. The professionalism and expertise of
                              their consultants are truly commendable <br />
                              I highly recommend their services to any business
                              looking for comprehensive HR solutions.
                              <br />
                            </div>
                            <div className="rating">
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                            </div>
                            <div className="author-title">
                              Edwin Elbert,{" "}
                              <span className="designation">
                                Developer Blue Soft.
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* Testimonial Block */}
                        <div className="testimonial-block">
                          <div className="inner-box">
                            <div className="icon">
                              <span className="flaticon-blog" />
                            </div>
                            <h4>
                              Best Service Ever, We <br />
                              Highly Recommend!
                            </h4>
                            <div className="text">
                              Briston has transformed the <br />
                              way we handle HR within our organization. Their
                              <br />
                              innovative HR software has simplified our
                              <br />
                              administrative tasks, saving us time and
                              <br />
                              resources.
                            </div>
                            <div className="rating">
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                            </div>
                            <div className="author-title">
                              Mark Rodgruez,{" "}
                              <span className="designation">
                                Super Loaf Company.
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* Testimonial Block */}
                        <div className="testimonial-block">
                          <div className="inner-box">
                            <div className="icon">
                              <span className="flaticon-blog" />
                            </div>
                            <h4>
                              Best Service Ever, We <br />
                              Highly Recommend!
                            </h4>
                            <div className="text">
                              I've worked with numerous HR service providers in{" "}
                              <br />
                              the past, but Briston stands
                              <br />
                              out as a cut above the rest. They've tailored
                              <br />
                              their services to meet our industry-specific
                              <br />
                              needs, ensuring compliance and efficiency
                              <br />
                            </div>
                            <div className="rating">
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                            </div>
                            <div className="author-title">
                              Ramirez,{" "}
                              <span className="designation">
                                Manager Blue Nile.
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* Testimonial Block */}
                        <div className="testimonial-block">
                          <div className="inner-box">
                            <div className="icon">
                              <span className="flaticon-blog" />
                            </div>
                            <h4>
                              Best Service Ever, We <br />
                              Highly Recommend!
                            </h4>
                            <div className="text">
                              As a nonprofit organization, we needed HR support{" "}
                              <br />
                              that understood our unique challenges. BristonHr
                              not only understands but <br />
                              actively supports our mission. <br />
                            </div>
                            <div className="rating">
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                              <span className="flaticon-star" />
                            </div>
                            <div className="author-title">
                              Nicholas Gacheri,{" "}
                              <span className="designation">
                                JefNine Stores.
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-nav-button">
                      {/* Add Arrows */}
                      <div className="swiper-button-next">
                        <i className="flaticon-right-arrow" />
                      </div>
                      <div className="swiper-button-prev">
                        <i className="flaticon-right-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
