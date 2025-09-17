import demo1 from '@/assets/img/demo/vl-demo-1.1.png'
import demo2 from '@/assets/img/demo/vl-demo-1.2.png'
import demo3 from '@/assets/img/demo/vl-demo-1.3.png'
import demo4 from '@/assets/img/demo/vl-demo-1.4.png'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Col, Collapse, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight, FaArrowRight } from 'react-icons/fa6'

const MobilMenuItems = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menuName: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setOpenDropdown((prev) => (prev === menuName ? null : menuName))
  }

  return (
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
                <Link to="/pages/faq">Faq</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
          {/* <div className="d-flex justify-content-between align-items-center" onClick={(e) => toggleDropdown('blog', e)}>
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
          */}
        </li>
      </ul>
    </nav>
  )
}

export default MobilMenuItems
