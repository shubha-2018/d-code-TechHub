import React from 'react';
import Logo from './Logo';

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
            {/* YouTube */}
            <button
              onClick={() => onYouTubeClick && onYouTubeClick()}
              className="social-btn social-youtube"
              aria-label="YouTube Channel"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.582 6.186a2.766 2.766 0 0 0-1.945-1.96C17.92 3.7 12 3.7 12 3.7s-5.92 0-7.637.526A2.766 2.766 0 0 0 2.418 6.186C1.9 7.915 1.9 11.5 1.9 11.5s0 3.585.518 5.314a2.766 2.766 0 0 0 1.945 1.96c1.717.526 7.637.526 7.637.526s5.92 0 7.637-.526a2.766 2.766 0 0 0 1.945-1.96c.518-1.729.518-5.314.518-5.314s0-3.585-.518-5.314zM10 14.5V8.5L15.2 11.5 10 14.5z"
                />
              </svg>
            </button>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-instagram"
              aria-label="Instagram Page"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" stroke="none"></circle>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-linkedin"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} D-Code Tech Hub. All rights reserved. Empowering next-generation software engineers.</p>
        </div>
      </div>
    </footer>
  );
}
