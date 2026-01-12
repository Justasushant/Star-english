
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageSkeleton from './components/PageSkeleton';
import { COURSES } from './constants';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Results = React.lazy(() => import('./pages/Results'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Enquiry = React.lazy(() => import('./pages/Enquiry'));
const CourseDetail = React.lazy(() => import('./pages/CourseDetail'));
const DailyLearning = React.lazy(() => import('./pages/DailyLearning'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setCurrentPage(hash);
      else setCurrentPage('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    // Dynamic Course Route
    if (currentPage.startsWith('course-')) {
      const slug = currentPage.replace('course-', '');
      const course = COURSES.find(c => c.slug === slug);
      if (course) return <CourseDetail course={course} />;
    }

    // Dynamic Learning Hub Routes
    if (currentPage.startsWith('learning-')) {
      const type = currentPage.replace('learning-', '') as 'articles' | 'blogs' | 'podcasts' | 'tips';
      return <DailyLearning type={type} />;
    }

    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'about': return <About />;
      case 'results': return <Results />;
      case 'contact': return <Contact />;
      case 'enquiry': return <Enquiry />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden selection:bg-[#202a5d] selection:text-white">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        <Suspense fallback={<PageSkeleton />}>
          {renderPage()}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
