import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { COURSES_DATA } from './Courses';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onConfirm) {
        onConfirm(formData.name, formData.course);
      }
    }, 800);
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
            <h3 className="modal-success-title">Enrollment Request Received!</h3>
            <p className="modal-success-desc">
              Congratulations <strong>{formData.name}</strong>! You have reserved your seat for{' '}
              <span className="text-highlight">{formData.course}</span>.
            </p>
            <div className="enroll-receipt-card">
              <div className="receipt-item">
                <span>Batch Mode:</span>
                <strong>Live Online (Zoom / Meet)</strong>
              </div>
              <div className="receipt-item">
                <span>Preference:</span>
                <strong>{formData.batchPreference}</strong>
              </div>
              <div className="receipt-item">
                <span>Free Demo Class:</span>
                <strong style={{ color: '#10b981' }}>Confirmed (Link sent via WhatsApp)</strong>
              </div>
            </div>
            <button className="btn-modal-done" onClick={onClose}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="modal-badge">START LEARNING TODAY</span>
              <h3 className="modal-title">Join D-Code Tech Hub</h3>
              <p className="modal-subtitle">
                Reserve your free live demo session and get step-by-step guidance from industry mentors.
              </p>
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
                    placeholder="e.g. +91 98765 43210"
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

              <button type="submit" disabled={loading} className="btn-modal-submit">
                <span>{loading ? 'Submitting Details...' : 'Confirm Demo & Enroll Now'}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
