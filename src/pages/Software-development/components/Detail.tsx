import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const serviceBenefits = [
  'Custom application development',
  'Agile & scalable delivery',
  'End-to-end product engineering',
  'Seamless system integration',
  'Continuous support & maintenance',
]

const advancedChecklist = [
  'Custom-built software development solutions',
  'Engaging mobile and web applications',
  'Seamless integrations across platforms and APIs',
  'Scalable cloud-native development solutions',
  'Continuous testing, upgrades, and support',
]

const SoftwareDevDetails = () => {
  return (
    <>
      {/* Section 1 - Intro */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Software Development</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Keep your business ahead of the curve with our custom software development services tailored to meet unique operational and strategic needs.
          From enterprise-grade applications to agile solutions for startups, we deliver software that drives innovation, efficiency, and measurable
          growth. Our expert team follows agile methodologies and industry best practices to ensure every solution is scalable, secure, and
          user-friendly. From ideation and design to development and ongoing support, we create software that aligns perfectly with business objectives
          while leveraging platforms like Salesforce, MuleSoft, and AWS to maximize value.
        </p>
      </div>

      {/* Image */}
      <div className="vl-service-details-larg-img fix br-8 mb-30">
        <img className="w-100" src={stud1} alt="" />
      </div>

      {/* Section 2 - Service Benefits */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our service benefits</h3>
        <div className="vl-block-check">
          {serviceBenefits.map((service, index) => (
            <h3 key={index}>
              <span>
                <FaCheck />
              </span>{' '}
              {service}
            </h3>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="vl-block-quote vl-gray-bg-4 br-8 mb-30 p-relative z-index-1 fix">
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Our software development approach combines business insight with technical expertise to deliver innovative, scalable, and future-ready
          solutions that drive growth and efficiency.
        </p>
      </div>

      {/* Section 3 - Comprehensive Software Solutions */}
      <div className="vl-service-details-content">
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive software solutions for every need</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            We design and build solutions that cater to businesses of all sizes and industries. Whether it’s enterprise software, mobile apps, or web
            platforms, we ensure performance, usability, and long-term adaptability. With deep expertise in Salesforce, MuleSoft, AWS, and cloud-native
            technologies, we deliver modern, integrated, and future-ready architectures that maximize ROI and enable organizations to scale confidently
            in the digital era.
          </p>
        </div>

        <Row>
          <Col lg={6} md={6}>
            <div className="vl-service-details-sm fix br-8 mb-30">
              <img className="w-100" src={stud2} alt="" />
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div className="vl-service-details-content mb-30">
              <div className="vl-service-details-content-check vl-service-details-content-check-bold">
                <ul>
                  {advancedChecklist.map((item, index) => (
                    <li key={index}>
                      <span>
                        <FaCheck />
                      </span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Section 4 - Innovative Software */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative software for a competitive edge</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          We specialize in building business-driven, technology-enabled solutions that accelerate digital transformation. From enhancing customer
          experiences to streamlining operations, our expertise ensures software that delivers tangible results.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          By leveraging Salesforce CRM, MuleSoft for seamless integrations, and AWS for scalable infrastructures, along with modern frameworks and
          agile practices, we create applications that not only meet today’s needs but also prepare your business for tomorrow’s opportunities.
        </p>
      </div>
    </>
  )
}

export default SoftwareDevDetails
