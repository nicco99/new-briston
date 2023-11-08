import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Testimonials"
        wrapperCls="home_1"
      >
        <div>
          <section className="testimonial-section-eight">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 testimonial-block-four">
                  <div className="inner-box">
                    <div className="row m-0">
                      <div className="image">
                        <img src="/assets/images/resource/image20.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="icon-box">
                          <div className="icon">
                            <img
                              src="/assets/images/icons/icon-61.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Best Service Ever, We <br />
                            Highly Recommend!
                          </h4>
                        </div>
                        <div className="text">
                          I can't say enough about the exceptional HR services
                          provided by
                          <br />
                          BristonHR. The professionalism and expertise of their
                          consultants are truly commendable <br />
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
                          Boris Elbert,{" "}
                          <span className="designation">
                            Developer Blue Soft.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 image-block">
                  <div className="image">
                    <img src="/assets/images/resource/image21.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-4 image-block">
                  <div className="image">
                    <img src="/assets/images/resource/image41.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-8 testimonial-block-four">
                  <div className="inner-box">
                    <div className="row m-0">
                      <div className="image">
                        <img src="/assets/images/resource/image42.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="icon-box">
                          <div className="icon">
                            <img
                              src="/assets/images/icons/icon-61.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Pleasure to work with <br /> your team.
                          </h4>
                        </div>
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
                          Ivor Herbert,{" "}
                          <span className="designation">Manager Airlines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 testimonial-block-four">
                  <div className="inner-box">
                    <div className="row m-0">
                      <div className="image">
                        <img src="/assets/images/resource/image43.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="icon-box">
                          <div className="icon">
                            <img
                              src="/assets/images/icons/icon-61.png"
                              alt=""
                            />
                          </div>
                          <h4>
                            Your efforts have been <br /> invaluable.
                          </h4>
                        </div>
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
                          Fleix Everard,{" "}
                          <span className="designation">HR, Blue Soft Sol</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 image-block">
                  <div className="image">
                    <img src="/assets/images/resource/image44.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Meet Up Section */}
          <section
            className="meet-up-section"
            style={{
              backgroundImage: "url(assets/images/background/bg101.jpg)",
            }}
          >
            <div className="auto-container">
              <div className="content-box">
                <div className="icon">
                  <span className="flaticon-team-1" />
                </div>
                <h3>Start Here</h3>
                <h1>Never Give up</h1>
                <div className="text">
                  Nairobi CBD, Cianda House, 9th Floor room number 910
                </div>
                <ul>
                  <li>
                    <Link href="Tel: 0738382516">
                      <i className="flaticon-phone" />
                      254738 382 516
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:consult@bristonhr.com">
                      <i className="flaticon-mail-1" />
                      consult@bristonhr.com
                    </Link>
                  </li>
                </ul>
                <div className="link-btn">
                  <Link href="#" className="theme-btn btn-style-two">
                    <span className="btn-title">
                      APPOINTMENT <i className="flaticon-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
