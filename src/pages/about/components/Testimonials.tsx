import brand1 from '@/assets/img/brand/vl-testimonial-brand-2.1.png'
import avatar1 from '@/assets/img/testimonial/vl-testimonial-2.1.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

interface Testimonial {
  name: string
  role: string
  message: string
  avatar: string
  brandLogo: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Donna Kiehn',
    role: 'Businessman',
    message:
      '“Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.”',
    avatar: avatar1,
    brandLogo: brand1,
  },
  {
    name: 'Michael Foster',
    role: 'Startup Founder',
    message:
      '“Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.”',
    avatar: avatar1,
    brandLogo: brand1,
  },
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    message:
      '“Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.”',
    avatar: avatar1,
    brandLogo: brand1,
  },
  {
    name: 'Kevin Smith',
    role: 'CTO, FinTech Co.',
    message:
      '“Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.”',
    avatar: avatar1,
    brandLogo: brand1,
  },
  {
    name: 'Emily Zhang',
    role: 'Marketing Head',
    message:
      '“Our clients words speak volumes about impact of our services. We take pride in building strong best partnerships and delivering solutions that exceed expectations from seamless cloud migrations.”',
    avatar: avatar1,
    brandLogo: brand1,
  },
]

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <div className="vl-testimonial-section2 pt-100 pb-100">
      <Container>
        <div className="vl-section-title-wrapper text-center mb-60">
          <h4 className="vl-section-subtitle-8 subtitle-9 vl-upper">Testimonial</h4>
          <h2 className="vl-section-title vl-section-title-2 pt-16">What our clients say?</h2>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <Slider {...settings} className="vl-test-2-act vl-testinner">
              {testimonials.map((item, index) => (
                <div key={index}>
                  <div className="vl-test-flex testimonial-inner" key={index}>
                    <div className="vl-test-thumb">
                      <img src={item.avatar} alt={item.name} />
                    </div>
                    <div className="vl-test-content">
                      <div className="vl-test-icons">
                        <ul>
                          {Array.from({ length: 5 }, (_, i) => (
                            <li key={i}>
                              <a href="#">
                                <FaStar />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>{item.message}</p>
                      <div className="vl-test-aut">
                        <div className="vl-test-aut-content">
                          <h3>{item.name}</h3>
                          <span>{item.role}</span>
                        </div>
                        <div className="vl-test-aut-logo">
                          <img src={item.brandLogo} alt="Brand Logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonials
