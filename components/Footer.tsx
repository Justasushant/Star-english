import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#202a5d] py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="https://i.postimg.cc/mg95522g/Badge_2_removebg_preview.png" alt="Star English" className="h-16" loading="lazy" decoding="async" />
            </div>
            <p className="text-[#202a5d]/70 text-sm leading-relaxed mb-6">
              A premium language coaching center dedicated to the mastery of articulation and global professional presence.
            </p>
          </div>
          
          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest text-[#202a5d]">Programs</h4>
            <ul className="space-y-4 text-sm text-[#202a5d]/60">
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Advanced Rhetoric</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Executive Presence</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">IELTS Mastery</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Elite Combo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest text-[#202a5d]">Institution</h4>
            <ul className="space-y-4 text-sm text-[#202a5d]/60">
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Our Philosophy</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Enrollment</a></li>
              <li><a href="#" className="hover:text-[#3d4ba1] transition-colors">Campus Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-krub font-bold text-lg mb-6 uppercase tracking-widest text-[#202a5d]">Connect</h4>
            <ul className="space-y-4 text-sm text-[#202a5d]/60">
              <li className="text-[#202a5d]">Downtown District</li>
              <li>concierge@starenglish.edu</li>
              <li>+1 (555) 789-0123</li>
              <li className="pt-4">
                <button className="bg-[#202a5d] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#3d4ba1] transition-all shadow-md">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#202a5d]/40 tracking-widest uppercase">
          <p>© 2024 Star English Academy. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#3d4ba1] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#3d4ba1] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;