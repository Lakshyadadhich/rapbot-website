import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'




const serviceBenefits = [
  'End-to-end monitoring & management',
  'Proactive patching, updates, and backups',
  'High availability and failover strategies',
  'Streamlined integrations and workflow automation',
  'Enhanced performance, scalability, continuity',
]

const advancedChecklist = [
  'AWS Cloud – monitoring EC2, EKS, ECS, Lambda with backups, scaling & disaster recovery',
  'Salesforce – CRM management, data security, workflows & performance optimization',
  'MuleSoft – seamless API integration, secure data flow & optimized connectivity',
  'Mobile Apps – performance monitoring, version updates & secure API connections',
]

const ITTopicDetails = () => {
  return (
    <>
      {/* Section 1 - Intro */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Managed services</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Empower your business with a robust and future-ready infrastructure that integrates the power of AWS, Salesforce, MuleSoft, and mobile
          development. Our end-to-end infrastructure management services ensure seamless operations across cloud environments, CRM platforms,
          integration systems, and mobile solutions. From monitoring and optimization to security, patching, and disaster recovery, we deliver
          reliability, scalability, and performance for every layer of your digital ecosystem.
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
          Our unified approach enables organizations to manage complex multi-platform environments effortlessly while improving performance, reducing
          downtime, and ensuring data protection.
        </p>
      </div>

      {/* Section 3 - Comprehensive IT Solutions */}
      <div className="vl-service-details-content">
        <div className="vl-block-content mb-30">
          <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive IT solutions for every need</h3>
          <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
            Our infrastructure management services are designed to support businesses across diverse technology environments:
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
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative solutions for a competitive edge</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          In today’s digital-first economy, businesses need more than just reliable infrastructure—they need systems that are connected, scalable, and
          resilient. Our integrated infrastructure management services combine the strengths of AWS, Salesforce, MuleSoft, and mobile development to
          deliver a holistic ecosystem where applications, data, and processes work seamlessly together.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          By leveraging automation, proactive monitoring, disaster recovery strategies, and scalable architectures, we help you reduce risks, optimize
          operations, and gain a lasting competitive advantage. With us as your trusted partner, your business stays secure, agile, and ready for
          future innovation.
        </p>
      </div>
    </>
  )
}

export default ITTopicDetails
