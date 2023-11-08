import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <>
      <section
        className={`hidden-sidebar ${isSidebar ? "" : "close-sidebar"}`}
        style={{
          right: `${isSidebar ? "0" : "-480px"}`,
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        }}
      >
        <div className="wrapper-box">
          <div className="hidden-sidebar-close" onClick={handleSidebar}>
            <span className="flaticon-remove" />
          </div>
          <div className="logo">
            <Link href="#">
              <img src="/assets/images/logo-1.jpg" alt="" />
            </Link>
          </div>
          <div className="content">
            <div className="about-widget-two sidebar-widget">
              <h3>
                Smart Human Resource Consultancy <br />
                in Nairobi Kenya
              </h3>
              <div className="text">
                We denounce with righteous indignation and dislike men who we
                are to beguiled demoralized by the charms of pleasures that
                moment, so we blinded desires, that they indignations.
              </div>
            </div>
            {/* News Widget */}
            <div className="news-widget sidebar-widget">
              <div className="widget-title">News &amp; Updates</div>
              <div className="post-wrapper">
                <div className="image">
                  <Link href="#">
                    <img src="/assets/images/resource/news1.jpg" alt="" />
                  </Link>
                </div>
                <div className="category">Business Plans</div>
                <h4>
                  <Link href="#">
                    How to Manage Business <br />
                    Online Reputation
                  </Link>
                </h4>
              </div>
              <div className="post-wrapper">
                <div className="image">
                  <Link href="#">
                    <img src="/assets/images/resource/news2.jpg" alt="" />
                  </Link>
                </div>
                <div className="category">Marketing Stratergy</div>
                <h4>
                  <Link href="#">
                    Inside our Daily Routines as a <br />
                    Good Consultant
                  </Link>
                </h4>
              </div>
            </div>
            {/* Newsletter Widget */}
            <div className="newsletter-widget">
              <div className="widget-title">Newsletter Subscription</div>
              <form action="#">
                <input type="email" placeholder="Enter Email Address" />
                <button className="theme-btn btn-style-one">
                  <span className="btn-title">Subscribe Us</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
