import React from 'react';
import { X, CheckCircle, Clock, BookOpen, Laptop, ArrowRight } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose, onEnrollCourse }) {
  if (!isOpen || !course) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog modal-course-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        <div className="course-modal-header">
          <span className="modal-badge">{course.level.toUpperCase()} LEVEL</span>
          <h3 className="course-modal-title">{course.title} Syllabus & Curriculum</h3>
          <p className="course-modal-desc">{course.description}</p>

          <div className="course-modal-stats">
            <div className="stat-pill">
              <Clock size={16} />
              <span>Duration: <strong>{course.duration}</strong></span>
            </div>
            <div className="stat-pill">
              <BookOpen size={16} />
              <span>Curriculum: <strong>6 In-depth Modules</strong></span>
            </div>
            <div className="stat-pill">
              <Laptop size={16} />
              <span>Projects: <strong>{course.projects.length} Real-world Builds</strong></span>
            </div>
          </div>
        </div>

        <div className="course-modal-body">
          {/* Topics covered */}
          <div className="modal-section-block">
            <h4 className="block-title">Key Concepts & Modules Covered</h4>
            <div className="topics-grid">
              {course.topics.map((topic, i) => (
                <div key={i} className="topic-card">
                  <div className="topic-num">{i + 1}</div>
                  <div className="topic-content">
                    <h5>Module {i + 1}</h5>
                    <p>{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hands-on projects */}
          <div className="modal-section-block">
            <h4 className="block-title">Portfolio Projects You Will Build</h4>
            <div className="projects-list">
              {course.projects.map((proj, i) => (
                <div key={i} className="project-tag">
                  <CheckCircle size={16} color="#0284c7" />
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="course-modal-footer">
          <button
            onClick={() => {
              onClose();
              onEnrollCourse(course.title);
            }}
            className="btn-modal-enroll"
          >
            <span>Enroll in {course.title} Now</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
