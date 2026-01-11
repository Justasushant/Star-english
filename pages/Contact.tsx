
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="font-krub text-5xl font-bold text-[#3D4127] mb-8">Reach Out</h1>
              <p className="text-xl text-gray-600 mb-12">
                For admissions inquiries, partnership proposals, or to schedule a visit to our London campus, our concierge team is at your service.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#636B2F] rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#3D4127] uppercase tracking-widest mb-1">Campus</h4>
                    <p className="text-gray-500">1221 Excellence Way, London, UK</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#636B2F] rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#3D4127] uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-500">concierge@veridiam.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#636B2F] rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-krub font-bold text-lg text-[#3D4127] uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F9FAF6] p-12 rounded-3xl shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#636B2F]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#636B2F]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#636B2F]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Inquiry Type</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#636B2F]">
                    <option>General Inquiry</option>
                    <option>Admission Interest</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#636B2F]"></textarea>
                </div>
                <button className="w-full bg-[#3D4127] text-white py-5 rounded-full font-bold uppercase tracking-widest shadow-md hover:bg-[#636B2F] transition-all">
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
