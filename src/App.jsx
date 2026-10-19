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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';
import { getQuickWhatsAppJoinUrl } from './services/joinNowBackend';
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
  const [selectedContactCourse, setSelectedContactCourse] = useState('C Programming');

  const scrollToContactForm = () => {
    const doScroll = () => {
      const card =
        document.getElementById('contact-form-card') ||
        document.getElementById('contact-form') ||
        document.getElementById('contact-form-section');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add subtle attention glow
        card.classList.add('highlight-join-form');
        setTimeout(() => {
          card.classList.remove('highlight-join-form');
        }, 1800);

        // Focus name input field
        const nameInput = document.getElementById('contact-name');
        if (nameInput) {
          nameInput.focus();
        }
        return true;
      }
      return false;
    };

    if (!doScroll()) {
      setTimeout(doScroll, 80);
      setTimeout(doScroll, 200);
      setTimeout(doScroll, 400);
    } else {
      setTimeout(doScroll, 80);
    }
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const cleanHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().split('?')[0];
      if (cleanHash === 'contact' || cleanHash === 'contact-form' || cleanHash === 'contact-us') {
        setActiveTab('contact');
        if (cleanHash === 'contact-form') {
          setTimeout(scrollToContactForm, 100);
        }
      } else if (VALID_TABS.includes(cleanHash)) {
        setActiveTab(cleanHash);
      } else if (!cleanHash) {
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

  // Directly open WhatsApp with a pre-filled message when clicking "Join Now"
  const handleJoinClick = (courseName = '') => {
    const url = getQuickWhatsAppJoinUrl(courseName);
    window.open(url, '_blank', 'noopener,noreferrer');
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
        onJoinClick={() => handleJoinClick()}
      />

      {/* Main Tab View */}
      <main>
        {activeTab === 'home' && (
          <HomePage
            onJoinClick={() => handleJoinClick()}
            onNavigate={handleNavigate}
            onJoinCourse={(courseTitle) => handleJoinClick(courseTitle)}
            onViewCourseDetails={handleViewCourseDetails}
            onPlayReview={handlePlayReview}
            onYouTubeClick={handleYouTubeClick}
            onNotify={showToast}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage
            onJoinCourse={(courseTitle) => handleJoinClick(courseTitle)}
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
            onJoinClick={() => handleJoinClick()}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            initialCourse={selectedContactCourse}
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
          showToast(`✅ Join request for ${studentName} (${course}) forwarded to WhatsApp (+91 9284316487)!`);
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
        onEnrollCourse={(courseTitle) => handleJoinClick(courseTitle)}
      />

      {/* Floating Join Now WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Floating Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}

export default App;
