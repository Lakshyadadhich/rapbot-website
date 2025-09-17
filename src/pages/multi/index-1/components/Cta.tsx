import cta1 from '@/assets/img/cta/vl-cta-main-4.1.png'
import shape1 from '@/assets/img/icons/vl-cta-shape-4.1.svg'
import cta2 from '@/assets/img/shape/vl-cta-iner-shape.png'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import emailjs from 'emailjs-com'

const Cta = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // send email via EmailJS
    emailjs
      .send(
        'service_zpi2kt6',       // 🔹 your service ID
        'template_652ced4',      // 🔹 your template ID
        { email },               // 🔹 template params (must match your EmailJS template variables)
        'TRDY5Ge6ioqJsCRfq'      // 🔹 your public key
      )
      .then(
        () => {
          alert('✅ Subscription successful!')
          setEmail('') // clear the input
        },
        (error) => {
          console.error(error)
          alert('❌ Subscription failed, please try again.')
        }
      )
  }

  return (
    <section className="vl-cta">
      <Container>
        <div className="vl-cta-bg-1 vl-cta-bg-4 p-relative fix br-8 pt-80 pb-50">
          <div className="vl-cta-shape">
            <img src={shape1} alt="" />
          </div>
          <Row>
            <Col lg={6}>
              <div className="vl-cta-wrapper mb-30">
                <h2 className="vl-cta-wrapper-title vl-white pb-32">
                  Transform your business contact us today
                </h2>

                <div className="vl-cta-mailform">
                  <form onSubmit={handleSubmit}>
                    <div className="vl-cta-mail">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="vl-cta-mail-btn">
                        <div className="vl-herobtn vl-aboutbtn vl-upper mt-2">
                          <button type="submit" className="theme-btn theme-btn2 vl-lower">
                            subscribe now{' '}
                            <span>
                              <FaArrowRight />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vl-cta-img p-relative z-index-1">
                <img src={cta1} alt="" />
                <div className="vl-cta-half-circle">
                  <img src={cta2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta
