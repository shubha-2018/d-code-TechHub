import React from 'react';
import { ArrowRight, Code, Database, Flame, FileCode } from 'lucide-react';
import MiniLaptop from './MiniLaptop';

export const COURSES_DATA = [
  {
    id: 'c-programming',
    type: 'c',
    title: 'C Programming',
    description: 'Programming fundamentals and problem solving.',
    duration: '6 Weeks',
    level: 'Beginner',
    projects: ['Calculator CLI', 'Student Management System', 'Memory Allocator'],
    topics: ['Data Types & Operators', 'Control Flow & Loops', 'Functions & Recursion', 'Pointers & Memory', 'Structures & Unions', 'File Handling'],
    iconType: 'c'
  },
  {
    id: 'cpp-programming',
    type: 'cpp',
    title: 'C++ Programming',
    description: 'C++ fundamentals and object-oriented programming.',
    duration: '8 Weeks',
    level: 'Beginner to Intermediate',
    projects: ['Banking System', 'Custom String Class', 'Mini Game Engine'],
    topics: ['OOP Principles (Classes/Objects)', 'Inheritance & Polymorphism', 'Templates & STL', 'Memory Management', 'Exception Handling', 'Modern C++20'],
    iconType: 'cpp'
  },
  {
    id: 'core-java',
    type: 'java',
    title: 'Core Java',
    description: 'Java fundamentals, OOP and practical projects.',
    duration: '8 Weeks',
    level: 'Beginner to Intermediate',
    projects: ['ATM Simulator', 'Employee Payroll System', 'Library Management'],
    topics: ['JVM Architecture', 'OOP Concepts', 'Collections Framework', 'Multithreading & Concurrency', 'Streams & Lambda', 'JDBC & File I/O'],
    iconType: 'java'
  },
  {
    id: 'python',
    type: 'python',
    title: 'Python',
    description: 'Python fundamentals, problem solving and projects.',
    duration: '7 Weeks',
    level: 'Beginner Friendly',
    projects: ['Web Scraper Bot', 'Automated Data Dashboard', 'AI Chatbot Integration'],
    topics: ['Python Syntax & Structures', 'Functional Programming', 'Modules & Packages', 'File & JSON Handling', 'NumPy & Pandas Intro', 'API Integration'],
    iconType: 'python'
  },
  {
    id: 'web-development',
    type: 'web',
    title: 'Web Development',
    description: 'HTML, CSS and JavaScript.',
    duration: '10 Weeks',
    level: 'Beginner to Pro',
    projects: ['Interactive Portfolio', 'E-commerce UI & Cart', 'Dynamic Task App'],
    topics: ['HTML5 Semantic Markup', 'CSS3 Flexbox & Grid', 'Responsive Mobile-First UI', 'JavaScript ES6+ & DOM', 'Async/Await & Fetch API', 'Git & Deployment'],
    iconType: 'web'
  },
  {
    id: 'data-structures',
    type: 'dsa',
    title: 'Data Structures',
    description: 'Data structures and algorithm fundamentals.',
    duration: '10 Weeks',
    level: 'Intermediate',
    projects: ['Shortest Path Visualizer', 'Expression Tree Solver', 'LRU Cache Design'],
    topics: ['Arrays, Strings & Pointers', 'Linked Lists & Stacks/Queues', 'Trees & Binary Search Trees', 'Heaps & Graphs', 'Sorting & Searching', 'Dynamic Programming Basics'],
    iconType: 'dsa'
  }
];

export default function Courses({ onJoinCourse, onViewDetails }) {
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
    <section id="courses" className="courses-section">
      <div className="courses-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-pill">OUR COURSES</span>
          <h2 className="section-main-heading">Popular Programming Courses</h2>
          <p className="section-sub-heading">
            Choose from our carefully designed programming and technology courses. Learn from basics
            to advanced with practical projects and live online classes.
          </p>
        </div>

        {/* 6 Course Cards Grid */}
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
  );
}
