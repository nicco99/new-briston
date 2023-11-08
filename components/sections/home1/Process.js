export default function Process() {
  return (
    <>
      <section className="process-section">
        <div
          className="pattern"
          style={{ backgroundImage: "url(assets/images/shape/pattern-5.png)" }}
        />
        <div className="auto-container">
          <div className="sec-top row m-0 justify-content-md-between">
            <div className="sec-title">
              <h2>Our Basic Work Process</h2>
              <div className="text-decoration">
                <span className="left" />
                <span className="right" />
              </div>
            </div>
            <div className="text">
              Which is the same as saying through shrinking from toil and pain{" "}
              <br />
              these perfectly simple and easy to distinguish.
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 process-block-one">
              <div className="inner-box">
                <h5>
                  <span className="count">01.</span> Plan for work
                </h5>
                <div className="icon">
                  <img src="/assets/images/icons/icon-4.png" alt="" />
                </div>
                <h4>Document Workflows</h4>
                <div className="text">
                  {" "}
                  It provides clarity, alignment, and a structured &amp;
                  approach to achieving <br /> the desired goals when nothing{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 process-block-one">
              <div className="inner-box">
                <h5>
                  <span className="count">02.</span>Implementation
                </h5>
                <div className="icon">
                  <img src="/assets/images/icons/icon-5.png" alt="" />
                </div>
                <h4>Document Workflows</h4>
                <div className="text">
                  It involves taking the ideas and concepts &amp; outlined in a
                  plan and turning <br /> them into tangible results.
                </div>
              </div>
            </div>
            <div className="col-lg-4 process-block-one">
              <div className="inner-box">
                <h5>
                  <span className="count">03.</span> Project Closure
                </h5>
                <div className="icon">
                  <img src="/assets/images/icons/icon-6.png" alt="" />
                </div>
                <h4>Document Workflows</h4>
                <div className="text">
                  Ensuring that the project is formally &amp; wrapped up and its
                  results <br /> are effectively utilized.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
