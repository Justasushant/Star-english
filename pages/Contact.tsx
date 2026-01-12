import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="font-krub text-5xl md:text-7xl font-bold text-[#202a5d] mb-8 tracking-tighter">Reach Out</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                For admissions inquiries, partnership proposals, or to schedule a visit to our flagship campus, our concierge team is at your service.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-[#202a5d] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#202a5d] uppercase tracking-widest mb-1">Campus</h4>
                    <p className="text-gray-500 font-medium">1221 Excellence Way, Central Hub</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-[#202a5d] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#202a5d] uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-500 font-medium">concierge@starenglish.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-[#202a5d] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#202a5d] uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-gray-500 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f8ff] p-12 rounded-[3rem] shadow-sm border border-[#a5b4fc]/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#202a5d] mb-2 ml-1">First Name</label>
                    <input type="text" className="w-full bg-white border border-[#a5b4fc]/10 rounded-2xl p-4 focus:outline-none focus:border-[#202a5d] transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#202a5d] mb-2 ml-1">Last Name</label>
                    <input type="text" className="w-full bg-white border border-[#a5b4fc]/10 rounded-2xl p-4 focus:outline-none focus:border-[#202a5d] transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#202a5d] mb-2 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-[#a5b4fc]/10 rounded-2xl p-4 focus:outline-none focus:border-[#202a5d] transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#202a5d] mb-2 ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-[#a5b4fc]/10 rounded-2xl p-4 focus:outline-none focus:border-[#202a5d] transition-all font-medium appearance-none">
                      <option>General Inquiry</option>
                      <option>Admission Interest</option>
                      <option>Corporate Partnership</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#202a5d]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#202a5d] mb-2 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-[#a5b4fc]/10 rounded-2xl p-4 focus:outline-none focus:border-[#202a5d] transition-all font-medium"></textarea>
                </div>
                <button className="w-full bg-[#202a5d] text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#3d4ba1] transition-all text-sm active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;