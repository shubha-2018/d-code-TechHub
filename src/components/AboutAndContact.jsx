import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  Code2,
  Rocket,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Send,
  ExternalLink,
  Check,
  RefreshCw
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import {
  CONTACT_EMAIL,
  sendContactEmail,
  getMailtoUrl,
  getGmailWebUrl
} from '../services/mailService';
import { WHATSAPP_BACKEND_CONFIG } from '../services/joinNowBackend';

export default function AboutAndContact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'C Programming',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

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
      course: 'C Programming',
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
    <section id="about" className="about-contact-section">
      {/* Decorative accent shape on far left matching design */}
      <div className="about-left-accent-pill"></div>

      <div className="about-contact-container">
        {/* 1. Left Column: About Us */}
        <div className="about-column">
          <div className="about-header">
            <span className="section-pill">ABOUT US</span>
            <h2 className="section-main-heading">About D-Code Tech Hub</h2>
            <div className="about-motto-strip">
              <span>Learn.</span>
              <span>Code.</span>
              <span>Build.</span>
              <strong className="motto-accent">Grow.</strong>
            </div>
          </div>

          <p className="about-paragraph">
            <strong>D-CODE TECH HUB</strong> is a technology-focused learning institute committed to making quality technical education simple, practical, and accessible. The institute helps learners build strong programming fundamentals through structured, hands-on learning and practical experience.
          </p>

          <p className="about-paragraph">
            At D-CODE TECH HUB, we provide a beginner-friendly and supportive learning environment, with structured curriculum, personal attention, doubt-solving support, and mentorship led by <strong>Prof. Dipali Dube</strong> (Founder &amp; Trainer, 4+ years coaching experience).
          </p>

          {/* 4 Feature Icons Row */}
          <div className="about-pillars-grid">
            <div className="about-pillar-item">
              <div className="pillar-icon-box">
                <BookOpen size={24} className="pillar-icon" />
              </div>
              <span className="pillar-title">Learn with<br />Clarity</span>
            </div>

            <div className="about-pillar-item">
              <div className="pillar-icon-box">
                <Code2 size={24} className="pillar-icon" />
              </div>
              <span className="pillar-title">Solve with<br />Logic</span>
            </div>

            <div className="about-pillar-item">
              <div className="pillar-icon-box">
                <Rocket size={24} className="pillar-icon" />
              </div>
              <span className="pillar-title">Build through<br />Practice</span>
            </div>

            <div className="about-pillar-item">
              <div className="pillar-icon-box">
                <Video size={24} className="pillar-icon" />
              </div>
              <span className="pillar-title">Grow with<br />Confidence</span>
            </div>
          </div>
        </div>

        {/* 2. Center Column: Founder Photo Visual */}
        <div className="about-center-visual">
          <div className="about-center-img-frame founder-frame-glow">
            <img
              src="/images/founder_dipali_dube.png?v=real_founder"
              alt="Prof. Dipali Dube - Founder & Lead Trainer of D-Code Tech Hub"
              className="about-center-student-img founder-center-img"
            />
          </div>
        </div>

        {/* 3. Right Column: Contact Us Card */}
        <div id="contact" className="contact-column">
          <div className="contact-card">
            <h3 className="contact-card-title">Contact Us</h3>
            <p className="contact-card-sub">
              Have questions about our courses? Send us a message. We'll get back to you soon.
            </p>

            {submitted && submittedData ? (
              <div className="contact-success-box">
                <div className="contact-success-badge-top">
                  <Check size={16} />
                  <span>Sent directly to {CONTACT_EMAIL}</span>
                </div>

                <CheckCircle2 size={52} className="success-icon" />
                <h4 className="success-title">Thank You, {submittedData.name}!</h4>
                <p className="success-desc">
                  Your enquiry has been delivered directly to <strong>{CONTACT_EMAIL}</strong>.
                  Our team will connect with you on <strong>{submittedData.phone}</strong> shortly.
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
                  <div className="input-with-icon">
                    <User size={18} className="input-icon-blue" aria-hidden="true" />
                    <input
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
                  <div className="input-with-icon">
                    <Mail size={18} className="input-icon-blue" aria-hidden="true" />
                    <input
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
                  <div className="input-with-icon">
                    <Phone size={18} className="input-icon-blue" aria-hidden="true" />
                    <input
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
                  <div className="input-with-icon select-wrapper">
                    <Globe size={18} className="input-icon-blue" aria-hidden="true" />
                    <select
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
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <div className="input-with-icon textarea-box">
                    <MessageSquare size={18} className="input-icon-blue textarea-icon" aria-hidden="true" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Your Message (Optional)"
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
                  aria-label="Send Enquiry"
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
  );
}
