import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import MiniLaptop from './MiniLaptop';
import { COURSES_DATA } from './Courses';

export default function CoursesPage({ onJoinCourse, onViewDetails }) {

  const renderCourseIcon = (type) => {
    switch (type) {
      case 'c':
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 42 46" width="40" height="44" fill="none">
              <polygon points="21,0 42,11 42,35 21,46 0,35 0,11" fill="#0070f3" />
              <text x="21" y="30" fill="#ffffff" fontSize="22" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">C</text>
            </svg>
          </div>
        );
      case 'cpp':
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 46 46" width="42" height="42" fill="none">
              <polygon points="23,0 46,11 46,35 23,46 0,35 0,11" fill="#0070f3" />
              <text x="23" y="29" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">C++</text>
            </svg>
          </div>
        );
      case 'java':
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 38 40" width="38" height="40" fill="none">
              <path d="M12 5 Q15 0 18 3 Q21 7 24 2" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round"/>
              <path d="M16 9 Q19 5 22 8 Q25 12 28 6" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M6 18 L28 18 C28 27 25 30 17 30 C9 30 6 27 6 18 Z" fill="#ef4444"/>
              <path d="M28 20 C33 20 33 25 28 25" stroke="#ef4444" strokeWidth="2.6" fill="none"/>
              <path d="M3 33 Q17 35 31 33" stroke="#ef4444" strokeWidth="2.6" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 'python':
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 38 38" width="38" height="38" fill="none">
              <path d="M19 2 C9 2 9 6 9 6 L9 11 L19 11 L19 13 L5 13 C5 13 0 13 0 23 C0 32 4 32 4 32 L8 32 L8 26 C8 21 13 21 13 21 L27 21 C27 21 32 21 32 16 L32 7 C32 7 32 2 19 2 Z" fill="#387eb8" />
              <circle cx="12" cy="6.5" r="1.8" fill="#ffffff" />
              <path d="M19 36 C29 36 29 32 29 32 L29 27 L19 27 L19 25 L33 25 C33 25 38 25 38 15 C38 6 34 6 34 6 L30 6 L30 12 C30 17 25 17 25 17 L11 17 C11 17 6 17 6 22 L6 31 C6 31 6 36 19 36 Z" fill="#ffe052" />
              <circle cx="26" cy="31.5" r="1.8" fill="#ffffff" />
            </svg>
          </div>
        );
      case 'web':
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 38 42" width="36" height="40" fill="none">
              <polygon points="0,0 38,0 34,36 19,41 4,36" fill="#e44d26" />
              <polygon points="19,3 35,3 31,33 19,37" fill="#f16529" />
              <text x="19" y="28" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">5</text>
            </svg>
          </div>
        );
      case 'dsa':
      default:
        return (
          <div className="course-brand-icon">
            <svg viewBox="0 0 36 38" width="36" height="38" fill="none">
              <ellipse cx="18" cy="7" rx="15" ry="5.5" fill="#0070f3"/>
              <path d="M3 7 v6 c0 3 7 5.5 15 5.5 s15 -2.5 15 -5.5 v-6 Z" fill="#0284c7"/>
              <ellipse cx="18" cy="13" rx="15" ry="5.5" fill="#0070f3"/>
              <path d="M3 14 v6 c0 3 7 5.5 15 5.5 s15 -2.5 15 -5.5 v-6 Z" fill="#0284c7"/>
              <ellipse cx="18" cy="20" rx="15" ry="5.5" fill="#0070f3"/>
              <path d="M3 21 v6 c0 3 7 5.5 15 5.5 s15 -2.5 15 -5.5 v-6 Z" fill="#0284c7"/>
              <ellipse cx="18" cy="27" rx="15" ry="5.5" fill="#0070f3"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="page-wrapper courses-page-view">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="page-header-container">
          <span className="section-pill">ALL PROGRAMMING COURSES</span>
          <h1 className="page-main-title">Master Practical Coding & Technology</h1>
          <p className="page-main-sub">
            Learn from basics to advanced through live interactive classes, hands-on assignments,
            and real-world portfolio projects mentored by industry professionals.
          </p>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="courses-grid-section">
        <div className="courses-container">
          <div className="courses-grid">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="course-card"
                onClick={() => onViewDetails(course)}
              >
                {/* Left Column: Info & Button */}
                <div className="course-card-info">
                  <div>
                    <div className="course-card-top">
                      {renderCourseIcon(course.iconType)}
                      <h3 className="course-card-title">{course.title}</h3>
                    </div>

                    <p className="course-card-desc">{course.description}</p>
                  </div>

                  <div className="course-card-actions">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onJoinCourse(course.title);
                      }}
                      className="btn-course-join"
                    >
                      <span>Join Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Right Column: 3D Angled Perspective Laptop */}
                <div className="course-card-laptop">
                  <MiniLaptop courseType={course.type} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits Guarantee Banner */}
      <section className="courses-guarantee-section">
        <div className="guarantee-container">
          <h2 className="guarantee-heading">What You Get With Every Course</h2>
          <div className="guarantee-grid">
            <div className="guarantee-item">
              <CheckCircle2 size={24} className="guarantee-icon" />
              <div>
                <strong>Live Online Classes</strong>
                <p>Interactive sessions via Zoom/Google Meet with live coding and screen-sharing.</p>
              </div>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={24} className="guarantee-icon" />
              <div>
                <strong>1-on-1 Doubt Clearing</strong>
                <p>Daily doubt-clearing sessions to resolve bugs and conceptual questions.</p>
              </div>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={24} className="guarantee-icon" />
              <div>
                <strong>Portfolio Projects</strong>
                <p>Build real practical applications you can showcase on your resume & GitHub.</p>
              </div>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={24} className="guarantee-icon" />
              <div>
                <strong>Verified Certificate</strong>
                <p>Industry-recognized completion certificate with unique verifiable credential ID.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
