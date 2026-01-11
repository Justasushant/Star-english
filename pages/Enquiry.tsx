
import React, { useState } from 'react';

const Enquiry: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate mail sending animation duration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 2500);
  };

  const inputStyles = "w-full bg-[#F9FAF6] border-b-2 border-[#BAC095]/30 py-4 px-2 focus:border-[#636B2F] focus:bg-white outline-none transition-all duration-300 font-medium text-[#3D4127] placeholder:text-gray-300";

  if (isSent) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-[#F9FAF6]">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl animate-fade-in">
            <div className="w-24 h-24 bg-[#D4DE95] rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
              <svg className="w-12 h-12 text-[#3D4127]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-krub text-4xl font-bold text-[#3D4127] mb-6">Application Sent Successfully</h1>
            <p className="text-gray-600 text-lg mb-12 max-w-sm mx-auto leading-relaxed">
              Your application is now being processed by our elite faculty. Expect a response via the concierge within 48 hours.
            </p>
            <button 
              onClick={() => window.location.hash = 'home'}
              className="bg-[#3D4127] text-white px-12 py-5 rounded-full font-krub font-bold uppercase tracking-widest shadow-xl hover:bg-[#636B2F] transition-all"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-[#F9FAF6]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className={`bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-500 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
          
          {isSubmitting && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="relative w-20 h-20 mb-6">
                <svg className="w-full h-full text-[#636B2F] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-1 h-10 bg-gradient-to-t from-[#636B2F] to-transparent opacity-50"></div>
              </div>
              <p className="font-krub font-bold text-[#3D4127] uppercase tracking-[0.3em] animate-pulse">Delivering Application...</p>
            </div>
          )}

          <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <div 
              className="h-full bg-[#636B2F] transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          <div className="mb-12 text-center">
            <h1 className="font-krub text-4xl font-bold text-[#3D4127] mb-4 tracking-tight">Application for Admission</h1>
            <p className="text-[#636B2F] uppercase tracking-[0.2em] text-[10px] font-black">Step {step} of 3</p>
          </div>

          {step === 1 && (
            <div className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#636B2F] uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className={inputStyles} placeholder="Enter your full name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#636B2F] uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" className={inputStyles} placeholder="+1 (000) 000-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#636B2F] uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className={inputStyles} placeholder="your@email.edu" />
              </div>
              <div className="pt-10 flex justify-end">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-[#636B2F] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-[#3D4127] transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-fade-in">
              <h3 className="font-krub text-xl font-bold text-[#3D4127] border-b border-[#BAC095]/20 pb-4 mb-8">Preferred Curriculum</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Advanced Rhetoric & Eloquence',
                  'Executive Leadership Communication',
                  'Global Cultural Intelligence',
                  'One-on-One Elite Coaching'
                ].map((program) => (
                  <label key={program} className="group flex items-center space-x-5 p-6 border-2 border-[#BAC095]/20 rounded-2xl hover:border-[#636B2F] cursor-pointer transition-all hover:bg-[#F9FAF6]">
                    <input type="radio" name="program" className="accent-[#636B2F] w-6 h-6" />
                    <span className="font-bold text-[#3D4127] text-lg group-hover:text-[#636B2F] transition-colors">{program}</span>
                  </label>
                ))}
              </div>
              <div className="pt-10 flex justify-between items-center">
                <button 
                  onClick={() => setStep(1)}
                  className="text-gray-400 font-bold uppercase tracking-widest text-[10px] hover:text-[#3D4127] transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="bg-[#636B2F] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-[#3D4127] transition-all"
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-fade-in text-center">
              <div className="w-24 h-24 bg-[#BAC095]/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-[#BAC095]/30">
                <svg className="w-12 h-12 text-[#3D4127]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-krub text-3xl font-bold text-[#3D4127]">Final Review</h3>
              <p className="text-gray-600 mb-10 max-w-sm mx-auto leading-relaxed">
                By submitting, you agree to our rigorous standards of academic integrity and personal discipline.
              </p>
              <button 
                className="w-full bg-[#3D4127] text-white py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-[#636B2F] transition-all text-lg"
                onClick={handleSubmit}
              >
                Submit Application
              </button>
              <button 
                onClick={() => setStep(2)}
                className="mt-6 text-gray-400 font-bold uppercase tracking-widest text-[10px] hover:text-[#3D4127] transition-colors block w-full text-center"
              >
                Edit Selection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
