import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Video,
  User,
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function ContactPage({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'C Programming',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const FAQS = [
    {
      q: 'How do the live online classes work?',
      a: 'All sessions are conducted live via Google Meet or Zoom. You write code together with the mentor in real time, ask doubts with mic/screen sharing, and get instant feedback.'
    },
    {
      q: 'What happens if I miss a scheduled class?',
      a: 'Every single live lecture is recorded in high definition and uploaded to your student portal within 2 hours. You retain access for a full year.'
    },
    {
      q: 'Can beginners with zero coding experience join?',
      a: 'Absolutely! Our C Programming, Python, and Web Development courses are specifically tailored for absolute beginners with step-by-step logic building.'
    },
    {
      q: 'Will I receive a course completion certificate?',
      a: 'Yes, after completing the curriculum assignments and capstone project, you receive a verified certificate with a unique credential ID that you can attach to LinkedIn and your resume.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onNotify) {
        onNotify(`Enquiry sent for ${formData.name}! Our admissions team will connect shortly.`);
      }
    }, 850);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'C Programming',
      message: ''
    });
  };

  return (
    <div className="page-wrapper contact-page-view">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="page-header-container">
          <span className="section-pill">GET IN TOUCH</span>
          <h1 className="page-main-title">Contact D-Code Tech Hub</h1>
          <p className="page-main-sub">
            Have questions about course syllabus, batch timings, or demo lectures?
            Our student counseling team is here to guide you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            <h2 className="contact-column-heading">Contact Information</h2>
            <p className="contact-column-sub">
              Feel free to call, email, or message us directly on WhatsApp for admissions and demo class registration.
            </p>

            <div className="contact-info-cards-list">
              <div className="info-card-item">
                <div className="info-card-icon-box">
                  <Phone size={22} className="info-icon" />
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>+91 98765 43210</p>
                  <span>Direct Counseling & Admissions</span>
                </div>
              </div>

              <div className="info-card-item">
                <div className="info-card-icon-box">
                  <Mail size={22} className="info-icon" />
                </div>
                <div>
                  <strong>Email Address</strong>
                  <p>admissions@dcodetechhub.com</p>
                  <span>We reply within 4 business hours</span>
                </div>
              </div>

              <div className="info-card-item">
                <div className="info-card-icon-box">
                  <Video size={22} className="info-icon" />
                </div>
                <div>
                  <strong>Live Online Platform</strong>
                  <p>Google Meet & Zoom Live Rooms</p>
                  <span>Interactive screen share & real-time audio</span>
                </div>
              </div>

              <div className="info-card-item">
                <div className="info-card-icon-box">
                  <Clock size={22} className="info-icon" />
                </div>
                <div>
                  <strong>Counseling Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 8:30 PM IST</p>
                  <span>Sunday: 10:00 AM – 4:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="contact-form-column">
            <div className="contact-card">
              <h3 className="contact-card-title">Send Us a Message</h3>
              <p className="contact-card-sub">
                Fill in your details below and our counselor will call you with course fees and schedule.
              </p>

              {submitted ? (
                <div className="contact-success-box">
                  <CheckCircle2 size={56} className="success-icon" />
                  <h4 className="success-title">Thank You, {formData.name}!</h4>
                  <p className="success-desc">
                    Your enquiry for <strong>{formData.course}</strong> has been received.
                    Our mentor will reach out to you on <strong>{formData.phone}</strong>.
                  </p>
                  <button onClick={handleReset} className="btn-send-another">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {errorMsg && <div className="form-error-banner">{errorMsg}</div>}

                  {/* Name */}
                  <div className="form-group">
                    <div className="input-with-icon">
                      <User size={18} className="input-icon-blue" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon-blue" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon-blue" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number *"
                        required
                      />
                    </div>
                  </div>

                  {/* Course Select */}
                  <div className="form-group">
                    <div className="input-with-icon">
                      <Globe size={18} className="input-icon-blue" />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                      >
                        <option value="C Programming">Course Interested In: C Programming</option>
                        <option value="C++ Programming">Course Interested In: C++ Programming</option>
                        <option value="Core Java">Course Interested In: Core Java</option>
                        <option value="Python">Course Interested In: Python</option>
                        <option value="Web Development">Course Interested In: Web Development</option>
                        <option value="Data Structures">Course Interested In: Data Structures</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <div className="input-with-icon textarea-box">
                      <MessageSquare size={18} className="input-icon-blue textarea-icon" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Your Message / Query (Optional)"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-send-enquiry"
                  >
                    <span>{loading ? 'Sending Message...' : 'Send Enquiry'}</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="faq-container">
          <div className="section-header-center">
            <span className="section-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-main-heading">Got Questions? We’ve Got Answers</h2>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div className="faq-question-row">
                    <div className="faq-q-left">
                      <HelpCircle size={18} className="faq-icon" />
                      <h4 className="faq-question-text">{faq.q}</h4>
                    </div>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </div>
                  {isOpen && (
                    <div className="faq-answer-row">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
