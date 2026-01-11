
import React from 'react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-32">
      <section className="bg-[#3D4127] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-krub text-5xl md:text-8xl font-bold mb-8">Our Courses</h1>
          <p className="text-[#BAC095] max-w-2xl mx-auto uppercase tracking-[0.2em] text-xs md:text-sm font-black opacity-80">
            Rigorous programs designed for global linguistic excellence.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-24 lg:gap-32">
            {COURSES.map((course, idx) => (
              <div key={course.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="rounded-[2.5rem] shadow-2xl w-full h-[350px] md:h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 rounded-[2.5rem] border-8 border-white/10 group-hover:border-[#D4DE95]/30 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 md:p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[#636B2F] font-black uppercase tracking-[0.2em] text-xs">Level: {course.level}</span>
                    <div className="h-px w-12 bg-gray-200"></div>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{course.duration}</span>
                  </div>
                  <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-8 leading-tight">{course.title}</h2>
                  <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed opacity-90">
                    {course.description} This intensive program utilizes our proprietary methodology, combining classic principles with contemporary case studies to ensure absolute communication mastery.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4 mb-12">
                    {['24/7 Support', 'Elite Peer Network', 'Certification', 'Personal Mentor'].map(feature => (
                      <span key={feature} className="px-5 py-2 bg-[#F9FAF6] text-[#3D4127] text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full border border-gray-100">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full md:w-fit bg-[#636B2F] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#3D4127] transition-all shadow-xl text-sm">
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
