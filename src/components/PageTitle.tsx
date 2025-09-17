import breadcrumb from '@/assets/img/banner/vl-breadcrumb-1.png'
import breadcrumbBg from '@/assets/img/banner/vl-breadcrumb-bg.png'
import emoji from '@/assets/img/icons/vl-emoji-4.2.svg'
import emoji1 from '@/assets/img/icons/vl-emoji-4.3.svg'
import fan from '@/assets/img/icons/vl-fan-sm.svg'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

interface BreadcrumbItem {
  label: string
  link: string
}

interface BreadcrumbSectionProps {
  title: string
  items: BreadcrumbItem[]
}

const PageTitle = ({ title, items }: BreadcrumbSectionProps) => {
  return (
    <section
      className="vl-breadcrumb-bg p-relative z-index-1 fix pt-200 pb--70"
      style={{
        backgroundImage: `url(${breadcrumbBg})`,
      }}>
      <Container>
        <Row>
          <Col xl={6} md={6} className="mb-30">
            <div className="vl-breadcrumb">
              <h1 className="vl-fs-60 vl-white ">{title}</h1>
              <div className="vl-breadcrumb-list">
                {items.map((item, index) => (
                  <>
                    <span key={index}>
                      <Link to={item.link}> {item.label}</Link>
                    </span>
                    {index < items.length - 1 && (
                      <span className="dvir">
                        <FaAngleRight />
                      </span>
                    )}
                  </>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={6} md={6} className="mb-30">
            <div className="vl-hero-img p-relative">
              <div className="vl-hero-shape-4">
                <div className="vl-shape-2">
                  <img src={emoji} alt="emoji" />
                </div>
                <div className="vl-shape-3">
                  <img src={emoji1} alt="emoji" />
                </div>
              </div>
              <div className="vl-breadcrumb-fan">
                <img className="w-100" src={fan} alt="fan" />
              </div>
              <div className="vl-breadcrumb-img">
                <img src={breadcrumb} alt="breadcrumb" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PageTitle
