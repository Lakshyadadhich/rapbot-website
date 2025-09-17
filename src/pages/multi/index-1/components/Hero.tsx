import React, { useEffect, useState } from 'react'
import hero from '@/assets/img/banner/hero3.png'
import heroGroup from '@/assets/img/banner/vl-hero-group.png'
import emoji1 from '@/assets/img/icons/vl-emoji-4.1.svg'
import emoji2 from '@/assets/img/icons/vl-emoji-4.2.svg'
import emoji3 from '@/assets/img/icons/vl-emoji-4.3.svg'
import fan from '@/assets/img/icons/vl-fan.svg'
import { Col, Container, Row } from 'react-bootstrap'
import ReactCountUp from 'react-countup'
import { FaArrowRight } from 'react-icons/fa6'
import { URL } from 'url'

const Hero = () => {
  // Words to rotate in the span
  const words = ['trust', 'innovation', 'excellence', 'growth', 'success']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // change every 2 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section
      className="vl-hero-area vl-hero-area-3 vl-hero-bg p-relative z-index-1 fix pt-190 pb-30 heroBanner">

      <Container>
        <Row>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-content p-relative z-index-1">
              <div className="vl-section-title-wrapper">
                <h4 className="vl-section-subtitle-5 vl-white vl-upper">
                  IT Solutions for a Smarter Future
                </h4>
                <h1 className="vl-section-heading-3 vl-white pt-16">
                  More than technology we build{' '}
                  <span className="vl-section-heading-3 animations-words">
                    {words[currentIndex]}
                  </span>
                </h1>
                <p className="vl-section-description pt-10 pb-20">
                  Building trust and empowering growth as your trusted partner in Salesforce and cloud services, driving innovation and lasting success for your business.
 
                </p>
              </div>

              <div className="vl-btns mb-20">
                <div className="vl-herobtn vl-lower">
                  <a href="#" className="theme-btn">
                    explore more
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>

              <div className="vl-hero-counter">
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={50} duration={2} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">
                    happy clients
                  </h4>
                </div>
                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={75} duration={2} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">
                    total projects
                  </h4>
                </div>

                <div className="vl-hero-counter-box mb-30">
                  <span className="counter vl-white">
                    <ReactCountUp end={150} duration={2} />
                  </span>
                  <span>+</span>
                  <h4 className="vl-hero-counter-box-title vl-white pt-12">
                    certifications
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="vl-hero-img p-relative">
              {/* <div className="vl-hero-shape-4">
                <div className="vl-shape-1">
                  <img src={emoji1} alt="" />
                </div>
                <div className="vl-shape-2">
                  <img src={emoji2} alt="" />
                </div>
                <div className="vl-shape-3">
                  <img src={emoji3} alt="" />
                </div>
              </div>   */}
              {/* <div className="vl-hero-fan">
                <img className="w-100" src={fan} alt="" />
              </div> */}
               {/* <div className="vl-hero-img-4 rounded-5">
                <img className="w-100" src={hero} alt=""  />
              </div>  */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero




