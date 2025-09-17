import std6 from '@/assets/img/studies/vl-case-studies-3.4.png'
import std1 from '@/assets/img/studies/vl-studies-2.1.png'
import std2 from '@/assets/img/studies/vl-studies-2.2.png'
import std3 from '@/assets/img/studies/vl-studies-2.3.png'
import std4 from '@/assets/img/studies/vl-studies-2.4.png'
import std5 from '@/assets/img/studies/vl-studies-2.5.png'
import std7 from '@/assets/img/studies/vl-studies-2.6.png'
import std8 from '@/assets/img/studies/vl-studies-2.7.png'
import std9 from '@/assets/img/studies/vl-studies-2.8.png'
import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import Paginations from './components/Paginations'

type std = {
  img: string
  title: string
}

const studies: std[] = [
  { img: std1, title: 'Efficiency Managed IT Services' },
  { img: std2, title: 'Building Resilient Networks' },
  { img: std3, title: 'Seamless Cloud Migration' },
  { img: std4, title: 'Custom Software Development' },
  { img: std5, title: 'IoT Integration Solutions' },
  { img: std6, title: 'Process Automation Project' },
  { img: std7, title: 'Digital Transformation Strategy' },
  { img: std8, title: 'Managed IT Service Solutions' },
  { img: std9, title: 'Sustainable IT Infrastructure' },
]

const Page = () => {
  return (
    <MainLayout>
      <main>
        <PageTitle
          title="Case Studies"
          items={[
            { label: 'Home', link: '/' },
            { label: 'Case Studies', link: '/case-studies' },
          ]}
        />
        <section className="vl-gallery p-relative z-index-1 pt-100 pb-70">
          <Container>
            <Row>
              {studies.map((item, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <div className="vl-gallery-testimonial-2 br-4 fix p-relative z-index-1">
                    <div className="vl-gallery-testimonial-2-image">
                      <img className="w-100" src={item.img} alt={item.title} />
                    </div>
                    <div className="vl-gallery-testimonial-2-con">
                      <h3 className="vl-gallery-testimonial-2-title">
                        <Link to="/case-studies-single">{item.title}</Link>
                      </h3>
                    </div>
                    <div className="vl-gallery-poligon d-flex align-items-center justify-content-between">
                      <h3>
                        <Link to="/case-studies-single">Read More</Link>
                      </h3>
                      <span className="blu-bg">
                        <FaArrowRight className="fs-2" />
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Paginations />
          </Container>
        </section>
      </main>
    </MainLayout>
  )
}

export default Page
export { Head } from '@/components/PageMeta'
