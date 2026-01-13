
import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
  };

  const isHeroPage = currentPage === 'home' || currentPage.startsWith('course-');
  const showTransparent = isHeroPage && !isScrolled;
  
  const textColorClass = showTransparent ? 'text-white' : 'text-[#202a5d]';
  const activeColorClass = showTransparent ? 'text-[#a5b4fc]' : 'text-[#3d4ba1]';
  const activeBarClass = showTransparent ? 'bg-[#a5b4fc]' : 'bg-[#202a5d]';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showTransparent ? 'bg-transparent py-4' : 'bg-white/95 backdrop-blur-md shadow-sm py-2'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="cursor-pointer flex items-center group"
          onClick={() => handleLinkClick('home')}
        >
          <img 
            src="https://i.postimg.cc/mg95522g/Badge_2_removebg_preview.png" 
            alt="Star English Logo" 
            className="h-12 md:h-16 transition-all duration-300"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button
            onClick={() => handleLinkClick('home')}
            className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#3d4ba1] relative py-1 ${
              currentPage === 'home' ? activeColorClass : textColorClass
            }`}
          >
            Home
            {currentPage === 'home' && <span className={`absolute bottom-0 left-0 w-full h-0.5 ${activeBarClass}`}></span>}
          </button>

          {/* Courses Dropdown */}
          <div 
            className="relative h-full py-2"
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
          >
            <button
              className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#3d4ba1] flex items-center space-x-2 ${
                currentPage.startsWith('course-') ? activeColorClass : textColorClass
              }`}
            >
              <span>Courses</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCoursesDropdownOpen && <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>}

            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white shadow-2xl rounded-2xl py-3 mt-2 border border-[#202a5d]/10 overflow-hidden transition-all duration-300 origin-top ${isCoursesDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
              <div className="px-4 py-2 border-b border-gray-50 mb-2">
                <p className="text-[9px] font-black text-[#202a5d] uppercase tracking-[0.3em]">Signature Programs</p>
              </div>
              {COURSES.map((course) => (
                <button
                  key={course.slug}
                  onClick={() => handleLinkClick(`course-${course.slug}`)}
                  className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#202a5d] hover:bg-[#f5f8ff] hover:text-[#3d4ba1] transition-colors flex items-center justify-between group"
                >
                  <span>{course.title}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#3d4ba1] relative py-1 ${
              currentPage === 'contact' ? activeColorClass : textColorClass
            }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#3d4ba1] relative py-1 ${
              currentPage === 'about' ? activeColorClass : textColorClass
            }`}
          >
            About Us
          </button>
          
          <button 
            onClick={() => handleLinkClick('enquiry')}
            className="bg-[#202a5d] text-white px-8 py-3.5 rounded-full font-krub text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d4ba1] transition-all shadow-lg active:scale-95"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className={`${textColorClass} transition-colors p-2`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#202a5d] z-40 flex flex-col items-center justify-center p-6 md:hidden animate-fade-in overflow-y-auto pt-24">
          <button className="absolute top-6 right-6 text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
            <div className="w-full bg-white/10 p-6 rounded-3xl mb-4">
              <span className="text-[#a5b4fc] font-krub text-[9px] font-black uppercase tracking-[0.4em] mb-6 block text-center">Program Guide</span>
              <div className="flex flex-col space-y-4">
                {COURSES.map((course) => (
                  <button key={course.slug} onClick={() => handleLinkClick(`course-${course.slug}`)} className="text-white font-krub text-sm font-bold uppercase tracking-widest hover:text-[#a5b4fc] transition-colors border-b border-white/5 pb-2 last:border-0">{course.title}</button>
                ))}
              </div>
            </div>
            {[
              { name: 'Home', id: 'home' },
              { name: 'Contact Us', id: 'contact' },
              { name: 'About Us', id: 'about' },
            ].map((item) => (
              <button key={item.id} onClick={() => handleLinkClick(item.id)} className="w-full py-3 text-white font-krub text-xl font-bold uppercase tracking-widest">{item.name}</button>
            ))}
            <button onClick={() => handleLinkClick('enquiry')} className="w-full mt-4 bg-white text-[#202a5d] py-5 rounded-full font-krub text-lg font-bold tracking-widest uppercase shadow-lg active:scale-95">Join Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
