import React from 'react';
import {
  BookOpen,
  Video,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Laptop,
  Target,
  Compass,
  Quote,
  Sparkles,
  HeartHandshake,
  GraduationCap
} from 'lucide-react';

export default function AboutPage({ onJoinClick, onNavigate }) {
  const PILLARS = [
    {
      icon: <BookOpen size={26} className="pillar-icon" />,
      title: 'Learn with Clarity',
      subtitle: 'Strong Fundamentals',
      desc: 'Master core concepts step-by-step from absolute ground zero without confusing jargon.'
    },
    {
      icon: <Code2 size={26} className="pillar-icon" />,
      title: 'Solve with Logic',
      subtitle: 'Problem-Solving Mindset',
      desc: 'Develop analytical thinking, algorithmic logic, and confidence to tackle any programming puzzle.'
    },
    {
      icon: <Rocket size={26} className="pillar-icon" />,
      title: 'Build through Practice',
      subtitle: 'Hands-on Real Projects',
      desc: 'Move beyond theory into writing real code, exercises, and deployable software applications.'
    },
    {
      icon: <HeartHandshake size={26} className="pillar-icon" />,
      title: 'Grow with Confidence',
      subtitle: 'Mentorship & Support',
      desc: 'Personal attention, continuous doubt solving, and friendly career guidance for IT readiness.'
    }
  ];

  const COURSES_LIST = [
    { name: 'C Programming', desc: 'Programming fundamentals, logic building, memory & pointers' },
    { name: 'C++ Programming', desc: 'Object-oriented programming, STL, memory management & algorithms' },
    { name: 'Core Java', desc: 'Java fundamentals, OOP principles, collections & practical console/GUI apps' },
    { name: 'Python', desc: 'Python syntax, problem solving, automation, data handling & projects' },
    { name: 'Web Technology', desc: 'HTML5, CSS3, JavaScript ES6+, responsive design & live portfolio apps' }
  ];

  return (
    <div className="page-wrapper about-page-view">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="page-header-container">
          <span className="section-pill">ABOUT US</span>
          <h1 className="page-main-title">About D-Code Tech Hub</h1>
          <p className="page-main-motto">
            <span className="motto-word">Learn.</span>
            <span className="motto-word">Code.</span>
            <span className="motto-word">Build.</span>
            <span className="motto-word highlight">Grow.</span>
          </p>
          <p className="page-main-sub">
            A technology-focused learning institute committed to making quality technical education simple, practical, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Main Institute Story Section */}
      <section className="about-main-story-section">
        <div className="about-story-container">
          {/* Left Text Column */}
          <div className="story-text-column">
            <span className="story-eyebrow">OUR COMMITMENT</span>
            <h2 className="story-title">Making Quality Technical Education Simple, Practical &amp; Accessible</h2>
            
            <p className="about-paragraph highlight-paragraph">
              <strong>D-CODE TECH HUB</strong> is a technology-focused learning institute committed to making quality technical education simple, practical, and accessible. The institute helps learners build strong programming fundamentals through structured, hands-on learning and practical experience.
            </p>

            <p className="about-paragraph">
              Our courses are designed to make programming easy to understand while developing problem-solving skills, logical thinking, practical programming abilities, and confidence. Learners are encouraged to move beyond theoretical concepts and apply their knowledge through coding exercises, real projects, and practical work.
            </p>

            <p className="about-paragraph">
              At D-CODE TECH HUB, we provide a beginner-friendly and supportive learning environment, with structured curriculum, personal attention, doubt-solving support, mentorship, and industry-relevant skills. Our approach focuses on <em>learning with clarity, solving problems with logic, building through practice, and growing with confidence</em>.
            </p>

            {/* Vision & Mission Cards */}
            <div className="vision-mission-grid">
              <div className="vision-card">
                <div className="vm-header">
                  <div className="vm-icon-box vision-icon-box">
                    <Compass size={22} />
                  </div>
                  <h3 className="vm-title">Our Vision</h3>
                </div>
                <p className="vm-text">
                  To make quality technology education accessible to everyone, regardless of educational background or prior coding experience.
                </p>
              </div>

              <div className="mission-card">
                <div className="vm-header">
                  <div className="vm-icon-box mission-icon-box">
                    <Target size={22} />
                  </div>
                  <h3 className="vm-title">Our Mission</h3>
                </div>
                <p className="vm-text">
                  To build strong fundamentals, develop problem-solving skills, and provide practical programming experience through live mentor-led guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="story-visual-column">
            <div className="about-center-img-frame">
              <img
                src="/images/about_center_student.png?v=hd3"
                alt="Student learning programming at D-Code Tech Hub"
                className="about-center-student-img"
              />
            </div>

            {/* Tagline Badge */}
            <div className="about-tagline-badge">
              <Sparkles size={18} className="tagline-star" />
              <span>Learn • Code • Build • Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Methodology Section */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="section-header-center">
            <span className="section-pill">OUR FOUR PILLARS</span>
            <h2 className="section-main-heading">The D-Code Learning Approach</h2>
            <p className="section-sub-heading">
              Our four-step methodology ensures learners develop clear concepts, solid logic, and tangible project experience.
            </p>
          </div>

          <div className="values-grid">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-box">{pillar.icon}</div>
                <h3 className="value-card-title">{pillar.title}</h3>
                <span className="value-card-subtitle">{pillar.subtitle}</span>
                <p className="value-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Founder Section */}
      <section className="founder-section" id="founder">
        <div className="founder-container">
          <div className="section-header-center">
            <span className="section-pill">LEADERSHIP &amp; MENTORSHIP</span>
            <h2 className="section-main-heading">About The Founder</h2>
            <p className="section-sub-heading">
              Meet the visionary mentor dedicated to empowering learners through personal attention and practical coding.
            </p>
          </div>

          <div className="founder-card-wrapper">
            {/* Left Photo & Profile Card */}
            <div className="founder-visual-card">
              <div className="founder-image-frame">
                <img
                  src="/images/founder_dipali_dube.png?v=real_founder"
                  alt="Prof. Dipali Dube - Founder & Trainer of D-Code Tech Hub"
                  className="founder-portrait-img"
                />
              </div>
              <div className="founder-experience-tag-wrapper">
                <span className="founder-experience-tag">
                  <Award size={15} />
                  <span>4+ Years Coaching Experience</span>
                </span>
              </div>

              <div className="founder-quick-bio">
                <h3 className="founder-name">Prof. Dipali Dube</h3>
                <p className="founder-role">Founder &amp; Trainer, D-CODE TECH HUB</p>
                <p className="founder-sub-role">Dipali Sureshrao Dube</p>
              </div>

              {/* Founder Key Badges */}
              <div className="founder-highlights-list">
                <div className="founder-highlight-item">
                  <CheckCircle2 size={16} className="highlight-check" />
                  <span>4+ Years Programming Coaching</span>
                </div>
                <div className="founder-highlight-item">
                  <CheckCircle2 size={16} className="highlight-check" />
                  <span>Hands-on Live Project Mentoring</span>
                </div>
                <div className="founder-highlight-item">
                  <CheckCircle2 size={16} className="highlight-check" />
                  <span>Personal Attention &amp; Career Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Story & Quote Column */}
            <div className="founder-text-column">
              <div className="founder-story-badge">
                <GraduationCap size={16} />
                <span>Passionate Educator &amp; Tech Mentor</span>
              </div>

              <h3 className="founder-story-heading">Empowering Every Student's Journey in IT</h3>

              <p className="founder-paragraph">
                <strong>Dipali Dube</strong> is the Founder &amp; Trainer of <strong>D-CODE TECH HUB</strong>, passionate about teaching and helping students build real-world skills in programming and web development. With a focus on making technical education simple, practical, and career-oriented, she aims to help every student confidently begin their journey in the IT industry.
              </p>

              <p className="founder-paragraph">
                With <strong>4+ years of teaching and coaching experience</strong> in programming and web development, Dipali has helped many students learn, practice, and grow in the field of technology. Her teaching approach combines personal attention, hands-on learning, practical projects, career guidance, and friendly mentoring.
              </p>

              <p className="founder-paragraph">
                She believes that with the right guidance, practice, and support, anyone can learn technology and create a better future for themselves. Her vision is to create a positive and supportive learning environment where students can develop technical skills, confidence, and career readiness.
              </p>

              {/* Quote Box */}
              <div className="founder-quote-box">
                <Quote size={32} className="quote-mark" />
                <blockquote className="founder-quote-text">
                  "I believe that with the right guidance, practice and support, anyone can learn technology and create a better future for themselves."
                </blockquote>
                <div className="founder-quote-author">
                  <strong>— Prof. Dipali Dube</strong>
                  <span>Founder &amp; Trainer, D-Code Tech Hub</span>
                </div>
              </div>

              <div className="founder-cta-row">
                <button onClick={() => onJoinClick()} className="btn-join-primary">
                  <span>Book Free Demo Class with Founder</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('contact')} className="btn-hero-secondary">
                  <span>Contact Our Office</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered Overview */}
      <section className="courses-offered-overview">
        <div className="about-values-container">
          <div className="section-header-center">
            <span className="section-pill">CURRICULUM</span>
            <h2 className="section-main-heading">What We Teach at D-Code Tech Hub</h2>
            <p className="section-sub-heading">
              We offer structured training in C, C++, Java, Python, and Web Technology, covering programming fundamentals, OOP, problem solving, and practical applications.
            </p>
          </div>

          <div className="courses-overview-grid">
            {COURSES_LIST.map((c, i) => (
              <div key={i} className="course-overview-card" onClick={() => onNavigate('courses')}>
                <div className="course-overview-badge">{c.name.split(' ')[0]}</div>
                <h3 className="course-overview-title">{c.name}</h3>
                <p className="course-overview-desc">{c.desc}</p>
                <span className="course-overview-link">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="about-cta-section">
        <div className="about-cta-box">
          <div className="cta-text">
            <h2>Ready to Begin Your IT Journey?</h2>
            <p>Join D-Code Tech Hub and start building real programming confidence today.</p>
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

