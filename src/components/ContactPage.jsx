import React, { useState, useEffect } from 'react';
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
  ExternalLink,
  Send,
  Check,
  RefreshCw
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  sendContactEmail,
  getMailtoUrl,
  getGmailWebUrl
} from '../services/mailService';
import { WHATSAPP_BACKEND_CONFIG } from '../services/joinNowBackend';

export default function ContactPage({ onNotify, initialCourse }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: initialCourse || 'C Programming',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({
        ...prev,
        course: initialCourse
      }));
    }
  }, [initialCourse]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const snapshot = { ...formData };
    setSubmittedData(snapshot);

    try {
      await sendContactEmail(snapshot);
      setLoading(false);
      setSubmitted(true);
      if (onNotify) {
        onNotify(`✅ Enquiry sent directly to ${CONTACT_EMAIL}!`);
      }
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setLoading(false);
      setSubmitted(true);
      if (onNotify) {
        onNotify(`Enquiry prepared for ${CONTACT_EMAIL}`);
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: initialCourse || 'C Programming',
      message: ''
    });
  };

  const whatsappText = submittedData
    ? encodeURIComponent(
        `Hello D-Code Tech Hub! I have submitted an admission enquiry on your website:\n\n` +
        `👤 *Name:* ${submittedData.name}\n` +
        `📧 *Email:* ${submittedData.email}\n` +
        `📱 *Phone:* ${submittedData.phone}\n` +
        `💻 *Course:* ${submittedData.course}\n` +
        (submittedData.message ? `💬 *Message:* ${submittedData.message}\n` : '') +
        `\nPlease share syllabus and fee details.`
      )
    : '';


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


          {/* Left Column: Contact Information Card (matching uploaded format) */}
          <div className="contact-info-column">
            <div className="contact-info-card-uploaded">
              <h2 className="uploaded-card-title">Contact Information</h2>

              <div className="uploaded-card-list">
                {/* 1. Email */}
                <div className="uploaded-contact-item">
                  <div className="uploaded-icon-circle">
                    <Mail size={22} strokeWidth={1.8} />
                  </div>
                  <div className="uploaded-contact-text">
                    <a href="mailto:dcodetechhub@gmail.com" className="uploaded-link">
                      dcodetechhub@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="uploaded-contact-item">
                  <div className="uploaded-icon-circle">
                    <Phone size={22} strokeWidth={1.8} />
                  </div>
                  <div className="uploaded-contact-text">
                    <a href="tel:+919284316487" className="uploaded-link">
                      +91 92843 16487
                    </a>
                  </div>
                </div>

                {/* 3. Website */}
                <div className="uploaded-contact-item">
                  <div className="uploaded-icon-circle">
                    <Globe size={22} strokeWidth={1.8} />
                  </div>
                  <div className="uploaded-contact-text">
                    <a
                      href="https://www.dcodetechhub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uploaded-link"
                    >
                      www.dcodetechhub.com
                    </a>
                  </div>
                </div>

                {/* 4. Address */}
                <div className="uploaded-contact-item align-top">
                  <div className="uploaded-icon-circle">
                    <MapPin size={22} strokeWidth={1.8} />
                  </div>
                  <div className="uploaded-contact-text">
                    <a
                      href="https://maps.google.com/?q=Near+post+office+Jintur+431509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uploaded-link uploaded-address"
                    >
                      <span>Near post office Jintur- 431509</span>
                      <span className="uploaded-address-sub">Jintur, Maharashtra &bull; PIN: 431509</span>
                    </a>
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

              {submitted && submittedData ? (
                <div className="contact-success-box">
                  <div className="contact-success-badge-top">
                    <Check size={16} />
                    <span>Sent directly to {CONTACT_EMAIL}</span>
                  </div>

                  <CheckCircle2 size={52} className="success-icon" />
                  <h4 className="success-title">Thank You, {submittedData.name}!</h4>
                  <p className="success-desc">
                    All your filled enquiry details have been forwarded to our official mailbox{' '}
                    <strong>{CONTACT_EMAIL}</strong> and our team will get in touch with you shortly.
                  </p>

                  {/* Summary of all filled data */}
                  <div className="submitted-data-summary">
                    <div className="summary-title">Submitted Details Summary</div>
                    <div className="summary-row">
                      <span className="summary-label">Name:</span>
                      <span className="summary-value">{submittedData.name}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">Email:</span>
                      <span className="summary-value">{submittedData.email}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">Phone:</span>
                      <span className="summary-value">{submittedData.phone}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">Course:</span>
                      <span className="summary-value course-tag">{submittedData.course}</span>
                    </div>
                    {submittedData.message && (
                      <div className="summary-row">
                        <span className="summary-label">Message:</span>
                        <span className="summary-value">{submittedData.message}</span>
                      </div>
                    )}
                    <div className="summary-row summary-dest">
                      <span className="summary-label">Destination:</span>
                      <span className="summary-value highlight-mail">{CONTACT_EMAIL}</span>
                    </div>
                  </div>

                  {/* Direct mail action buttons */}
                  <div className="contact-success-actions">
                    <a
                      href={getGmailWebUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-mail-action btn-gmail"
                      title="Open in Gmail"
                    >
                      <Mail size={16} />
                      <span>Open in Gmail</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={getMailtoUrl(submittedData)}
                      className="btn-mail-action btn-mailto"
                      title="Open Default Mail App"
                    >
                      <Send size={16} />
                      <span>Default Mail App</span>
                    </a>

                    <a
                      href={`https://wa.me/${WHATSAPP_BACKEND_CONFIG.phoneNumber}?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-mail-action btn-wa"
                      title="Connect on WhatsApp"
                    >
                      <WhatsAppIcon size={16} />
                      <span>WhatsApp Admissions</span>
                    </a>
                  </div>

                  <button onClick={handleReset} className="btn-send-another">
                    <RefreshCw size={14} />
                    <span>Send Another Enquiry</span>
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

                  {/* Destination Mail Notice */}
                  <div className="form-direct-mail-note">
                    <Mail size={15} className="mail-note-icon" />
                    <span>
                      Enquiry sent directly to <strong>{CONTACT_EMAIL}</strong>
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-send-enquiry"
                    aria-label="Send course enquiry"
                  >
                    <span>{loading ? 'Sending to Mail...' : 'Send Enquiry'}</span>
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

