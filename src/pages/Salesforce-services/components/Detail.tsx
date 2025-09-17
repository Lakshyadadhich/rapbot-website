import stud1 from '@/assets/img/studies/vl-case-larg-1.1.png'
import stud2 from '@/assets/img/studies/vl-case-studies-sm-1.2.png'
import salesIcon1 from '@/assets/img/icons/technical excellence.svg'
import salesIcon2 from '@/assets/img/icons/technical excellence.svg'
import salesIcon3 from '@/assets/img/icons/technical excellence.svg'
import salesIcon4 from '@/assets/img/icons/technical excellence.svg'
import salesIcon5 from '@/assets/img/icons/technical excellence.svg'
import salesIcon6 from '@/assets/img/icons/technical excellence.svg'
import salesIcon7 from '@/assets/img/icons/technical excellence.svg'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const serviceBenefits = [
  'Strengthen customer relationships with a 360° view',
  'Boost sales productivity and accelerate deal cycles',
  'Deliver personalized, impactful marketing campaigns',
  'Create seamless and scalable digital commerce experiences',
  'Gain real-time insights with unified customer data',
  'Optimize revenue processes with automation and accuracy',
]

const solutions = [
  {
    icon: salesIcon1,
    title: 'Sales cloud',
    desc: 'Empower sales teams with smarter lead management, AI-driven insights, and streamlined processes for faster conversions and stronger pipelines.',
  },
  {
    icon: salesIcon2,
    title: 'Service cloud',
    desc: 'Deliver exceptional support with omnichannel service, intelligent case management, and personalized experiences that build loyalty and trust.',
  },
  {
    icon: salesIcon3,
    title: 'Commerce cloud',
    desc: 'Build powerful, scalable, and connected ecommerce solutions that engage customers, simplify purchasing, and maximize revenue across B2B and B2C.',
  },
  {
    icon: salesIcon4,
    title: 'Marketing cloud',
    desc: 'Drive engagement with personalized, data-driven campaigns across email, mobile, social, and web—ensuring measurable ROI on every initiative.',
  },
  {
    icon: salesIcon5,
    title: 'Data cloud',
    desc: 'Break silos and unify data into a single customer view, providing real-time insights that power personalization and smarter decision-making.',
  },
  {
    icon: salesIcon6,
    title: 'Revenue cloud',
    desc: 'Streamline complex revenue processes with automation across billing, subscriptions, and revenue recognition, ensuring compliance and efficiency.',
  },
  {
    icon: salesIcon7,
    title: 'CPQ (Configure, Price, Quote)',
    desc: 'Simplify complex quoting with automated pricing, discounting, and proposal generation, reducing errors and enabling faster deal closures.',
  },
]

const SalesforceServicesDetails = () => {
  return (
    <>
      {/* Section 1 - Intro */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Salesforce services</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          Reimagine the way you connect with customers, streamline operations, and accelerate growth with our Salesforce services.
          As a trusted partner, we harness the power of Salesforce’s industry-leading cloud solutions to deliver personalized customer
          journeys, intelligent automation, and data-driven decision-making. From sales and service to marketing, commerce, and revenue
          management, we help businesses unlock the full potential of Salesforce to drive lasting success.
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
          We create a connected, intelligent Salesforce ecosystem that enhances customer engagement, drives operational efficiency, and fuels business growth.
        </p>
      </div>

      {/* Section 3 - Comprehensive Salesforce Solutions */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Comprehensive solutions for every need</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          Our Salesforce expertise covers the complete ecosystem, ensuring your business has the right tools to thrive.
          From Sales Cloud and Service Cloud to Marketing, Commerce, and Revenue Cloud, we deliver tailored solutions that
          drive customer satisfaction, streamline operations, and maximize ROI.
        </p>
      </div>

      {/* Grid of Solutions */}
      <Row>
        {solutions.map((sol, index) => (
          <Col lg={6} md={6} key={index}>
            <div className="vl-service-details-sm fix br-8 mb-30 d-flex align-items-start p-3 shadow-sm">
              <img src={sol.icon} alt={sol.title} className="me-3" style={{ width: '50px', height: '50px' }} />
              <div>
                <h4 className="vl-fs-20 vl-text-cmn-blck mb-10">{sol.title}</h4>
                <p className="vl-text-para vl-fs-16 vl-lineheight-24 m-0">{sol.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Section 4 - Innovative Solutions */}
      <div className="vl-block-content mb-30">
        <h3 className="vl-fs-32 vl-lineheight-32 vl-text-cmn-blck pb-16 m-0">Innovative solutions for a competitive edge</h3>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 pb-16 m-0">
          Salesforce is more than a CRM—it’s a digital transformation platform. Our tailored Salesforce solutions enable businesses to
          innovate faster, respond to changing market demands, and deliver extraordinary customer experiences.
        </p>
        <p className="vl-text-para vl-fs-18 vl-lineheight-26 m-0">
          With a focus on scalability, automation, and measurable outcomes, we ensure your Salesforce investment becomes a true driver of growth.
          By partnering with us, you gain more than implementation—you gain a strategic ally who helps you maximize Salesforce’s potential,
          ensuring your business is ready for today and future-proofed for tomorrow.
        </p>
      </div>
    </>
  )
}

export default SalesforceServicesDetails
