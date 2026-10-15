import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import ReviewsPage from './components/ReviewsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import EnrollModal from './components/EnrollModal';
import VideoModal from './components/VideoModal';
import CourseModal from './components/CourseModal';
import Toast from './components/Toast';
import './App.css';

const VALID_TABS = ['home', 'courses', 'reviews', 'about', 'contact'];

function getInitialTab() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (VALID_TABS.includes(hash)) {
    return hash;
  }
  return 'home';
}

function App() {
  // Navigation & Page state
  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('home');
      }
    };

    // Set page/tab title to D-Code Tech Hub
    document.title = 'D-Code Tech Hub | Learn. Code. Build. Grow.';

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab) => {
    const targetTab = VALID_TABS.includes(tab) ? tab : 'home';
    setActiveTab(targetTab);
    window.location.hash = targetTab === 'home' ? '#/' : `#/${targetTab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal states
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState('');

  const [activeReviewForVideo, setActiveReviewForVideo] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [activeCourseDetails, setActiveCourseDetails] = useState(null);
  const [courseModalOpen, setCourseModalOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  const handleOpenEnroll = (courseName = '') => {
    setSelectedCourseForEnroll(courseName || 'Core Java');
    setEnrollModalOpen(true);
  };

  const handlePlayReview = (review) => {
    setActiveReviewForVideo(review);
    setVideoModalOpen(true);
  };

  const handleViewCourseDetails = (course) => {
    setActiveCourseDetails(course);
    setCourseModalOpen(true);
  };

  const handleYouTubeClick = () => {
    showToast('Opening official D-Code Tech Hub YouTube Channel (@dcodetechhub)...');
    window.open('https://www.youtube.com/@dcodetechhub', '_blank');
  };

  return (
    <div className="app-layout">
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onJoinClick={() => handleOpenEnroll()}
      />

      {/* Main Tab View */}
      <main>
        {activeTab === 'home' && (
          <HomePage
            onJoinClick={() => handleOpenEnroll()}
            onNavigate={handleNavigate}
            onJoinCourse={(courseTitle) => handleOpenEnroll(courseTitle)}
            onViewCourseDetails={handleViewCourseDetails}
            onPlayReview={handlePlayReview}
            onYouTubeClick={handleYouTubeClick}
            onNotify={showToast}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage
            onJoinCourse={(courseTitle) => handleOpenEnroll(courseTitle)}
            onViewDetails={handleViewCourseDetails}
          />
        )}

        {activeTab === 'reviews' && (
          <ReviewsPage
            onPlayReview={handlePlayReview}
            onYouTubeClick={handleYouTubeClick}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onJoinClick={() => handleOpenEnroll()}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            onNotify={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onYouTubeClick={handleYouTubeClick}
        onPrivacyClick={() => showToast('D-Code Tech Hub: We respect your privacy and protect all student data.')}
        onTermsClick={() => showToast('Terms: Live class recordings and LMS access valid for 1 full year.')}
      />

      {/* Interactive Modals */}
      <EnrollModal
        isOpen={enrollModalOpen}
        selectedCourse={selectedCourseForEnroll}
        onClose={() => setEnrollModalOpen(false)}
        onConfirm={(studentName, course) => {
          showToast(`Seat reserved for ${studentName} in ${course}! Demo details sent.`);
        }}
      />

      <VideoModal
        isOpen={videoModalOpen}
        review={activeReviewForVideo}
        onClose={() => setVideoModalOpen(false)}
      />

      <CourseModal
        isOpen={courseModalOpen}
        course={activeCourseDetails}
        onClose={() => setCourseModalOpen(false)}
        onEnrollCourse={(courseTitle) => handleOpenEnroll(courseTitle)}
      />

      {/* Floating Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}

export default App;
