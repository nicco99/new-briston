import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer sp-two">
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              {/*Column*/}
              <div className="column col-lg-5">
                <div className="row">
                  <div className="col-md-7">
                    <div className="footer-widget logo-widget">
                      <div className="widget-content">
                        <div className="footer-logo">
                          <Link href="/">
                            <img
                              className="lazy-image"
                              src="/assets/images/logo-1.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <h3>
                          What will <br />
                          be the next step?{" "}
                        </h3>
                        <div className="link-btn">
                          <Link href="#" className="theme-btn">
                            <i className="flaticon-right" />
                            Experts advice
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Company</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="/about-2">About</Link>
                          </li>
                          <li>
                            <Link href="/team-1">Meet Our Team</Link>
                          </li>

                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/contact-1">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Essential</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="#">Features</Link>
                          </li>

                          <li>
                            <Link href="/testimonial-1">Testimonals</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Support</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="#">Live Chat</Link>
                          </li>
                          <li>
                            <Link href="/faq">FAQ’s</Link>
                          </li>
                          <li>
                            <Link href="#">Locations</Link>
                          </li>
                          <li>
                            <Link href="#">Policies</Link>
                          </li>
                          <li>
                            <Link href="#">Resources</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-lg-3">
                <h3 className="widget-title">Projects</h3>
                <div className="footer-widget instagram-widget">
                  <div className="inner-box">
                    <div className="wrapper-box">
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery6.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery6.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery7.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery7.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery8.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery8.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery9.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery9.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery10.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery10.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/gallery/gallery11.jpg"
                          alt=""
                        />
                        <div className="overlay-link">
                          <Link
                            href="/assets/images/gallery/gallery11.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /.gallery-wrapper */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="auto-container">
          <div className="footer-bottom">
            <div className="row m-0 justify-content-between">
              <ul className="menu">
                <li>
                  <Link href="#">Privacy Policy </Link>
                </li>
                <li>
                  <Link href="#">Terms &amp; Conditions</Link>
                </li>
              </ul>
              {/*Scroll to top Two*/}
              <div
                className="scroll-to-top-two scroll-to-target"
                data-target="html"
              >
                <i className="flaticon-backward" />
                Get back to home
              </div>
            </div>
            <ul className="social-links clearfix">
              <li>
                <Link href="#">
                  <span className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-google-plus-g" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-skype" />
                </Link>
              </li>
            </ul>
            <div className="copyright">
              © {new Date().getFullYear()} <Link href="#">BRISTONHR</Link>{" "}
              Consultancy, All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
