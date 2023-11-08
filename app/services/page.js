import Layout from "@/components/layout/Layout";
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Our services"
        wrapperCls="home_1"
      >
        <div>
          <section className="services-section-six">
            <div className="auto-container">
              <div className="sec-title text-center">
                <h2>
                  Professional and <br /> dedicated HR consulting services
                </h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s1.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-up" />
                        </div>
                        <h4>Recruitment</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        We are experienced in sourcing and recruiting qualified
                        candidates who are a good fit for your company. We
                        either work with the client’s budget or the employee’s
                        budget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s2.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-chart" />
                        </div>
                        <h4>Employees Outsourcing</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        We understand that lower costs due to economies of scale
                        or lower labor rates will be beneficial to you. We are
                        also having vast employee outsourcing experience.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s3.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-business-and-finance" />
                        </div>
                        <h4>Payroll administration</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        We will identify your business needs, recommend
                        improvements to payroll services, best practices, as
                        well as computing payments, deductions, and tax
                        information.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s4.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-agreement" />
                        </div>
                        <h4>Human Resources Advisory</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        Service includes Ongoing advice on all employee
                        relations matters including management, managing
                        disciplinary processes and conduct management, managing
                        workplace conflict and internal grievances.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s5.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-thought" />
                        </div>
                        <h4>Contract management</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        Precision HR designs a tailored Contract of Employment
                        by explaining the main employment rights and setting
                        clear workplace boundaries. We analyze jobs that will
                        help is incorporate the duties and knowledge.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 service-block-six">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        className="lazy-image owl-lazy"
                        src="/assets/images/resource/s6.jpg"
                        alt=""
                      />
                      <div className="icon-box">
                        <div className="icon">
                          <span className="flaticon-gear-1" />
                        </div>
                        <h4>HR audits</h4>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text">
                        Every 6 months, Briston HR will perform a full audit of
                        all your Human Resources files and processes. We will
                        deliver a detailed report of our findings, and work with
                        you to correct any issues we discover.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section five */}
          <section className="services-section-five style-two">
            <div className="auto-container">
              <div className="top-content row m-0 justify-content-between">
                <div className="sec-title">
                  <h2>Industries we served</h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <div className="text">
                  Which is the same as saying through shrinking from toil and
                  pain <br /> these perfectly simple and easy to distinguish.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-bank" />
                      </div>
                      <h4>
                        Banking &amp; <br /> capital market
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-insurance" />
                      </div>
                      <h4>
                        Finance &amp; <br /> insurance market
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-trolley" />
                      </div>
                      <h4>
                        Logistic &amp; <br />
                        trasportation
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-null-1" />
                      </div>
                      <h4>
                        Justice &amp; <br /> defence security
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-petroleum" />
                      </div>
                      <h4>
                        Energy &amp; <br /> resource industry
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-block-five">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <h4>
                        Life &amp; <br /> health science
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonail Section Seven */}
          <section className="testimonial-section-seven">
            <div className="auto-container">
              <div className="sec-title text-center">
                <h2>Words from our customers</h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              {/*Theme Carousel*/}
              <TestimonialSlider5 />
            </div>
          </section>
          {/* Feature Section Two */}
          <section className="feature-section-two style-two">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-6 feature-block-two style-two">
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-9.png" alt="" />
                      </div>
                      <h4>Become a Partner of Briston HR</h4>
                      <div className="text">
                        To take a trivial example, which of us undertakes <br />
                        laborious physical exercise.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 feature-block-two style-two">
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-10.png" alt="" />
                      </div>
                      <h4>Career Opportunities in Briston HR</h4>
                      <div className="text">
                        Who chooses to enjoy a pleasure that has no one <br />
                        annoying consequences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
