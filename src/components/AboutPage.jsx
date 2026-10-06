import React from 'react';
import { BookOpen, Video, Code2, Rocket, CheckCircle2, ArrowRight, ShieldCheck, Users, Award, Laptop } from 'lucide-react';

export default function AboutPage({ onJoinClick, onNavigate }) {
  const VALUES = [
    {
      icon: <Users size={28} className="value-icon-blue" />,
      title: 'Small Interactive Batches',
      desc: 'We limit class sizes so every student gets personal attention and can ask doubts without hesitation.'
    },
    {
      icon: <Laptop size={28} className="value-icon-blue" />,
      title: 'Live Hands-On Coding',
      desc: 'No boring lectures or pre-recorded slides. We code line by line with live screen sharing on every topic.'
    },
    {
      icon: <ShieldCheck size={28} className="value-icon-blue" />,
      title: 'Zero-Prerequisite Friendly',
      desc: 'Whether you are from non-CS, school, or 1st year engineering, concepts are taught from absolute ground zero.'
    },
    {
      icon: <Award size={28} className="value-icon-blue" />,
      title: 'Portfolio & Career Ready',
      desc: 'Build verifiable projects that demonstrate your practical skills during job and internship interviews.'
    }
  ];

  return (
    <div className="page-wrapper about-page-view">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="page-header-container">
          <span className="section-pill">ABOUT US</span>
          <h1 className="page-main-title">About D-Code Tech Hub</h1>
          <p className="page-main-sub">
            Empowering students and beginners to master real-world programming fundamentals through
            live interactive mentorship and project-based learning.
          </p>
        </div>
      </section>

      {/* Main Story & Visual Section */}
      <section className="about-main-story-section">
        <div className="about-story-container">
          {/* Left Text Column */}
          <div className="story-text-column">
            <h2 className="story-title">We Believe In Learning By Doing</h2>
            
            <p className="about-paragraph">
              D-Code Tech Hub was founded with a singular mission: to eliminate the fear of coding
              and give students practical, real-world skills that colleges and traditional textbooks
              often fail to teach.
            </p>

            <p className="about-paragraph">
              Our curriculum bridges the gap between academic theory and real-world software engineering.
              From memory allocation and pointers in C/C++ to building full-stack web applications and
              solving complex Data Structure algorithms, every course focuses on practical implementation.
            </p>

            {/* 4 Pillars Grid */}
            <div className="about-pillars-grid">
              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <BookOpen size={26} className="pillar-icon" />
                </div>
                <span className="pillar-title">Concept<br />Based Learning</span>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Video size={26} className="pillar-icon" />
                </div>
                <span className="pillar-title">Live<br />Classes</span>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Code2 size={26} className="pillar-icon" />
                </div>
                <span className="pillar-title">Practical<br />Coding</span>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Rocket size={26} className="pillar-icon" />
                </div>
                <span className="pillar-title">Project-Based<br />Learning</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="story-visual-column">
            <div className="about-center-img-frame">
              <img
                src="/images/about_center_student.png?v=hd3"
                alt="Student learning coding at D-Code Tech Hub"
                className="about-center-student-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Values Section */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="section-header-center">
            <span className="section-pill">OUR METHODOLOGY</span>
            <h2 className="section-main-heading">Why Students Choose D-Code Tech Hub</h2>
            <p className="section-sub-heading">
              A structured, mentor-led pathway designed to help you succeed from your very first line of code.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-box">{val.icon}</div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="about-cta-section">
        <div className="about-cta-box">
          <div className="cta-text">
            <h2>Ready to Start Your Coding Journey?</h2>
            <p>Book a free live demo class with our lead instructor and see the difference.</p>
          </div>
          <div className="cta-actions">
            <button onClick={() => onJoinClick()} className="btn-join-primary">
              <span>Join Free Demo Class</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('courses')} className="btn-hero-secondary">
              <span>View All Courses</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
