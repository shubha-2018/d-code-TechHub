import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_BACKEND_CONFIG } from '../services/joinNowBackend';

function normalizeCourseSelection(cName) {
  if (!cName) return 'C Programming';
  const lower = cName.toLowerCase();
  if (lower.includes('java') && !lower.includes('script')) return 'Core Java';
  if (lower.includes('c++') || lower.includes('cpp')) return 'C++ Programming';
  if (lower.includes('python')) return 'Python';
  if (lower.includes('web') || lower.includes('html') || lower.includes('javascript')) return 'Web Development';
  if (lower.includes('structure') || lower.includes('dsa') || lower.includes('algo')) return 'Data Structures';
  if (lower.startsWith('c ') || lower === 'c') return 'C Programming';
  return cName;
}

export default function EnrollModal({ isOpen, onClose, selectedCourse, onConfirm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: normalizeCourseSelection(selectedCourse),
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappReceiptUrl, setWhatsappReceiptUrl] = useState('');

  // Update selected course when modal is opened or selectedCourse prop changes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMsg('');
      if (selectedCourse) {
        setFormData((prev) => ({
          ...prev,
          course: normalizeCourseSelection(selectedCourse)
        }));
      }
    }
  }, [isOpen, selectedCourse]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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

    const waMessage = [
      `🎓 *NEW COURSE ENQUIRY (Join Now)*`,
      `🏢 *D-Code Tech Hub Admissions*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Student Name:* ${formData.name.trim()}`,
      `📱 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `📧 *Email Address:* ${formData.email.trim()}`,
      `💻 *Interested Course:* ${formData.course}`,
      formData.message.trim() ? `💬 *Message:* ${formData.message.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Hello! I submitted this enquiry via D-Code Tech Hub. Please confirm the batch timings and demo class link._`
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_BACKEND_CONFIG.phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    setWhatsappReceiptUrl(whatsappUrl);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onConfirm) {
        onConfirm(formData.name, formData.course, whatsappUrl);
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: normalizeCourseSelection(selectedCourse),
      message: ''
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog modal-join-form-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close form">
          <X size={20} />
        </button>

        <div className="contact-card-header">
          <div className="contact-card-pill">
            <Sparkles size={14} />
            <span>QUICK RESPONSE GUARANTEED</span>
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
              Our counselor will call you on <strong>{formData.phone}</strong> with course fees and schedule.
            </p>

            <div className="modal-success-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px' }}>
              <a
                href={whatsappReceiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-send-enquiry"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                  textDecoration: 'none'
                }}
              >
                <WhatsAppIcon size={18} color="#ffffff" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="btn-send-another"
                style={{ width: '100%' }}
              >
                Done &amp; Close
              </button>
            </div>
          </div>
        ) : (
          <form id="join-modal-form" onSubmit={handleSubmit} className="contact-form" noValidate>
            {errorMsg && <div className="form-error-banner" role="alert">{errorMsg}</div>}

            {/* Name */}
            <div className="form-group">
              <label htmlFor="join-name" className="visually-hidden">Your Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon-blue" aria-hidden="true" />
                <input
                  id="join-name"
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
              <label htmlFor="join-email" className="visually-hidden">Your Email</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon-blue" aria-hidden="true" />
                <input
                  id="join-email"
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
              <label htmlFor="join-phone" className="visually-hidden">Your Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon-blue" aria-hidden="true" />
                <input
                  id="join-phone"
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
              <label htmlFor="join-course" className="visually-hidden">Interested Course</label>
              <div className="input-with-icon select-wrapper">
                <Globe size={18} className="input-icon-blue" aria-hidden="true" />
                <select
                  id="join-course"
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
              <label htmlFor="join-message" className="visually-hidden">Your Message</label>
              <div className="input-with-icon textarea-box">
                <MessageSquare size={18} className="input-icon-blue textarea-icon" aria-hidden="true" />
                <textarea
                  id="join-message"
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
  );
}
