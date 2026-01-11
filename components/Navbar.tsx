
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
    { name: 'Daily Learning', id: 'daily-learning' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'About Us', id: 'about' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isHeroTop = currentPage === 'home' && !isScrolled;
  const brandColorClass = isHeroTop ? 'text-[#D4DE95]' : 'text-[#636B2F]';
  const textColorClass = isHeroTop ? 'text-white' : 'text-[#3D4127]';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="cursor-pointer flex items-center"
          onClick={() => handleLinkClick('home')}
        >
          <span className={`font-krub font-bold text-xl md:text-2xl tracking-wider transition-colors duration-300 ${brandColorClass}`}>
            STAR ENGLISH
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Courses Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`font-krub text-xs font-bold tracking-widest uppercase transition-colors hover:text-[#D4DE95] flex items-center space-x-1 ${
                currentPage.startsWith('course-') ? 'text-[#BAC095]' : textColorClass
              }`}
            >
              <span>Courses</span>
              <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-4 mt-2 border border-[#BAC095]/20 animate-fade-in overflow-hidden">
                {COURSES.map((course) => (
                  <button
                    key={course.slug}
                    onClick={() => handleLinkClick(`course-${course.slug}`)}
                    className="w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#3D4127] hover:bg-[#F9FAF6] hover:text-[#636B2F] transition-colors"
                  >
                    {course.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-krub text-xs font-bold tracking-widest uppercase transition-colors hover:text-[#D4DE95] ${
                currentPage === link.id 
                  ? 'text-[#BAC095] border-b-2 border-[#BAC095]' 
                  : textColorClass
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={() => handleLinkClick('enquiry')}
            className="bg-[#636B2F] text-white px-6 py-3 rounded-full font-krub text-xs font-bold tracking-widest uppercase hover:bg-[#3D4127] transition-all shadow-sm"
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
          
          <div className="flex flex-col items-center space-y-6 mb-12 w-full max-w-xs overflow-y-auto pt-20">
            {/* Mobile Courses Section */}
            <div className="w-full text-center">
              <span className="text-[#D4DE95] font-krub text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Courses</span>
              <div className="flex flex-col space-y-4 mb-8">
                {COURSES.map((course) => (
                  <button
                    key={course.slug}
                    onClick={() => handleLinkClick(`course-${course.slug}`)}
                    className="text-white font-krub text-lg font-bold uppercase tracking-widest hover:text-[#D4DE95]"
                  >
                    {course.title}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-white font-krub text-2xl font-bold uppercase tracking-widest hover:text-[#D4DE95] transition-colors ${currentPage === link.id ? 'text-[#D4DE95]' : ''}`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 flex flex-col space-y-4 w-full">
              <button 
                onClick={() => handleLinkClick('enquiry')}
                className="bg-[#D4DE95] text-[#3D4127] py-5 rounded-full font-krub text-xl font-bold tracking-widest uppercase shadow-lg"
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
