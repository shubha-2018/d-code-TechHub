import React, { useState } from 'react';
import { X, CheckCircle2, Video, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { COURSES_DATA } from './Courses';
import {
  submitJoinNowToWhatsApp,
  getQuickWhatsAppJoinUrl,
  WHATSAPP_BACKEND_CONFIG
} from '../services/joinNowBackend';

export default function EnrollModal({ isOpen, onClose, selectedCourse, onConfirm }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse || 'Core Java',
    batchPreference: 'Weekend Live Batch (Sat-Sun)',
    codingExperience: 'Beginner (Starting from scratch)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappReceiptUrl, setWhatsappReceiptUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Dispatch lead data to official WhatsApp backend (+91 9284316487)
    const result = submitJoinNowToWhatsApp(formData);
    setWhatsappReceiptUrl(result.url);

    // Open WhatsApp Web/App with pre-filled application details
    try {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Popup blocked by browser:', err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onConfirm) {
        onConfirm(formData.name, formData.course, result.url);
      }
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-view">
            <CheckCircle2 size={64} className="modal-success-icon" />
            <h3 className="modal-success-title">Join Request Sent to WhatsApp!</h3>
            <p className="modal-success-desc">
              Congratulations <strong>{formData.name}</strong>! Your application for{' '}
              <span className="text-highlight">{formData.course}</span> has been processed and forwarded to our official admissions team.
            </p>
            <div className="enroll-receipt-card">
              <div className="receipt-item">
                <span>Student Name:</span>
                <strong>{formData.name}</strong>
              </div>
              <div className="receipt-item">
                <span>Selected Course:</span>
                <strong>{formData.course}</strong>
              </div>
              <div className="receipt-item">
                <span>WhatsApp Backend:</span>
                <strong style={{ color: '#10b981' }}>{WHATSAPP_BACKEND_CONFIG.displayNumber} (Connected)</strong>
              </div>
              <div className="receipt-item">
                <span>Batch Mode:</span>
                <strong>Live Online (Zoom / Google Meet)</strong>
              </div>
              <div className="receipt-item">
                <span>Preference:</span>
                <strong>{formData.batchPreference}</strong>
              </div>
              <div className="receipt-item">
                <span>Free Demo Session:</span>
                <strong style={{ color: '#10b981' }}>Reserved via WhatsApp</strong>
              </div>
            </div>

            <div className="modal-success-actions">
              <a
                href={whatsappReceiptUrl || getQuickWhatsAppJoinUrl(formData.course)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-whatsapp-cta"
              >
                <MessageCircle size={18} />
                <span>Open in WhatsApp</span>
              </a>
              <button className="btn-modal-done" onClick={onClose}>
                Done & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <div className="modal-badge-row">
                <span className="modal-badge">START LEARNING TODAY</span>
                <span className="modal-wa-badge">
                  <span className="wa-dot"></span> WhatsApp Backend: {WHATSAPP_BACKEND_CONFIG.displayNumber}
                </span>
              </div>
              <h3 className="modal-title">Join D-Code Tech Hub</h3>
              <p className="modal-subtitle">
                Reserve your free live demo session. All enrollment requests are instantly connected to our official WhatsApp backend.
              </p>
            </div>

            {/* Quick 1-Click WhatsApp Join Banner */}
            <div className="modal-quick-whatsapp-banner">
              <div className="quick-banner-text">
                <div className="quick-banner-title">
                  <MessageCircle size={15} color="#25D366" />
                  <strong>Want instant 1-click Join?</strong>
                </div>
                <span>Skip the full form and chat directly with admissions mentor</span>
              </div>
              <a
                href={getQuickWhatsAppJoinUrl(formData.course)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-quick-wa"
                aria-label="Direct WhatsApp Join Now"
              >
                <span>Join on WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 92843 16487"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Select Course *</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label>Batch Preference</label>
                  <select
                    value={formData.batchPreference}
                    onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                  >
                    <option value="Weekend Live Batch (Sat-Sun)">Weekend (Sat-Sun)</option>
                    <option value="Weekday Evening Batch (Mon-Thu)">Weekday Evening (Mon-Thu)</option>
                    <option value="Morning Fast-track">Morning Fast-track</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Current Coding Level</label>
                <select
                  value={formData.codingExperience}
                  onChange={(e) => setFormData({ ...formData, codingExperience: e.target.value })}
                >
                  <option value="Beginner (Starting from scratch)">Beginner (Starting from scratch)</option>
                  <option value="Some basics known (College student)">Some basics known (College student)</option>
                  <option value="Intermediate (Looking for projects & job)">Intermediate (Looking for projects & job)</option>
                </select>
              </div>

              <div className="modal-perks">
                <div className="perk-item">
                  <Video size={16} color="#0284c7" />
                  <span>100% Live Interactive Sessions</span>
                </div>
                <div className="perk-item">
                  <ShieldCheck size={16} color="#10b981" />
                  <span>Free Demo Class with Zero Risk</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-modal-submit btn-modal-whatsapp-submit"
                title="Submit details and dispatch to WhatsApp backend"
              >
                <MessageCircle size={19} />
                <span>{loading ? 'Connecting to WhatsApp...' : 'Submit & Join via WhatsApp'}</span>
                <ArrowRight size={18} />
              </button>

              <div className="modal-backend-security-note">
                <ShieldCheck size={14} color="#10b981" />
                <span>
                  Official WhatsApp Backend: All submissions forward directly to admissions at{' '}
                  <strong>{WHATSAPP_BACKEND_CONFIG.displayNumber}</strong>.
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
