import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Team Members"
        wrapperCls="home_1"
      >
        <div>
          <section className="team-section-two">
            <div className="auto-container">
              <div className="sec-title text-center">
                <h2>
                  Each member of our <br /> team is a specialist in his or her
                  field
                </h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              <div className="row">
                <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/a1.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">Lead Consultant</div>
                      <h4>Alexander Kiemo</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +254 21 204 120
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            akiemo@bristonhr.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/team2.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">
                        Talent Acquisition Specialist
                      </div>
                      <h4>Cloris M.</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +254 719 643 863
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            cmutuku@bristonhr.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/avatar.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">
                        Human Resource Specialist
                      </div>
                      <h4>Zipporah Warunguru</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +25444 555 123
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            zipporah@bristonhr.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/avatar.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">Sociologist</div>
                      <h4>DR. James Karatu </h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +25444 555 123
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            james@bristonhr.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/team-5.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">donnie@Envolve.com</div>
                      <h4>Jerome Hobert</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +44 555 66 456
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            hobert@Envolve.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/team-6.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">Marketing Officer</div>
                      <h4>Leonard Melvin</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +44 555 66 000
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            melvin@Envolve.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                {/* </div>
                <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/team-7.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">Ceo &amp; Founder</div>
                      <h4>Adam Clinton</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +44 555 66 789
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            theodore@Envolve.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="team-block-one col-lg-3 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/assets/images/resource/team-8.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                      <div className="designation">Managing Director</div>
                      <h4>Homer Donnie</h4>
                      <ul className="list">
                        <li>
                          <Link href="#">
                            <span className="flaticon-call" />
                            +44 555 66 123
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="flaticon-bag" />
                            donnie@Envolve.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* CTA Section Two */}
          <section
            className="cta-section-two style-two"
            style={{
              backgroundImage: "url(assets/images/background/bg-18.jpg)",
            }}
          >
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2>
                    <span className="flaticon-team" />
                    Sharing Expertise. Building <br />
                    Relationships.
                  </h2>
                </div>
                <div className="col-lg-5">
                  <div className="wrapper-box">
                    <div className="contact-info">
                      <div className="icon">
                        <span className="flaticon-call-1" />
                      </div>
                      <h4>+254738382516 </h4>
                      <div className="text">CONSULT@BRISTONHR.COM</div>
                    </div>
                    <Link href="#" className="theme-btn btn-style-two">
                      <span className="btn-title">Let’s Start</span>
                    </Link>
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
