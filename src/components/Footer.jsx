import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onNavigate, onYouTubeClick, onPrivacyClick, onTermsClick }) {
  const handleNavClick = (tab) => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top/Main Footer Row */}
        <div className="footer-main-row">
          {/* Left: Brand Logo */}
          <div onClick={() => handleNavClick('home')} className="footer-brand">
            <Logo size="medium" />
          </div>

          {/* Center: Navigation Links */}
          <nav className="footer-nav">
            <button onClick={() => handleNavClick('home')} className="footer-link">Home</button>
            <button onClick={() => handleNavClick('courses')} className="footer-link">Courses</button>
            <button onClick={() => handleNavClick('reviews')} className="footer-link">Reviews</button>
            <button onClick={() => handleNavClick('about')} className="footer-link">About</button>
            <button onClick={() => handleNavClick('contact')} className="footer-link">Contact</button>
            <button onClick={() => onPrivacyClick && onPrivacyClick()} className="footer-link">Privacy Policy</button>
            <button onClick={() => onTermsClick && onTermsClick()} className="footer-link">Terms & Conditions</button>
          </nav>

          {/* Right: Social Media Buttons */}
          <div className="footer-socials">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919284316487?text=Hello%20D-Code%20Tech%20Hub,%20I%20would%20like%20to%20inquire%20about%20the%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-whatsapp"
              aria-label="Direct Chat on WhatsApp (+91 92843 16487)"
              title="Official WhatsApp +91 92843 16487"
            >
              <WhatsAppIcon size={20} color="#ffffff" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@dcodetechhub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-youtube"
              aria-label="D-Code Tech Hub YouTube Channel (@dcodetechhub)"
              title="Official YouTube Channel @dcodetechhub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.582 6.186a2.766 2.766 0 0 0-1.945-1.96C17.92 3.7 12 3.7 12 3.7s-5.92 0-7.637.526A2.766 2.766 0 0 0 2.418 6.186C1.9 7.915 1.9 11.5 1.9 11.5s0 3.585.518 5.314a2.766 2.766 0 0 0 1.945 1.96c1.717.526 7.637.526 7.637.526s5.92 0 7.637-.526a2.766 2.766 0 0 0 1.945-1.96c.518-1.729.518-5.314.518-5.314s0-3.585-.518-5.314zM10 14.5V8.5L15.2 11.5 10 14.5z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dcodetechhub/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-instagram"
              aria-label="D-Code Tech Hub Instagram Page (@dcodetechhub)"
              title="Official Instagram @dcodetechhub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Company Contact Details Strip */}
        <div className="footer-contact-strip">
          <div className="footer-contact-item">
            <MapPin size={15} className="footer-contact-icon" />
            <span>Near post office Jintur- 431509</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={15} className="footer-contact-icon" />
            <a href="tel:+919284316487">+91 92843 16487</a>
          </div>
          <div className="footer-contact-item">
            <Mail size={15} className="footer-contact-icon" />
            <a href="mailto:dcodetechhub@gmail.com">dcodetechhub@gmail.com</a>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice & Developer Credit */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            <strong>Learn. Code. Build. Grow.</strong> &bull; &copy; {new Date().getFullYear()} D-Code Tech Hub. All rights reserved.
          </p>
          <div className="footer-developer-credit">
            <span className="dev-credit-label">Designed &amp; Developed by</span>
            <span className="dev-credit-brand">Wisdom Tech IT Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
