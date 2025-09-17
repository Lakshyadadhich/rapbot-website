import logo from '@/assets/img/logo/white logo without.png'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa6'

type LinkType = {
  name: string
  url: string
}

const quickLinks: LinkType[] = [
  { name: 'About Us', url: '/about' },
  { name: 'Our Service', url: '/services' },
  { name: 'Case Study', url: '/case-studies' },
  { name: 'Testimonial', url: '/pages/testimonial' },
]

const services = [
  'Salesforce services',
  'Cloud computing solutions',
  'Digital transformation',
  'Software development',
  'Mobile app development',
  'Managed services',
]

const Footer = () => {
  return (
    <footer>
      <section className="vl-footer vl-gray-bg-4 pt-240">
        <Container>
          <Row>
            {/* Left Logo */}
            <Col lg={4} md={6} className="mb-15">
              <div className="vl-footer-widget-1">
                <div className="vl-footer-logo">
                  <Link to="/">
                    <img src={logo} alt="Footer Logo" height="90" width="150" />
                  </Link>
                </div>
                <div className="vl-footer-content vl-footer-content-4">
                  <p className="pt-16 pb-32">
                    We foster a culture of teamwork & <br />
                    creative problem-solving to deliver <br />
                    exceptional results for our clients.
                  </p>
                </div>
                <div className="vl-footer-social vl-footer-social-4">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/raptbot_technologies?igsh=dWNxM2Q2cW9vanUz">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/raptbot-technologies-private-limited/posts/?feedView=all">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-contact">
                  <p>
                    <FaEnvelope className="footer-icon" /> <a href="mailto:info@otech.com">consulting@raptbot.com</a>
                  </p>
                  <p>
                    <FaPhone className="footer-icon" /> <a href="tel:+911234567890">+919001378790</a>
                  </p>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6} className="mb-15">
              <div className="vl-footer-widget-2">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-15">Quick Links</h3>
                <div className="vl-footer-menu vl-footer-menu-4">
                  <ul>
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            {/* Our Services */}
            <Col lg={2} md={6} className="mb-15">
              <div className="vl-footer-widget-3 ml-40">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-15">Our Service</h3>
                <div className="vl-footer-menu vl-footer-menu-4">
                  <ul>
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <a href="#">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            {/* Location + Contact */}
            <Col lg={4} md={6} className="mb-15">
              <div className="vl-footer-widget-4">
                <h3 className="vl-footer-widget-title vl-fs-20 mb-15">Location</h3>

                {/* Map */}
                <div className="footer-map mb-15">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.816031030118!2d75.805886!3d26.8513626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db511d8271aaf%3A0x1b630be8a9eb8e67!2sC22%2C%20Mahalaxmi%20Nagar%20Rd%2C%20D-Block%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1726316400000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Contact Info */}
                
              </div>
            </Col>
          </Row>
        </Container>

        {/* Copyright */}
        <Container>
          <div className="vl-footer-border-top">
            <Row className="align-items-center">
              <Col md={6}>
                <div className="vl-footer-copyright-text vl-footer-copyright-text-4">
                  <p>Copyright &copy;2025 Raptbot. All Rights Reserved</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="vl-footer-copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
