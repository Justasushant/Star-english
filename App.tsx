
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import CourseDetail from './pages/CourseDetail';
import Blog from './pages/Blog';
import { COURSES } from './constants';

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
    if (currentPage.startsWith('course-')) {
      const slug = currentPage.replace('course-', '');
      const course = COURSES.find(c => c.slug === slug);
      if (course) return <CourseDetail course={course} />;
    }

    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'about': return <About />;
      case 'daily-learning': return <Blog />; // Connected to the Blog page
      case 'results': return <Results />;
      case 'contact': return <Contact />;
      case 'enquiry': return <Enquiry />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#D4DE95] selection:text-[#3D4127]">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;