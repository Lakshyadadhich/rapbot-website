import demo1 from '@/assets/img/demo/vl-demo-1.1.png'
import demo2 from '@/assets/img/demo/vl-demo-1.2.png'
import demo3 from '@/assets/img/demo/vl-demo-1.3.png'
import demo4 from '@/assets/img/demo/vl-demo-1.4.png'
import location from '@/assets/img/icons/vl-contact-iner-location.svg'
import contact from '@/assets/img/icons/vl-contact-iner-mail.svg'
import phone from '@/assets/img/icons/vl-contact-iner-phone.svg'
import logo from '@/assets/img/logo/vl-footer-logo-4.2.png'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Col, Collapse, Offcanvas, Row } from 'react-bootstrap'
import {} from 'react-icons/bi'
import { FaAngleDown, FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

interface MobileMenuProps {
  show: boolean
  handleClose: () => void
}

const MobileMenu = ({ show, handleClose }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menuName: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setOpenDropdown((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="vl-offcanvas vl-offcanvas-4">
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-50">
            <div className="vl-offcanvas-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>
          </div>

          <div className="vl-offcanvas-menu mb-40">
            <nav>
              <ul>
                <li>
                  <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('home', e)}>
                    <a href="#">Home</a>
                    <button className="vl-menu-close" onClick={(e) => toggleDropdown('home', e)}>
                      {openDropdown === 'home' ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                  </div>
                  <Collapse in={openDropdown === 'home'}>
                    <div>
                      <div className="vl-home-menu">
                        <Row className="gx-4 row-cols-1 row-cols-lg-4">
                          <Col className="mb-25">
                            <div className="vl-home-thumb fix p-relative z-index-1">
                              <img className="w-100" src={demo1} alt="" />
                              <div className="vl-home-btn">
                                <div className="vl-herobtn vl-aboutbtn vl-upper">
                                  <Link to="/" className="theme-btn theme-btn2">
                                    Multi Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                                <div className="vl-herobtn vl-aboutbtn vl-upper mt-20">
                                  <Link to="/single/index-1" className="theme-btn theme-btn2">
                                    Single Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-25">
                            <div className="vl-home-thumb fix p-relative z-index-1">
                              <img className="w-100" src={demo2} alt="" />
                              <div className="vl-home-btn">
                                <div className="vl-herobtn vl-aboutbtn vl-upper">
                                  <Link to="/multi/index2" className="theme-btn theme-btn2">
                                    Multi Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                                <div className="vl-herobtn vl-aboutbtn vl-upper mt-20">
                                  <Link to="/single/index-2" className="theme-btn theme-btn2">
                                    Single Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-25">
                            <div className="vl-home-thumb fix p-relative z-index-1">
                              <img className="w-100" src={demo3} alt="" />
                              <div className="vl-home-btn">
                                <div className="vl-herobtn vl-aboutbtn vl-upper">
                                  <Link to="/multi/index3" className="theme-btn theme-btn2">
                                    Multi Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                                <div className="vl-herobtn vl-aboutbtn vl-upper mt-20">
                                  <Link to="/single/index-3" className="theme-btn theme-btn2">
                                    Single Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-25">
                            <div className="vl-home-thumb fix p-relative z-index-1">
                              <img className="w-100" src={demo4} alt="" />
                              <div className="vl-home-btn">
                                <div className="vl-herobtn vl-aboutbtn vl-upper">
                                  <Link to="/multi/index-4" className="theme-btn theme-btn2">
                                    Multi Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                                <div className="vl-herobtn vl-aboutbtn vl-upper mt-20">
                                  <Link to="/single/index-4" className="theme-btn theme-btn2">
                                    Single Page
                                    <span>
                                      <FaArrowRight />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Collapse>
                </li>

                <li>
                  <Link to="/about">About us</Link>
                </li>

                <li>
                  <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('service', e)}>
                    <a href="#" onClick={(e) => toggleDropdown('service', e)}>
                      Services
                    </a>
                    <button className="vl-menu-close" onClick={(e) => toggleDropdown('service', e)}>
                      {openDropdown === 'service' ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                  </div>
                  <Collapse in={openDropdown === 'service'}>
                    <ul style={{ paddingLeft: '10px' }}>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      
                    </ul>
                  </Collapse>
                </li>

                <li>
                  <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('pages', e)}>
                    <a href="#" onClick={(e) => toggleDropdown('pages', e)}>
                      Pages
                    </a>
                    <button className="vl-menu-close" onClick={(e) => toggleDropdown('pages', e)}>
                      {openDropdown === 'pages' ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                  </div>
                  <Collapse in={openDropdown === 'pages'}>
                    <ul style={{ paddingLeft: '10px' }}>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      
                      <li>
                        <Link to="/faq">Faq</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/error">404</Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                <li>
                  <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('case', e)}>
                    <Link to="#" onClick={(e) => toggleDropdown('case', e)}>
                      Case Studies
                    </Link>
                    <button className="vl-menu-close" onClick={(e) => toggleDropdown('case', e)}>
                      {openDropdown === 'case' ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                  </div>
                  <Collapse in={openDropdown === 'case'}>
                    <ul style={{ paddingLeft: '10px' }}>
                      <li>
                        <Link to="/case-studies">Case Studies</Link>
                      </li>
          
                    </ul>
                  </Collapse>
                </li>

                <li>
                   <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('blog', e)}>
                    <Link to="#" onClick={(e) => toggleDropdown('blog', e)}>
                      Blog
                    </Link>
                    <button className="vl-menu-close" onClick={(e) => toggleDropdown('blog', e)}>
                      {openDropdown === 'blog' ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                  </div>
                  <Collapse in={openDropdown === 'blog'}>
                    <ul style={{ paddingLeft: '10px' }}>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>

                    </ul>
                  </Collapse> 
                </li>
              </ul>
            </nav>
          </div>

          <div className="vl-offcanvas-btnm text-center mb-30">
            <div className="vl-herobtn vl-aboutbtn w-100 vl-upper">
              <Link to="/contact" className="theme-btn theme-btn2">
                get started
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="vl-offcanvas-info mb-30">
            <h3 className="vl-offcanvas-sm-title pb-15">Contact Us</h3>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={phone} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="tel:5799546476">+57 9954 6476</a>
                </span>
              </div>
            </div>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={contact} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">OTech It Service.com</a>
                </span>
              </div>
            </div>

            <div className="vl-offcanvas-info-box mb-15">
              <div className="vl-offcanvas-info-box-icon">
                <span>
                  <img src={location} alt="" />
                </span>
              </div>
              <div className="vl-offcanvas-info-box-text">
                <span>
                  <a href="mailto:OTechItService.com">8708 Technology, USA </a>
                </span>
              </div>
            </div>
          </div>

          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title mb-15">Follow Us</h3>
            <a href="#">
              <FaFacebookF />
            </a>
            &nbsp;
            <a href="#">
              <FaXTwitter />
            </a>
            &nbsp;
            <a href="#">
              <FaLinkedinIn />
            </a>
            &nbsp;
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </Offcanvas>
    </>
  )
}

export default MobileMenu
