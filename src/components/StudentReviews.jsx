import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star } from 'lucide-react';

export const REVIEWS_DATA = [
  {
    id: 1,
    title: 'Student Review - Java Course',
    subtitle: 'Real learning experience',
    studentName: 'Rahul Verma',
    college: 'Computer Science, 3rd Year',
    course: 'Core Java & OOP',
    rating: 5,
    duration: '2:18',
    image: '/images/review_1.jpg',
    quote:
      'D-Code Tech Hub transformed how I understand OOP and Multithreading. The mentor took time to explain every single doubt live in class, and building real console and GUI apps gave me huge confidence for my campus placements!'
  },
  {
    id: 2,
    title: 'Student Review - Python Course',
    subtitle: 'From basics to projects',
    studentName: 'Ananya Sharma',
    college: 'Information Technology, 2nd Year',
    course: 'Python Programming',
    rating: 5,
    duration: '1:56',
    image: '/images/review_2.jpg',
    quote:
      'I was completely new to coding and scared of programming logic. The step-by-step approach and daily coding practice made Python feel natural and fun. I built an automated scraper and web app by week 5!'
  },
  {
    id: 3,
    title: 'Student Review - Web Development',
    subtitle: 'Hands-on learning and support',
    studentName: 'Aditya Patel',
    college: 'BCA Final Year',
    course: 'Full Stack Web Dev',
    rating: 5,
    duration: '2:34',
    image: '/images/review_3.jpg',
    quote:
      'The best part about D-Code Tech Hub is live project reviews. Rather than recorded lectures, the mentor debugged our code live on Google Meet. I now have 3 solid projects deployed on my portfolio.'
  },
  {
    id: 4,
    title: 'Student Review - C Programming',
    subtitle: 'Concepts explained clearly',
    studentName: 'Sneha Kulkarni',
    college: 'Engineering 1st Year',
    course: 'C Programming & Logic',
    rating: 5,
    duration: '2:05',
    image: '/images/review_4.jpg',
    quote:
      'Pointers and memory allocation used to confuse me in college lectures. Here, the instructor visualised memory diagrams step-by-step. I topped my semester practical exam thanks to D-Code Tech Hub!'
  }
];

export default function StudentReviews({ onPlayReview, onYouTubeClick }) {
  const [activeDot, setActiveDot] = useState(0);

  const handlePrev = () => {
    setActiveDot((prev) => (prev > 0 ? prev - 1 : REVIEWS_DATA.length - 1));
  };

  const handleNext = () => {
    setActiveDot((prev) => (prev < REVIEWS_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        {/* Section Header with YouTube CTA */}
        <div className="reviews-header-row">
          <div className="reviews-header-text">
            <span className="section-pill">STUDENT REVIEWS</span>
            <h2 className="section-main-heading">What Our Students Say</h2>
            <p className="section-sub-heading">
              Watch real feedback from our students and hear about their learning experience at
              D-Code Tech Hub.
            </p>
          </div>

          <div className="reviews-header-cta">
            <button
              onClick={() => onYouTubeClick()}
              className="btn-youtube-cta"
            >
              <div className="youtube-play-icon">
                <Play size={14} fill="#ffffff" color="#ffffff" />
              </div>
              <span>Visit Our YouTube Channel</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Reviews Carousel Wrapper with Prev / Next Navigation */}
        <div className="reviews-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="carousel-nav-btn prev-btn"
            aria-label="Previous review"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards Grid */}
          <div className="reviews-grid">
            {REVIEWS_DATA.map((review, index) => (
              <div
                key={review.id}
                className={`review-card ${index === activeDot ? 'card-focused' : ''}`}
                onClick={() => onPlayReview(review)}
              >
                {/* Thumbnail Container */}
                <div className="review-thumbnail-box">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="review-thumbnail-img"
                  />
                  
                  {/* YouTube Style Red Glowing Play Button */}
                  <div className="play-button-overlay">
                    <div className="youtube-red-play">
                      <Play size={18} fill="#ffffff" color="#ffffff" />
                    </div>
                  </div>

                  {/* Timestamp / Video Duration Badge */}
                  <div className="video-duration-badge">
                    <span>{review.duration}</span>
                  </div>
                </div>

                {/* Video Info Bottom */}
                <div className="review-info-box">
                  <h4 className="review-card-title">{review.title}</h4>
                  <p className="review-card-sub">{review.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="carousel-nav-btn next-btn"
            aria-label="Next review"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Dots Pagination */}
        <div className="carousel-dots-row">
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              className={`carousel-dot ${idx === activeDot ? 'dot-active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
