import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_BACKEND_CONFIG, getQuickWhatsAppJoinUrl } from '../services/joinNowBackend';

export default function FloatingWhatsApp() {
  const whatsappUrl = getQuickWhatsAppJoinUrl();

  return (
    <aside className="floating-whatsapp-container" aria-label="Direct WhatsApp Contact">
      <div className="floating-trigger-wrapper">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn floating-whatsapp-circle"
          title={`Direct Chat on WhatsApp (${WHATSAPP_BACKEND_CONFIG.displayNumber})`}
          aria-label={`Direct Chat on WhatsApp (${WHATSAPP_BACKEND_CONFIG.displayNumber})`}
        >
          <span className="floating-pulse-ring"></span>
          <WhatsAppIcon size={25} color="#ffffff" className="floating-wa-icon" />
        </a>
      </div>
    </aside>
  );
}

