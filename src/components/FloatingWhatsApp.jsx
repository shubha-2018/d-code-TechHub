import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { WHATSAPP_BACKEND_CONFIG, getQuickWhatsAppJoinUrl } from '../services/joinNowBackend';

export default function FloatingWhatsApp({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDirectWhatsApp = () => {
    window.open(getQuickWhatsAppJoinUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="floating-whatsapp-container" aria-label="WhatsApp Join Now Support">
      {isOpen && (
        <div className="floating-whatsapp-popup" role="dialog" aria-modal="true">
          <div className="floating-popup-header">
            <div className="floating-popup-brand">
              <div className="popup-avatar-ring">
                <MessageCircle size={22} color="#ffffff" />
                <span className="popup-online-dot"></span>
              </div>
              <div className="popup-brand-text">
                <strong>D-Code Tech Hub</strong>
                <span>Admissions &amp; Counselor Live</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="popup-close-btn"
              aria-label="Close WhatsApp chat popup"
            >
              <X size={16} />
            </button>
          </div>

          <div className="floating-popup-body">
            <div className="floating-chat-bubble">
              <p>
                👋 Hello! Welcome to <strong>D-Code Tech Hub</strong>.
              </p>
              <p>
                Ready to level up your coding skills? Join our upcoming live batch with a <strong>Free Demo Class</strong>!
              </p>
              <span className="chat-timestamp">Admissions Team &bull; Online</span>
            </div>
          </div>

          <div className="floating-popup-footer">
            <button
              onClick={handleDirectWhatsApp}
              className="btn-popup-whatsapp-send"
            >
              <MessageCircle size={17} />
              <span>Join Now on WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenEnroll) onOpenEnroll();
              }}
              className="btn-popup-custom-form"
            >
              <span>Or fill full demo reservation form</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="floating-trigger-wrapper">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="floating-whatsapp-btn"
          title={`Join Now on WhatsApp (${WHATSAPP_BACKEND_CONFIG.displayNumber})`}
          aria-label="Join Now on WhatsApp Admissions"
        >
          <span className="floating-pulse-ring"></span>
          <MessageCircle size={26} className="floating-wa-icon" />
          <span className="floating-btn-text">Join Now</span>
        </button>
      </div>
    </div>
  );
}
