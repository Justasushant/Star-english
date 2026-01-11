
import React from 'react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="pt-0 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#3D4127]">
        <img 
          src={course.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
          alt={course.title} 
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
          <span className="text-[#D4DE95] font-black uppercase tracking-[0.4em] text-xs mb-6 block animate-fade-in">{course.level} Level</span>
          <h1 className="font-krub text-5xl md:text-8xl font-bold mb-8 leading-tight">{course.title}</h1>
          <p className="text-xl md:text-3xl text-[#BAC095] mb-12 font-medium italic opacity-90">{course.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#636B2F] text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-white hover:text-[#3D4127] transition-all">
              Buy Now - {course.price}
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#3D4127] transition-all">
              Enquiry Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSE INTRO / DESCRIPTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="font-krub text-3xl md:text-5xl font-bold text-[#3D4127] mb-10 leading-tight">Comprehensive Mastery Over Communication</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed opacity-80 italic">
            {course.description}
          </p>
        </div>
      </section>

      {/* 3. WHAT YOU WILL LEARN */}
      <section className="py-24 bg-[#F9FAF6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-krub text-4xl font-bold text-[#3D4127] mb-4">What You Will Learn</h2>
            <div className="w-20 h-1 bg-[#636B2F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.learnPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-6 bg-white p-8 rounded-3xl border border-[#BAC095]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#D4DE95] flex items-center justify-center text-[#3D4127] font-black shrink-0">{idx + 1}</div>
                <p className="text-[#3D4127] font-bold text-lg leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO THIS COURSE IS FOR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-10 leading-tight">Who Is This <span className="text-[#636B2F]">For?</span></h2>
              <div className="space-y-6">
                {course.targetAudience.map((target, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-[#636B2F] rounded-full"></div>
                    <span className="text-lg text-gray-700 font-medium">{target}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl grayscale" alt="Audience" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURES / BENEFITS */}
      <section className="py-24 bg-[#3D4127] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {course.features.map((feature, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-4">✓</div>
                <h4 className="font-krub font-bold uppercase tracking-widest text-sm text-[#D4DE95]">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING / OFFER BOX */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto bg-[#F9FAF6] border-4 border-[#BAC095]/40 p-12 md:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-[#636B2F] text-white px-8 py-2 text-[10px] font-black uppercase tracking-widest -rotate-45 translate-x-12 translate-y-6">Best Value</div>
             <h3 className="font-krub text-4xl font-bold text-[#3D4127] mb-4">Enroll Today</h3>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Limited Time Offer</p>
             <div className="flex justify-center items-center space-x-4 mb-10">
               <span className="text-2xl text-gray-300 line-through font-bold">{course.originalPrice}</span>
               <span className="text-6xl text-[#636B2F] font-krub font-bold">{course.price}</span>
             </div>
             <button className="w-full bg-[#3D4127] text-white py-6 rounded-full font-bold uppercase tracking-widest text-lg shadow-xl hover:bg-[#636B2F] transition-all">
               Claim This Offer
             </button>
             <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest font-black">Secure Payment • Immediate Access</p>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-24 md:py-32 bg-[#D4DE95]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-10">Still Have Questions?</h2>
          <p className="text-[#636B2F] text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">Our student concierge team is ready to help you choose the right path for your success.</p>
          <button className="bg-[#3D4127] text-white px-16 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#3D4127] transition-all shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
