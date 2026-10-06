import React from 'react';
import { Play, ArrowRight, Star } from 'lucide-react';
import { REVIEWS_DATA } from './StudentReviews';

export default function ReviewsPage({ onPlayReview, onYouTubeClick }) {
  const WRITTEN_TESTIMONIALS = [
    {
      name: 'Rohan Deshmukh',
      role: 'Placed at TCS • Core Java Student',
      rating: 5,
      text: 'The OOP and Collections coaching at D-Code Tech Hub is top notch. The mentor gave live feedback on my code architecture during classes which helped me crack technical rounds easily.'
    },
    {
      name: 'Pooja Nair',
      role: 'B.Tech IT 3rd Year • Python Student',
      rating: 5,
      text: 'I started with zero coding experience. Today I build automation scripts and clean Python projects. The daily assignments and personal mentoring gave me unbelievable confidence.'
    },
    {
      name: 'Amitabh Joshi',
      role: 'Full Stack Web Dev Batch',
      rating: 5,
      text: 'Unlike pre-recorded video sites, here you code together live on Google Meet. The instructor fixes errors directly in real time. My portfolio website got me 2 freelance gigs already!'
    },
    {
      name: 'Kavita Sengupta',
      role: 'MCA Student • DSA & C++ Batch',
      rating: 5,
      text: 'Trees, Graphs, and Dynamic Programming were explained with clear step-by-step memory visualisations. Highly recommend D-Code Tech Hub for anyone serious about engineering placements!'
    }
  ];

  return (
    <div className="page-wrapper reviews-page-view">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="page-header-container">
          <span className="section-pill">STUDENT SUCCESS STORIES</span>
          <h1 className="page-main-title">What Our Students Say</h1>
          <p className="page-main-sub">
            Watch real video reviews and read testimonials from students who built real-world coding
            confidence and launched their tech careers with D-Code Tech Hub.
          </p>
        </div>
      </section>

      {/* YouTube Channel Spotlight Banner */}
      <section className="reviews-youtube-spotlight">
        <div className="youtube-spotlight-box">
          <div className="spotlight-left">
            <div className="youtube-big-badge">
              <Play size={22} fill="#ffffff" color="#ffffff" />
            </div>
            <div>
              <h3 className="spotlight-title">Official D-Code Tech Hub YouTube Channel</h3>
              <p className="spotlight-desc">
                Free coding tutorials, live project walkthroughs, student interview prep, and tech guidance.
              </p>
            </div>
          </div>
          <button onClick={() => onYouTubeClick()} className="btn-youtube-cta">
            <div className="youtube-play-icon">
              <Play size={14} fill="#ffffff" color="#ffffff" />
            </div>
            <span>Visit Our YouTube Channel</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Video Reviews Grid */}
      <section className="reviews-video-section">
        <div className="reviews-container">
          <div className="section-header-left">
            <h2 className="section-sub-title">Featured Video Testimonials</h2>
            <p className="section-sub-desc">Click any card to watch the video interview and learning journey.</p>
          </div>

          <div className="reviews-grid">
            {REVIEWS_DATA.map((review) => (
              <div
                key={review.id}
                className="review-card"
                onClick={() => onPlayReview(review)}
              >
                {/* Thumbnail Container */}
                <div className="review-thumbnail-box">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="review-thumbnail-img"
                  />

                  {/* YouTube Red Play Button */}
                  <div className="play-button-overlay">
                    <div className="youtube-red-play">
                      <Play size={18} fill="#ffffff" color="#ffffff" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="video-duration-badge">
                    <span>{review.duration}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="review-info-box">
                  <h4 className="review-card-title">{review.title}</h4>
                  <p className="review-card-sub">{review.subtitle}</p>
                  <p className="review-student-meta">{review.studentName} • {review.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Student Reviews Grid */}
      <section className="written-reviews-section">
        <div className="reviews-container">
          <div className="section-header-left">
            <h2 className="section-sub-title">More Verified Student Feedback</h2>
            <p className="section-sub-desc">Hear how our live interactive approach helps students succeed.</p>
          </div>

          <div className="written-reviews-grid">
            {WRITTEN_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="written-review-card">
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
