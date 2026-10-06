import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab = 'home', onNavigate, onJoinClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <div onClick={() => handleNavClick('home')} className="navbar-brand">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          <button
            onClick={() => handleNavClick('home')}
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('courses')}
            className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`}
          >
            Courses
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Right Action Button */}
        <div className="navbar-actions">
          <button onClick={() => onJoinClick()} className="btn-join-primary">
            <span>Join Now</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => handleNavClick('home')} className={`mobile-nav-link ${activeTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => handleNavClick('courses')} className={`mobile-nav-link ${activeTab === 'courses' ? 'active' : ''}`}>Courses</button>
          <button onClick={() => handleNavClick('reviews')} className={`mobile-nav-link ${activeTab === 'reviews' ? 'active' : ''}`}>Reviews</button>
          <button onClick={() => handleNavClick('about')} className={`mobile-nav-link ${activeTab === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => handleNavClick('contact')} className={`mobile-nav-link ${activeTab === 'contact' ? 'active' : ''}`}>Contact</button>
          <button onClick={() => { setMobileMenuOpen(false); onJoinClick(); }} className="btn-join-primary mobile-join-btn">
            <span>Join Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

