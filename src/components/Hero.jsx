import React from 'react';
import { ArrowRight, Video, Code2, GraduationCap } from 'lucide-react';

export default function Hero({ onJoinClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-fullscreen-section">
      {/* Full-width Hero Banner Container */}
      <div className="hero-fullscreen-banner-wrapper">
        <div className="hero-banner-media-container">
          <picture>
            <source srcSet="/images/hero_banner_clean.png?v=super_sharp_2560" media="(min-width: 640px)" />
            <img
              src="/images/hero_banner_clean.png?v=super_sharp_2560"
              alt="D-Code Tech Hub - Learn Programming. Build Projects. Grow Your Skills."
              className="hero-fullscreen-img"
              loading="eager"
              fetchpriority="high"
            />
          </picture>

          {/* Interactive Clickable Hotspot directly over the 'Join Now →' Button */}
          <button
            onClick={() => onJoinClick()}
            className="hero-hotspot-join-btn"
            title="Join Now - Reserve Free Demo Class"
            aria-label="Join Now - Reserve Free Demo Class"
          >
            <span className="hotspot-ripple"></span>
          </button>

          {/* Interactive Clickable Hotspot over 'Live Online Classes' */}
          <button
            onClick={() => onJoinClick()}
            className="hero-hotspot-feature feature-live"
            title="Live Online Classes (Zoom / Google Meet)"
            aria-label="Live Online Classes"
          />

          {/* Interactive Clickable Hotspot over 'Practical Learning' */}
          <button
            onClick={() => scrollTo('courses')}
            className="hero-hotspot-feature feature-practical"
            title="Practical Learning - Hands-on coding (Explore Courses)"
            aria-label="Practical Learning"
          />

          {/* Interactive Clickable Hotspot over 'Beginner Friendly' */}
          <button
            onClick={() => onJoinClick()}
            className="hero-hotspot-feature feature-beginner"
            title="Beginner Friendly - Step by step guidance"
            aria-label="Beginner Friendly"
          />
        </div>
      </div>

      {/* Responsive Fallback/Companion Section for Mobile & Small Tablets */}
      <div className="hero-mobile-content">
        <div className="hero-eyebrow">
          <span>Code • Build • Innovate</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-dark">Learn Programming.</span>
          <span className="hero-title-dark">Build Projects.</span>
          <span className="hero-title-blue">Grow Your Skills.</span>
        </h1>

        <p className="hero-description">
          D-Code Tech Hub is a modern programming and technology learning platform focused on
          building strong fundamentals, practical coding skills, and real-world project experience
          through live online classes.
        </p>

        <div className="hero-cta-group">
          <button onClick={() => onJoinClick()} className="btn-hero-primary">
            <span>Join Now</span>
            <ArrowRight size={18} className="hero-btn-icon" />
          </button>
          <button onClick={() => scrollTo('courses')} className="btn-hero-secondary">
            <span>Explore Courses</span>
          </button>
        </div>

        {/* Feature Badges */}
        <div className="hero-features-row">
          <div className="hero-feature-item">
            <div className="feature-icon-wrapper">
              <Video size={22} className="feature-icon-blue" />
            </div>
            <div className="feature-text">
              <strong>Live Online Classes</strong>
              <span>(Zoom / Google Meet)</span>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="feature-icon-wrapper">
              <Code2 size={22} className="feature-icon-blue" />
            </div>
            <div className="feature-text">
              <strong>Practical Learning</strong>
              <span>Hands-on coding</span>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="feature-icon-wrapper">
              <GraduationCap size={22} className="feature-icon-blue" />
            </div>
            <div className="feature-text">
              <strong>Beginner Friendly</strong>
              <span>Step by step guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
