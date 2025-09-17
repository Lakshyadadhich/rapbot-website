import about41 from '@/assets/img/about/vl-about-4.1.png'
import aboutTop from '@/assets/img/about/vl-about-top-sm-4.2.png'
import poligon from '@/assets/img/icons/vl-about-poliogon.svg'
import ser1 from '@/assets/img/icons/technical excellence.svg'
import ser2 from '@/assets/img/icons/strategic parternship.svg'
import ser3 from '@/assets/img/icons/deliver approach.svg'
import ser4 from '@/assets/img/icons/global delivery.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const ChooseUs = () => {
  return (
    <>
      <section className="vl-about-area pt-50 pb-50 h-75">
        <Container>
          <Row className="flex-lg-row flex-column-reverse align-items-start">
            {/* Left Image */}
            <Col lg={4} className="mb-30">
              <div
                suppressHydrationWarning
                className="vl-about-imgs vl-about-imgs-3 p-relative z-index-1 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800">
                <div className="vl-about-large4 shrink-img">
                  <img className="w-70" src={about41} alt="" />
                </div>
                <div className="vl-about-sm-2 d-none d-md-block">
                  <img src={aboutTop} alt="" />
                </div>

                <div className="vl-about-poligon-shap p-relative z-index-1 fl-right">
                  <img src={poligon} alt="" />
                  <div className="vl-about-poligon-title">
                    <span className="counter vl-semi vl-whit ">8+</span>
                    <p className="vl-fs-20 vl-lineheight-20 pt-10">Year experience</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Content */}
            <Col lg={8} className="mb-30">
              <div suppressHydrationWarning className="vl-about-content-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
                <div className="vl-section-title-wrapper">
                  <div className="vl-section-subheading">
                    <h4 className="vl-section-subtitle-6 vl-upper">why Raptbot?</h4>
                  </div>
                  <h2 className="vl-section-title vl-section-title-2 pt-16 pb-20">Beyond solutions building trust growth.</h2>
                  <p className="vl-section-description-2 pb-32">
                    We go beyond consulting—delivering measurable outcomes through Salesforce, AWS expertise, and cloud innovation, empowering your
                    business with growth, agility, and trusted excellence.
                  </p>

                  {/* 🔹 4 Cards in a Row */}
                  <div className="chooseus-grid">
                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle">
                          <img src={ser1} alt="" />
                        </span>
                        <h3 className="vl-about-icon-title">
                          <Link to="/service-single">Technical excellence</Link>
                        </h3>
                      </div>
                      <p>Driving innovation with scalable, reliable, certified Salesforce, AWS, AI, and cloud expertise.</p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle">
                          <img src={ser2} alt="" />
                        </span>
                        <h3 className="vl-about-icon-title">
                          <Link to="/service-single">Strategic partnership</Link>
                        </h3>
                      </div>
                      <p>Long-term strategic partner delivering innovation, tailored solutions and sustained growth.</p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle">
                          <img src={ser3} alt="" />
                        </span>
                        <h3 className="vl-about-icon-title">
                          <Link to="/service-single">Delivery approach</Link>
                        </h3>
                      </div>
                      <p>Agile frameworks with governance and collaboration for precise outcomes.</p>
                    </div>

                    <div className="vl-about-icon-box-4 br-8 mb-30 whyBox">
                      <div className="vl-about-icon-inline">
                        <span className="vl-about-icon-circle">
                          <img src={ser4} alt="" />
                        </span>
                        <h3 className="vl-about-icon-title">
                          <Link to="/service-single">Global delivery</Link>
                        </h3>
                      </div>
                      <p>Seamless offshore delivery enabling global collaboration with secure, high-performance solutions.</p>
                    </div>
                  </div>
                </div>

                {/* About Us Button */}
                <div className="vl-aboutbtn">
                  <div className="vl-herobtn vl-aboutbtn vl-lower">
                    <Link to="/about" className="theme-btn theme-btn2">
                      explore...
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <style jsx>
        {`
      .vl-about-area .container {
        max-width: 90vw !important;
        width: 90% !important;
        }
        
    `}
      </style>
    </>
  )
}

export default ChooseUs
