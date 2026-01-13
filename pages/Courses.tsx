import React from 'react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-32">
      <section className="bg-[#202a5d] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-krub text-5xl md:text-[7rem] font-bold mb-8 tracking-tighter">Our Programs</h1>
          <p className="text-[#a5b4fc] max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] md:text-xs font-black">
            Rigorous Mastery Tracks for Global Linguistic Excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-24 lg:gap-32">
            {COURSES.map((course, idx) => (
              <div key={course.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="rounded-[3rem] shadow-2xl w-full h-[350px] md:h-[600px] object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 rounded-[3rem] border-8 border-white/5 group-hover:border-[#a5b4fc]/20 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 md:p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="text-[#202a5d] font-black uppercase tracking-[0.3em] text-[10px] bg-[#f5f8ff] px-4 py-1.5 rounded-full">{course.level}</span>
                    <div className="h-px w-12 bg-gray-100"></div>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{course.duration}</span>
                  </div>
                  <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#202a5d] mb-8 leading-none tracking-tighter">{course.title}</h2>
                  <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                    {course.description} This intensive program utilizes our proprietary methodology, combining classic principles with contemporary case studies to ensure absolute communication mastery.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-14">
                    {['24/7 Support', 'Elite Alumni Hub', 'Certification', 'Personal Coaching'].map(feature => (
                      <span key={feature} className="px-5 py-2 bg-[#f5f8ff] text-[#202a5d] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#a5b4fc]/10">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full md:w-fit bg-[#202a5d] text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest shadow-xl hover:bg-[#3d4ba1] transition-all text-sm active:scale-95">
                    Enrollment Inquiries
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;