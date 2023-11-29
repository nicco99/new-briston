"use client";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";
export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const [jwt, setJwt] = useState("");
  const router = useRouter();

  useEffect(() => {
    setJwt((jwt) => localStorage.getItem("token"));
  }, []);

  const logOut = () => {
    localStorage.clear("token");
    router.push("/login");
  };
  return (
    <>
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        }`}>
        <div className="header-top">
          <div className="auto-container">
            <div className="inner">
              <div className="top-right">
                <ul className="contact-info">
                  <li>
                    <i className="flaticon-clock" />
                    Office Hrs: Today 8.00am to 5.00pm
                  </li>
                  <li>
                    <Link href="tel:(251)2353256">
                      <i className="flaticon-phone" />
                      +254 738 382 516
                    </Link>
                  </li>
                </ul>
              </div>
              {jwt && (
                <button
                  onClick={logOut}
                  className="bg-green-500 px-3 py-1 rounded-sm text-[#ffffff] flex justify-center items-center gap-1">
                  <span className="text-sm font-[500]">logout</span>{" "}
                  <BiLogOut />
                </button>
              )}
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
                <div
                  className="rounded-full lg:hidden  bg-green-500 flex justify-center items-center h-10 w-10"
                  onClick={handleMobileMenu}>
                  {/* <BiMenu
                    className="mx-auto text-[#ffffff]"
                    onClick={handleMobileMenu}
                  /> */}
                  <svg
                    className="mx-auto text-[#ffffff]"
                    onClick={handleMobileMenu}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <Menu />
                  {/* <div
                    className="collapse navbar-collapse  clearfix"
                    id="navbarSupportedContent">
                  </div> */}
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
