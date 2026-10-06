import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Star, CheckCircle } from 'lucide-react';

export default function VideoModal({ review, isOpen, onClose }) {
  if (!isOpen || !review) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog modal-video-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close video player">
          <X size={20} />
        </button>

        {/* Video Player Header */}
        <div className="video-player-header">
          <div className="video-badge-tag">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#ef4444">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>VERIFIED STUDENT TESTIMONIAL</span>
          </div>
          <h3 className="video-player-title">{review.title}</h3>
        </div>

        {/* Simulated Video Player Screen */}
        <div className="video-player-screen">
          <img
            src={review.image}
            alt={review.studentName}
            className={`video-player-media ${isPlaying ? 'media-playing' : ''}`}
          />

          {/* Center Play/Pause Overlay */}
          <div className="video-screen-center-control" onClick={() => setIsPlaying(!isPlaying)}>
            <div className={`video-play-disc ${isPlaying ? 'disc-playing' : ''}`}>
              {isPlaying ? <Pause size={28} /> : <Play size={28} fill="#ffffff" />}
            </div>
          </div>

          {/* Bottom Video Progress Bar & Controls */}
          <div className="video-controls-bar">
            <div className="video-progress-track">
              <div className={`video-progress-fill ${isPlaying ? 'animate-progress' : ''}`}></div>
            </div>

            <div className="video-controls-bottom">
              <div className="video-controls-left">
                <button
                  className="v-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#fff" />}
                </button>
                <button
                  className="v-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <span className="v-time">0:45 / {review.duration}</span>
              </div>

              <div className="video-controls-right">
                <span className="hd-badge">1080p HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Metadata & Student Story */}
        <div className="video-story-section">
          <div className="student-profile-row">
            <div className="student-avatar-circle">
              <span>{review.studentName.charAt(0)}</span>
            </div>
            <div>
              <div className="student-name-row">
                <h4>{review.studentName}</h4>
                <div className="student-verified-badge">
                  <CheckCircle size={14} color="#10b981" />
                  <span>Enrolled Student</span>
                </div>
              </div>
              <p className="student-college-text">
                {review.college} • <em>{review.course}</em>
              </p>
            </div>

            <div className="student-rating-box">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="rating-num">5.0 / 5.0</span>
            </div>
          </div>

          <blockquote className="student-quote-text">
            "{review.quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}
