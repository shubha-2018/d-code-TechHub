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
  ChevronDown,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

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
      q: "Will I receive a course completion certificate?",
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

          {/* Mobile Fast Contact Action Bar (Instant Tap to Call / WhatsApp / Email) */}
          <div className="mobile-quick-actions-card">
            <div className="quick-actions-header">
              <span className="quick-actions-badge">FAST CONNECT</span>
              <p className="quick-actions-hint">Instant 1-Tap Admissions &amp; Inquiries</p>
            </div>
            <div className="mobile-quick-actions-grid">
              <a
                href="tel:+919284316487"
                className="mobile-quick-btn quick-btn-call"
                aria-label="Call admissions directly at +91 9284316487"
              >
                <div className="quick-btn-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="quick-btn-text">
                  <strong>Call Now</strong>
                  <span>9284316487</span>
                </div>
              </a>

              <a
                href="https://wa.me/919284316487?text=Hello%20D-Code%20Tech%20Hub,%20I%20would%20like%20to%20inquire%20about%20the%20courses%20and%20upcoming%20batches."
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-quick-btn quick-btn-whatsapp"
                aria-label="Chat on WhatsApp at 9284316487"
              >
                <div className="quick-btn-icon-wrapper">
                  <WhatsAppIcon size={18} color="#ffffff" />
                </div>
                <div className="quick-btn-text">
                  <strong>WhatsApp</strong>
                  <span>9284316487</span>
                </div>
              </a>

              <a
                href="mailto:dcodetechhub@gmail.com"
                className="mobile-quick-btn quick-btn-email"
                aria-label="Email admissions team at dcodetechhub@gmail.com"
              >
                <div className="quick-btn-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="quick-btn-text">
                  <strong>Email Us</strong>
                  <span>dcodetechhub</span>
                </div>
              </a>
            </div>
          </div>

          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            <div className="contact-column-header">
              <span className="contact-section-pill">DIRECT CONNECT</span>
              <h2 className="contact-column-heading">Company Information</h2>
              <p className="contact-column-sub">
                Reach out directly to D-Code Tech Hub for course admissions, batch schedules, syllabus guidance, or center visits.
              </p>
            </div>

            <div className="contact-info-cards-grid">
              {/* Card 1: Phone & WhatsApp */}
              <div className="info-grid-card">
                <div className="info-card-header-row">
                  <div className="info-card-icon-box phone-box">
                    <Phone size={20} className="info-icon" />
                  </div>
                  <span className="live-status-indicator">
                    <span className="pulse-dot"></span> Available
                  </span>
                </div>
                <strong className="info-grid-card-label">Business &amp; Client Contact</strong>
                <a href="tel:+919284316487" className="info-grid-card-main-val">
                  +91 92843 16487
                </a>
                <p className="info-grid-card-meta">
                  Business &amp; Client Number: <strong>9284316487</strong>
                </p>
                <div className="info-card-actions-row">
                  <a href="tel:+919284316487" className="card-mini-action-btn call-action">
                    <Phone size={13} /> Call
                  </a>
                  <a
                    href="https://wa.me/919284316487?text=Hello%20D-Code%20Tech%20Hub,%20I%20would%20like%20to%20inquire%20about%20the%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-mini-action-btn whatsapp-action"
                  >
                    <WhatsAppIcon size={14} color="#ffffff" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Card 2: Official Email */}
              <div className="info-grid-card">
                <div className="info-card-header-row">
                  <div className="info-card-icon-box mail-box">
                    <Mail size={20} className="info-icon" />
                  </div>
                  <span className="info-sub-pill">Official Inquiries</span>
                </div>
                <strong className="info-grid-card-label">Official Email ID</strong>
                <a href="mailto:dcodetechhub@gmail.com" className="info-grid-card-main-val email-val">
                  dcodetechhub@gmail.com
                </a>
                <p className="info-grid-card-meta">
                  Admissions, syllabus guidance &amp; queries
                </p>
                <div className="info-card-actions-row">
                  <a href="mailto:dcodetechhub@gmail.com" className="card-mini-action-btn email-action">
                    <Mail size={13} /> Send Email
                  </a>
                </div>
              </div>

              {/* Card 3: Office Address */}
              <div className="info-grid-card">
                <div className="info-card-header-row">
                  <div className="info-card-icon-box map-box">
                    <MapPin size={20} className="info-icon" />
                  </div>
                  <span className="pin-badge">PIN: 431509</span>
                </div>
                <strong className="info-grid-card-label">Office Full Address</strong>
                <p className="info-grid-card-main-val address-val">
                  Near post office Jintur- 431509
                </p>
                <p className="info-grid-card-meta">
                  Jintur, Maharashtra &bull; PIN Code: 431509
                </p>
                <div className="info-card-actions-row">
                  <a
                    href="https://maps.google.com/?q=Near+post+office+Jintur+431509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-mini-action-btn map-action"
                  >
                    <ExternalLink size={13} /> View on Map
                  </a>
                </div>
              </div>

              {/* Card 4: Founder & Trainer */}
              <div className="info-grid-card founder-grid-card">
                <div className="info-card-header-row">
                  <div className="info-card-icon-box founder-avatar-box">
                    <img
                      src="/images/founder_dipali_dube.png?v=real_founder"
                      alt="Prof. Dipali Dube"
                      className="founder-mini-avatar-img"
                    />
                  </div>
                  <span className="founder-exp-pill">4+ Yrs Exp</span>
                </div>
                <strong className="info-grid-card-label">Founder &amp; Lead Trainer</strong>
                <p className="info-grid-card-main-val founder-val">
                  Prof. Dipali Dube
                </p>
                <p className="info-grid-card-meta">
                  Dipali Sureshrao Dube &bull; Founder, D-Code Tech Hub
                </p>
                <div className="founder-mini-badge">
                  <span>Personal Attention &bull; Practical Projects</span>
                </div>
              </div>

              {/* Card 5 (Full Width Spanning 2 Columns): Social Media & Live Schedule */}
              <div className="info-grid-banner-card">
                <div className="banner-social-half">
                  <div className="banner-top">
                    <Globe size={18} className="banner-icon-blue" />
                    <strong>Official Social Media Channels</strong>
                  </div>
                  <p className="banner-sub">Watch free coding tutorials &amp; tech updates:</p>
                  <div className="banner-social-buttons">
                    <a
                      href="https://www.youtube.com/@dcodetechhub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-social-btn yt-btn"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M21.582 6.186a2.766 2.766 0 0 0-1.945-1.96C17.92 3.7 12 3.7 12 3.7s-5.92 0-7.637.526A2.766 2.766 0 0 0 2.418 6.186C1.9 7.915 1.9 11.5 1.9 11.5s0 3.585.518 5.314a2.766 2.766 0 0 0 1.945 1.96c1.717.526 7.637.526 7.637.526s5.92 0 7.637-.526a2.766 2.766 0 0 0 1.945-1.96c.518-1.729.518-5.314.518-5.314s0-3.585-.518-5.314zM10 14.5V8.5L15.2 11.5 10 14.5z"/>
                      </svg>
                      <span>YouTube: @dcodetechhub</span>
                    </a>
                    <a
                      href="https://www.instagram.com/dcodetechhub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-social-btn insta-btn"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
                      </svg>
                      <span>Instagram: @dcodetechhub</span>
                    </a>
                  </div>
                </div>

                <div className="banner-schedule-half">
                  <div className="schedule-item">
                    <Video size={16} className="schedule-icon" />
                    <div>
                      <strong>Live Online Classes</strong>
                      <span>Google Meet &amp; Zoom Live Rooms</span>
                    </div>
                  </div>
                  <div className="schedule-item">
                    <Clock size={16} className="schedule-icon" />
                    <div>
                      <strong>Counseling Hours</strong>
                      <span>Mon – Sat: 9:00 AM – 8:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="contact-form-column">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-pill">
                  <Sparkles size={14} />
                  <span>Quick Response Guaranteed</span>
                </div>
                <h3 className="contact-card-title">Send Us a Message</h3>
                <p className="contact-card-sub">
                  Fill in your details below and our counselor will call you with course fees and schedule.
                </p>
              </div>

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
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {errorMsg && <div className="form-error-banner" role="alert">{errorMsg}</div>}

                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                    <div className="input-with-icon">
                      <User size={18} className="input-icon-blue" aria-hidden="true" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        autoComplete="name"
                        autoCapitalize="words"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon-blue" aria-hidden="true" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        inputMode="email"
                        autoComplete="email"
                        autoCapitalize="none"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="visually-hidden">Your Phone Number</label>
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon-blue" aria-hidden="true" />
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number *"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  {/* Course Select */}
                  <div className="form-group">
                    <label htmlFor="contact-course" className="visually-hidden">Interested Course</label>
                    <div className="input-with-icon select-wrapper">
                      <Globe size={18} className="input-icon-blue" aria-hidden="true" />
                      <select
                        id="contact-course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        aria-label="Select course"
                      >
                        <option value="C Programming">Course Interested In: C Programming</option>
                        <option value="C++ Programming">Course Interested In: C++ Programming</option>
                        <option value="Core Java">Course Interested In: Core Java</option>
                        <option value="Python">Course Interested In: Python</option>
                        <option value="Web Development">Course Interested In: Web Development</option>
                        <option value="Data Structures">Course Interested In: Data Structures</option>
                      </select>
                      <ChevronDown size={16} className="select-chevron" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
                    <div className="input-with-icon textarea-box">
                      <MessageSquare size={18} className="input-icon-blue textarea-icon" aria-hidden="true" />
                      <textarea
                        id="contact-message"
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
                    aria-label="Send course enquiry"
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
            <h2 className="section-main-heading">Got Questions? We've Got Answers</h2>
            <p className="section-sub-heading">Everything you need to know about joining D-Code Tech Hub</p>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenFaq(isOpen ? -1 : index);
                    }
                  }}
                >
                  <div className="faq-question-row">
                    <div className="faq-q-left">
                      <HelpCircle size={18} className="faq-icon" aria-hidden="true" />
                      <h4 className="faq-question-text">{faq.q}</h4>
                    </div>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} aria-hidden="true" />
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

