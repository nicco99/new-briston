"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="FAQ’S"
        wrapperCls="home_1"
      >
        <div>
          <section className="faq-section-two">
            <div className="auto-container">
              <div className="top-content text-center">
                <div className="icon">
                  <img src="/assets/images/icons/icon-40.png" alt="" />
                </div>
                <h2>How can we help you</h2>
                <form action="#">
                  <input type="email" placeholder="Enter Your Keyword" />
                  <button className="fa fa-search" />
                </form>
                <div className="text">
                  Have your own questions?{" "}
                  <Link href="mailto:consult@bristonhr.com" /> (or){" "}
                  <Link href="Tel: 254738382516">254738 382 516</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="accordion-box style-two mb-30">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 1 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        01. What does you do?
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Briston HR is an organization that is dedicated to
                            providing end-to-end management consulting services
                            that form the foundation required for implementing
                            the Human Resources Management.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        02. What industries covered?
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            We cover all industries including Banking and
                            capital market, Health, Logistics and Energy.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        03. How do you price?
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Flexible Plans For Small To Fast-Growing Company
                            starting from $24 monthly.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End Block */}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="accordion-box style-two mb-30">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        04. What does you do?
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Briston HR is an organization that is dedicated to
                            providing end-to-end management consulting services
                            that form the foundation required for implementing
                            the Human Resources Management.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 5 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(5)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        05. What industries covered?
                      </div>
                      <div
                        className={
                          isActive.key == 5
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            We cover all industries including Banking and
                            capital market, Health, Logistics and Energy.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 6 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(6)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        06. How do you price?
                      </div>
                      <div
                        className={
                          isActive.key == 6
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Flexible Plans For Small To Fast-Growing Company
                            starting from $24 monthly.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End Block */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-section style-two pt-0">
            <div className="auto-container">
              {/* Subscribe Newsletter */}
              <div className="subscribe-newsletter">
                <div className="sec-title light text-center">
                  <h2>Newsletter Subscription</h2>
                  <div className="text">
                    Subscribe us and get news, offers and all updates in Envolve
                    to your inbox directly
                  </div>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <form action="#">
                  <div className="form-group">
                    <i className="flaticon-mail" />
                    <input
                      type="text"
                      placeholder="Enter your email address..."
                    />
                    <button type="submit" className="btn-style-four">
                      <span className="btn-title">Subscribe Us</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
