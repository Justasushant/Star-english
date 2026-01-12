import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    // Courses will be inserted here manually for custom behavior
    { name: 'Daily Learning', id: 'daily-learning' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'About Us', id: 'about' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Nav text is white at top of EVERY page now
  const isTop = !isScrolled;
  const brandColorClass = isTop ? 'text-[#D4DE95]' : 'text-[#636B2F]';
  const textColorClass = isTop ? 'text-white' : 'text-[#3D4127]';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="cursor-pointer flex items-center group"
          onClick={() => handleLinkClick('home')}
        >
          <span className={`font-krub font-bold text-xl md:text-2xl tracking-tighter transition-colors duration-300 ${brandColorClass}`}>
            STAR<span className="opacity-60 font-light">ENGLISH</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {/* Home Link */}
          <button
            onClick={() => handleLinkClick('home')}
            className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#D4DE95] relative py-1 ${
              currentPage === 'home' ? 'text-[#D4DE95]' : textColorClass
            }`}
          >
            Home
            {currentPage === 'home' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4DE95]"></span>}
          </button>

          {/* Courses Dropdown - Reordered after Home */}
          <div 
            className="relative h-full py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#D4DE95] flex items-center space-x-2 ${
                currentPage.startsWith('course-') ? 'text-[#BAC095]' : textColorClass
              }`}
            >
              <span>Courses</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Invisible bridge to prevent closing on gap hover */}
            {isDropdownOpen && <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>}

            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white shadow-2xl rounded-2xl py-3 mt-2 border border-[#BAC095]/20 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
              <div className="px-4 py-2 border-b border-gray-50 mb-2">
                <p className="text-[9px] font-black text-[#636B2F] uppercase tracking-[0.3em]">Signature Programs</p>
              </div>
              {COURSES.map((course) => (
                <button
                  key={course.slug}
                  onClick={() => handleLinkClick(`course-${course.slug}`)}
                  className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#3D4127] hover:bg-[#F9FAF6] hover:text-[#636B2F] transition-colors flex items-center justify-between group"
                >
                  <span>{course.title}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </button>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-krub text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#D4DE95] relative py-1 ${
                currentPage === link.id 
                  ? 'text-[#D4DE95]' 
                  : textColorClass
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4DE95]"></span>
              )}
            </button>
          ))}
          
          <button 
            onClick={() => handleLinkClick('enquiry')}
            className="bg-[#636B2F] text-white px-8 py-3.5 rounded-full font-krub text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#3D4127] transition-all shadow-lg active:scale-95"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className={`${textColorClass} transition-colors p-2`} 
            aria-label="Toggle Menu"
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#3D4127] z-40 flex flex-col items-center justify-center p-6 md:hidden animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center space-y-4 mb-8 w-full max-w-xs overflow-y-auto pt-24 px-4">
             {/* Styled Mobile Course Selection */}
            <div className="w-full bg-black/20 p-6 rounded-3xl mb-4">
              <span className="text-[#D4DE95] font-krub text-[9px] font-black uppercase tracking-[0.4em] mb-6 block text-center">Elite Courses</span>
              <div className="flex flex-col space-y-5">
                {COURSES.map((course) => (
                  <button
                    key={course.slug}
                    onClick={() => handleLinkClick(`course-${course.slug}`)}
                    className="text-white font-krub text-sm font-bold uppercase tracking-widest hover:text-[#D4DE95] transition-colors border-b border-white/5 pb-2 last:border-0"
                  >
                    {course.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('home')}
              className={`w-full py-4 text-white font-krub text-xl font-bold uppercase tracking-widest ${currentPage === 'home' ? 'text-[#D4DE95]' : ''}`}
            >
              Home
            </button>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full py-4 text-white font-krub text-xl font-bold uppercase tracking-widest hover:text-[#D4DE95] transition-colors ${currentPage === link.id ? 'text-[#D4DE95]' : ''}`}
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-8 w-full">
              <button 
                onClick={() => handleLinkClick('enquiry')}
                className="w-full bg-[#D4DE95] text-[#3D4127] py-5 rounded-full font-krub text-lg font-bold tracking-widest uppercase shadow-lg active:scale-95"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;