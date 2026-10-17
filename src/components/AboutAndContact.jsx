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
  CheckCircle2
} from 'lucide-react';

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
  const [errorMsg, setErrorMsg] = useState('');

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
        onNotify(`Enquiry received from ${formData.name}! Our team will contact you shortly.`);
      }
    }, 900);
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

            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={56} className="success-icon" />
                <h4 className="success-title">Thank You, {formData.name}!</h4>
                <p className="success-desc">
                  Your enquiry for <strong>{formData.course}</strong> has been received successfully.
                  Our senior counselor will call you on <strong>{formData.phone}</strong> with batch timings and demo links.
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-send-enquiry"
                  aria-label="Send Enquiry"
                >
                  <span>{loading ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
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
