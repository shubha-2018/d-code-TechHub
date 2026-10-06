import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import StudentReviews from './StudentReviews';
import AboutAndContact from './AboutAndContact';

export default function HomePage({
  onJoinClick,
  onNavigate,
  onJoinCourse,
  onViewCourseDetails,
  onPlayReview,
  onYouTubeClick,
  onNotify
}) {
  return (
    <div className="page-wrapper home-page-view">
      {/* 1. Master Edge-to-Edge Hero Banner */}
      <Hero onJoinClick={onJoinClick} />

      {/* 2. Popular Programming Courses Section */}
      <Courses
        onJoinCourse={onJoinCourse}
        onViewDetails={onViewCourseDetails}
      />

      {/* 3. Student Reviews Section */}
      <StudentReviews
        onPlayReview={onPlayReview}
        onYouTubeClick={onYouTubeClick}
      />

      {/* 4. About Us & Quick Contact Section */}
      <AboutAndContact onNotify={onNotify} />
    </div>
  );
}
