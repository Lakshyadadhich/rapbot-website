import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const serviceBenefits = [
  'Streamlined processes & improved efficiency',
  'Enhanced customer experiences & engagement',
  'Seamless integration across systems & platforms',
  'Scalable, secure & future-ready infrastructure',
  'Increased business agility & innovation',
]

const advancedChecklist = [
  'Reimagined workflows & automation of manual tasks',
  'Integration of core business systems for seamless operations',
  'Mobile-first experiences for employees & customers',
  'Continuous monitoring, security & performance management',
]

const DigitalTransformationDetails = () => {
  return (
    <>
      {/* Section 1 - Intro */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Digital Transformation</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Unlock the full potential of your business with our digital transformation services. We help organizations embrace innovation, modernize
          their operations, and create customer experiences that stand out in today’s competitive landscape. By leveraging the combined strengths of
          cloud platforms, CRM solutions, integration tools, and mobile technologies, we enable a seamless shift towards agility, efficiency, and
          growth.
        </p>
      </div>

      {/* Image */}
      <div className="vl-service-details-larg-img fix br-8 mb-30">
        <img className="w-100" src={stud1} alt="" />
      </div>

      {/* Section 2 - Service Benefits */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Our Service Benefits</h3>
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
          Our approach to digital transformation is designed to align technology with your strategic goals while ensuring efficiency, resilience, and
          adaptability in a fast-changing digital economy.
        </p>
      </div>

      {/* Section 3 - Comprehensive IT Solutions */}
      <div className="vl-service-details-content">
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive IT Solutions for Every Need</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            Our approach to digital transformation is designed to address every stage of your modernization journey. From reimagining workflows and
            automating manual tasks to integrating core business systems and enabling mobile-first experiences, we ensure that technology is aligned
            with your strategic goals. With continuous monitoring, security, and performance management, we not only modernize your systems but also
            future-proof them for evolving business needs.
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

      {/* Section 4 - Innovative Solutions */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative Solutions for a Competitive Edge</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          Digital transformation goes beyond adopting new technologies—it’s about reshaping how businesses operate and deliver value. Our solutions
          are designed to help organizations embrace agility, foster innovation, and stay ahead of market shifts.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          By creating connected systems, empowering employees with smarter tools, and enhancing customer engagement through digital channels, we
          ensure you gain a lasting competitive edge. With us as your partner, digital transformation becomes a catalyst for growth, helping your
          business thrive today and remain prepared for tomorrow.
        </p>
      </div>
    </>
  )
}

export default DigitalTransformationDetails
