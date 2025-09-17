import MainLayout from '@/components/MainLayout'
import PageTitle from '@/components/PageTitle'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import emailjs from 'emailjs-com'

const CareerPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({})

  const toggleForm = () => setShowForm(!showForm)
  const closeForm = () => setShowForm(false)

  // ✅ Handle input changes (text, checkbox, file)
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setFormData({ ...formData, [e.target.name]: reader.result }) // Base64
        }
        reader.readAsDataURL(file)
      }
    } else if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked ? 'Yes' : 'No' })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  // ✅ Handle submit (send email)
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send('service_zpi2kt6', 'template_652ced4', formData, 'TRDY5Ge6ioqJsCRfq').then(
      () => {
        alert('✅ Application sent successfully!')
        setShowForm(false)
        setFormData({})
      },
      (error) => {
        console.error(error)
        alert('❌ Failed to send. Please try again.')
      },
    )
  }

  return (
    <MainLayout>
      <PageTitle
        title="Career"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Career', link: '/career' },
        ]}
      />

      {/* ---------- Job Listings ---------- */}
      <section className="career-job-list pt-100 pb-70">
        <Container>
          <h2 className="vl-section-title pb-40">Open positions</h2>
          <Row>
            {/* Job 1 */}
            <Col lg={6} className="mb-30">
              <div className="career-job-card br-8 vl-gray-bg-4 p-4">
                <h3 className="mb-3">Lead salesforce developer</h3>
                <p className="vl-text-para">
                  We are seeking a skilled and motivated Lead Salesforce Developer to join our team in Jaipur. This role is ideal for someone ready to
                  step into a leadership position and drive technical excellence across Salesforce Clouds. You will collaborate with clients and
                  internal teams to deliver robust Salesforce solutions, mentor junior developers, and contribute to key architectural decisions
                  shaping our Salesforce practice.{' '}
                </p>
                <ul>
                  <li> <b>Role:</b> Lead salesforce developer</li>
                  <li> <b>Location:</b> On-site (Jaipur, Rajasthan, India)</li>
                  <li> <b>Experience:</b> 3-7 years</li>
                  <li> <b>Skills:</b> 3–7 years of hands-on Salesforce development experience (Apex, LWC, Flows, APIs, etc.).</li>
                  <li>Proven experience in leading Salesforce projects and mentoring technical teams.</li>
                  <li>Strong understanding of Salesforce Clouds (Sales, Service, or others — Marketing Cloud is a plus!).</li>
                  <li>Experience with integration patterns, CI/CD tools (Copado, Gearset), and version control (Git).</li>
                  <li>Salesforce certifications preferred (Platform Developer, Admin, App Builder, etc.).</li>
                </ul>
                <Button className="vl-iner-btn mt-3" onClick={toggleForm}>
                  Apply for Job <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </Col>

            {/* Job 2 */}
            <Col lg={6} className="mb-30">
              <div className="career-job-card br-8 vl-gray-bg-4 p-4">
                <h3 className="mb-3">AWS cloud engineer</h3>
                <p className="vl-text-para">
                  Join our team to deliver L1/L2 operational support for AWS infrastructure, ensuring 24/7 monitoring, proactive incident management,
                  and timely remediation. You’ll work in a dynamic, global environment, collaborating with cross-functional teams to maintain high
                  availability, performance, and security. This role demands strong technical skills, attention to detail, and a commitment to
                  delivering outstanding customer support and operational excellence.
                </p>
                <ul>
                  <li> <b>Role:</b>  AWS cloud engineer</li>
                  <li> <b>Location:</b>  On-site (Jaipur, Rajasthan, India)</li>
                  <li> <b>Experience:</b> 1-3 years</li>
                  <li> <b>Skills:</b> 1–3 years experience in CloudOps/NOC/SOC roles</li>
                  <li>Hands-on with Linux & Windows administration</li>
                  <li>Familiarity with AWS services: EC2, S3, VPC, Lambda, CloudWatch</li>
                  <li>Exposure to monitoring/observability tools: Datadog, Prometheus, Grafana</li>
                  <li>Basic scripting in Bash and Python</li>
                  <li>Understanding of containerized environments (Docker, EKS, K8s)</li>
                  <li>Strong communication skills in English</li>
                  <li>Willingness to work night shifts and rotational weekend coverage</li>
                </ul>
                <Button className="vl-iner-btn mt-3" onClick={toggleForm}>
                  Apply for Job <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------- Application Form (Sliding Panel) ---------- */}
      <div className={`career-form-panel ${showForm ? 'open' : ''}`}>
        <Container>
          <div className="career-form-wrapper br-8 vl-gray-bg-4 p-4">
            {/* Close Button */}
            <button className="career-form-close" onClick={closeForm}>
              ✖
            </button>

            <h2 className="mb-4">Apply for Job</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                {/* Personal Info */}
                <Col lg={6} className="mb-20">
                  <label className="form-label">First Name</label>
                  <input type="text" name="firstName" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Last Name</label>
                  <input type="text" name="lastName" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" onChange={handleChange} required />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Contact Number</label>
                  <input type="text" name="contact" onChange={handleChange} required />
                </Col>
                <Col lg={12} className="mb-20">
                  <label className="form-label">Address</label>
                  <input type="text" name="address" onChange={handleChange} />
                </Col>
                <Col lg={12} className="mb-20">
                  <label className="form-label">Gender</label>
                  <select name="gender" onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </Col>

                {/* Experience Section */}
                <Col lg={12}>
                  <h4 className="mt-4 mb-3">Experience</h4>
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Job Title</label>
                  <input type="text" name="jobTitle" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Company Name</label>
                  <input type="text" name="companyName" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Office Location</label>
                  <input type="text" name="officeLocation" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Description</label>
                  <input type="text" name="description" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">From Date</label>
                  <input type="date" name="fromDate" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">To Date</label>
                  <input type="date" name="toDate" onChange={handleChange} />
                </Col>

                {/* Checkbox
                <Col lg={12} className="mb-20">
                  <label htmlFor="currentWork">
                    <input type="checkbox" name="currentWork" onChange={handleChange} /> I currently work here
                  </label>
                </Col> */}

                <Col lg={6} className="mb-20">
                  <label className="form-label">Current CTC</label>
                  <input type="text" name="currentCtc" onChange={handleChange} />
                </Col>
                <Col lg={6} className="mb-20">
                  <label className="form-label">Expected CTC</label>
                  <input type="text" name="expectedCtc" onChange={handleChange} />
                </Col>

                {/* Resume Upload */}
                {/* <Col lg={12} className="mb-20">
                  <label className="form-label">Upload Resume</label>
                  <input type="file" name="resume" onChange={handleChange} />
                </Col> */}

                {/* Message */}
                <Col lg={12} className="mb-20">
                  <label className="form-label">Message for Hiring Team</label>
                  <textarea name="message" onChange={handleChange}></textarea>
                </Col>

                {/* Submit Button */}
                <Col lg={12}>
                  <Button className="vl-iner-btn" type="submit">
                    Apply <FaArrowRight className="ml-2" />
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .career-form-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 900px;
          height: 100%;
          background: #fff;
          z-index: 999;
          transition: right 0.5s ease-in-out;
          overflow-y: auto;
          box-shadow: -2px 0 10px rgba(227, 220, 220, 0.1);
        }

        .career-form-panel.open {
          right: 0;
        }

        /* ✅ Light grey background for tiles */
        .career-form-wrapper input,
        .career-form-wrapper select,
        .career-form-wrapper textarea {
          width: 100%;
          padding: 10px;
          color: black;
          border-radius: 4px;
          border: 1px solid #ddd;
          background: #ffffffff; /* light grey background */
        }

        .career-job-card {
          background: #f6f8f9;
          min-height: 780px; /* adjust height as needed */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .career-form-close {
          background: transparent;
          border: none;
          font-size: 24px;
          float: right;
          cursor: pointer;
        }

        /* Default button (keep your current background color) */
        .vl-iner-btn {
          transition: all 0.3s ease-in-out;
          background: #007bff; /* keep your current solid color */
          color: #fff;
          border: none;
        }

        /* On hover → gradient only */
        .vl-iner-btn:hover {
          background: linear-gradient(90deg, #0072ff, #00c6ff) !important;
          color: #fff !important;
          transform: scale(1.05);
        }

        .form-label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #333;
        }

        /* Indent skills list items */
        .career-job-card ul {
          padding-left: 20px; /* push list inward */
          margin-top: 10px;
        }

        .career-job-card ul li {
          margin-bottom: 6px;
          padding-left: 10px; /* extra space for neat look */
          list-style-type: disc; /* keeps bullet */
        }

      `}</style>
    </MainLayout>
  )
}

export default CareerPage
export { Head } from '@/components/PageMeta'
