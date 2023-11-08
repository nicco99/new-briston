import Link from "next/link";

export default function Cases() {
  return (
    <>
      <section className="cases-section pb-0">
        <div
          className="sec-bg"
          style={{ backgroundImage: "url(assets/images/background/bg1.jpg)" }}
        />
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>
              Our Services make Uniqueness <br />
              from Others
            </h2>
            <div className="text-decoration">
              <span className="left" />
              <span className="right" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="image">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/gallery/gallery1.jpg"
                    alt=""
                  />
                </div>
                <div className="overlay">
                  <div className="title">
                    <span className="icon">
                      <img src="/assets/images/icons/icon-8.png" alt="" />
                    </span>
                    Precision
                  </div>
                  <div className="link-btn">
                    <Link href="#">
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                  <div className="content">
                    <h4>Employees Outsourcing</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="image">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/gallery/gallery2.jpg"
                    alt=""
                  />
                </div>
                <div className="overlay">
                  <div className="title">
                    <span className="icon">
                      <img src="/assets/images/icons/icon-8.png" alt="" />
                    </span>
                    Precision
                  </div>
                  <div className="link-btn">
                    <Link href="#">
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                  <div className="content">
                    <h4>Payroll administration</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="image">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/gallery/gallery3.jpg"
                    alt=""
                  />
                </div>
                <div className="overlay">
                  <div className="title">
                    <span className="icon">
                      <img src="/assets/images/icons/icon-8.png" alt="" />
                    </span>
                    Precision
                  </div>
                  <div className="link-btn">
                    <Link href="#">
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                  <div className="content">
                    <h4>Contract management</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="image">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/gallery/gallery4.jpg"
                    alt=""
                  />
                </div>
                <div className="overlay">
                  <div className="title">
                    <span className="icon">
                      <img src="/assets/images/icons/icon-8.png" alt="" />
                    </span>
                    Precision
                  </div>
                  <div className="link-btn">
                    <Link href="#">
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                  <div className="content">
                    <h4>HR audits</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="image">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/gallery/gallery5.jpg"
                    alt=""
                  />
                </div>
                <div className="overlay">
                  <div className="title">
                    <span className="icon">
                      <img src="/assets/images/icons/icon-8.png" alt="" />
                    </span>
                    Precision
                  </div>
                  <div className="link-btn">
                    <Link href="#">
                      <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                  <div className="content">
                    <h4>Compensation & Benefits</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 case-block-one">
              <div className="inner-box">
                <div className="read-more-btn">
                  <Link href="#">
                    Check <br />
                    More Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
