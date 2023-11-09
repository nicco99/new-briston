import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        }`}>
        <div className="header-top">
          <div className="auto-container">
            <div className="inner">
              <div className="top-left">
                <div className="text">
                  <span>Too Little!</span> Receiving $100 / Hr Consulting.{" "}
                  <Link href="#">Start Today</Link>{" "}
                </div>
              </div>
              <div className="top-right">
                <ul className="contact-info">
                  <li>
                    <i className="flaticon-clock" />
                    Office Hrs: Today 9.00am to 6.00pm
                  </li>
                  <li>
                    <Link href="tel:(251)2353256">
                      <i className="flaticon-phone" />
                      +254 21 204 120
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container clearfix">
              {/*Logo*/}
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo-1.jpg" alt="" />
                  </Link>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <BiMenu onClick={handleMobileMenu}/>
                  {/* <Image width={50} height={50} src="/assets/images/icons/icon-bar.png" alt="image" /> */}
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
                {/* Main Menu End*/}
                <div className="navbar-right-info">
                  <button
                    type="button"
                    className="theme-btn search-toggler"
                    onClick={handlePopup}>
                    <span className="flaticon-search" />
                  </button>
                  {/*Sidemenu Navigation Toggler*/}
                  <div className="sidemenu-nav-toggler" onClick={handleSidebar}>
                    <img src="/assets/images/icons/icon-bar.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container clearfix">
                {/*Logo*/}
                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo-1.jpg" alt="" />
                    </Link>
                  </div>
                </div>
                {/*Nav Box*/}
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}>
                    <img src="/assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <Menu />
                  </nav>
                  {/* Main Menu End*/}
                  <div className="navbar-right-info">
                    <button
                      type="button"
                      className="theme-btn search-toggler"
                      onClick={handlePopup}>
                      <span className="flaticon-search" />
                    </button>
                    {/*Sidemenu Navigation Toggler*/}
                    <div
                      className="sidemenu-nav-toggler"
                      onClick={handleSidebar}>
                      <img src="/assets/images/icons/icon-bar.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}

        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
          isSidebar={isSidebar}
        />
      </header>
    </>
  );
}
