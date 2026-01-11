
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D4127] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-krub font-bold text-xl tracking-wider">STAR ENGLISH</span>
            </div>
            <p className="text-[#BAC095] text-sm leading-relaxed mb-6">
              A premium local coaching center dedicated to the mastery of communication, articulation, and professional presence.
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'TW', 'LI'].map(social => (
                <a key={social} href="#" className="w-8 h-8 border border-[#BAC095] rounded-full flex items-center justify-center text-xs hover:bg-[#BAC095] hover:text-[#3D4127] transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest">Programs</h4>
            <ul className="space-y-4 text-sm text-[#BAC095]">
              <li><a href="#" className="hover:text-white transition-colors">Advanced Rhetoric</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Presence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elite Mastery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest">Institution</h4>
            <ul className="space-y-4 text-sm text-[#BAC095]">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enrollment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm text-[#BAC095]">
              <li>Downtown Educational District</li>
              <li>concierge@starenglish.edu</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-4">
                <button className="bg-[#BAC095] text-[#3D4127] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#636B2F] flex flex-col md:flex-row justify-between items-center text-xs text-[#BAC095] tracking-widest uppercase">
          <p>© 2024 Star English. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
