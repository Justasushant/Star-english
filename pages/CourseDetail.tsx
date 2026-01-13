import React from 'react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="pt-0 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#202a5d]">
        <img 
          src={course.image} 
          alt={course.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
          <span className="text-[#a5b4fc] font-black uppercase tracking-[0.4em] text-xs mb-6 block animate-fade-in">{course.level} Excellence</span>
          <h1 className="font-krub text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">{course.title}</h1>
          <p className="text-xl md:text-3xl text-[#f5f8ff] mb-12 font-medium italic opacity-90">{course.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#3d4ba1] text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-white hover:text-[#202a5d] transition-all active:scale-95">
              Buy Now - {course.price}
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#202a5d] transition-all active:scale-95">
              Enquiry Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSE INTRO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="font-krub text-3xl md:text-5xl font-bold text-[#202a5d] mb-10 leading-tight tracking-tighter">Mastery Over Elite Communication</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed opacity-80 italic font-medium">
            {course.description}
          </p>
        </div>
      </section>

      {/* 3. LEARN POINTS */}
      <section className="py-24 bg-[#f5f8ff]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-krub text-4xl font-bold text-[#202a5d] mb-4 tracking-tighter">What You Will Master</h2>
            <div className="w-20 h-1 bg-[#3d4ba1] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.learnPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-6 bg-white p-8 rounded-3xl border border-[#a5b4fc]/10 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-[#3d4ba1] flex items-center justify-center text-white font-black shrink-0 shadow-md group-hover:scale-110 transition-transform">{idx + 1}</div>
                <p className="text-[#202a5d] font-bold text-lg leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-xl mx-auto bg-[#f5f8ff] border-2 border-[#a5b4fc]/20 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 z-10 pointer-events-none">
               <div className="bg-[#202a5d] text-white px-12 py-2 text-[9px] font-black uppercase tracking-[0.2em] transform rotate-45 translate-x-12 translate-y-6 shadow-xl border-b border-white/10">
                 Elite Offer
               </div>
             </div>
             
             <h3 className="font-krub text-4xl font-bold text-[#202a5d] mb-4 tracking-tighter">Limited Batch Offer</h3>
             <div className="flex justify-center items-center space-x-6 mb-12 mt-8">
               <span className="text-2xl text-gray-300 line-through font-bold opacity-60">{course.originalPrice}</span>
               <span className="text-7xl text-[#202a5d] font-krub font-bold tracking-tighter">{course.price}</span>
             </div>
             <button className="w-full bg-[#202a5d] text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#3d4ba1] transition-all text-lg active:scale-95">
               Claim This Seat
             </button>
             <p className="mt-8 text-[9px] text-gray-400 uppercase tracking-[0.4em] font-black opacity-60">Verified Admission • Priority Hub Access</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;