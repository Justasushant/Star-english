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

  const inputStyles = "w-full bg-[#f5f8ff] border-b-2 border-[#a5b4fc]/20 py-4 px-2 focus:border-[#202a5d] focus:bg-white outline-none transition-all duration-300 font-medium text-[#202a5d] placeholder:text-gray-300";

  if (isSent) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-[#f5f8ff]">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl animate-fade-in border border-[#a5b4fc]/5">
            <div className="w-24 h-24 bg-[#3d4ba1] rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg text-white">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-krub text-4xl font-bold text-[#202a5d] mb-6 tracking-tighter">Application Dispatched</h1>
            <p className="text-gray-600 text-lg mb-12 max-w-sm mx-auto leading-relaxed font-medium">
              Your application is now being reviewed by our master faculty. Expect a response via your preferred concierge method within 48 hours.
            </p>
            <button 
              onClick={() => window.location.hash = 'home'}
              className="bg-[#202a5d] text-white px-14 py-5 rounded-full font-krub font-bold uppercase tracking-widest shadow-xl hover:bg-[#3d4ba1] transition-all active:scale-95"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-[#f5f8ff]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className={`bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-500 border border-[#a5b4fc]/5 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
          
          {isSubmitting && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="relative w-20 h-20 mb-6">
                <svg className="w-full h-full text-[#202a5d] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-1 h-10 bg-gradient-to-t from-[#202a5d] to-transparent opacity-50"></div>
              </div>
              <p className="font-krub font-black text-[#202a5d] uppercase tracking-[0.4em] animate-pulse text-[10px]">Encrypting Application...</p>
            </div>
          )}

          <div className="absolute top-0 left-0 w-full h-2 bg-gray-50">
            <div 
              className="h-full bg-[#202a5d] transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          <div className="mb-12 text-center">
            <h1 className="font-krub text-4xl font-bold text-[#202a5d] mb-4 tracking-tighter">Application for Admission</h1>
            <p className="text-[#202a5d] uppercase tracking-[0.3em] text-[10px] font-black">Stage {step} of 3</p>
          </div>

          {step === 1 && (
            <div className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#202a5d] uppercase tracking-widest ml-1">Full Identity</label>
                  <input type="text" className={inputStyles} placeholder="Full legal name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#202a5d] uppercase tracking-widest ml-1">Secure Contact</label>
                  <input type="tel" className={inputStyles} placeholder="+1 (000) 000-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#202a5d] uppercase tracking-widest ml-1">Professional Email</label>
                <input type="email" className={inputStyles} placeholder="address@starenglish.edu" />
              </div>
              <div className="pt-10 flex justify-end">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-[#202a5d] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-xl hover:bg-[#3d4ba1] transition-all active:scale-95"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-fade-in">
              <h3 className="font-krub text-xl font-bold text-[#202a5d] border-b border-[#a5b4fc]/10 pb-4 mb-8">Preferred Mastery Track</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Advanced Rhetoric & Eloquence',
                  'Executive Presence & Branding',
                  'Global Linguistic Intelligence',
                  'Private 1:1 Elite Coaching'
                ].map((program) => (
                  <label key={program} className="group flex items-center space-x-5 p-6 border-2 border-[#a5b4fc]/10 rounded-2xl hover:border-[#202a5d] cursor-pointer transition-all hover:bg-[#f5f8ff]">
                    <input type="radio" name="program" className="accent-[#202a5d] w-6 h-6" />
                    <span className="font-bold text-[#202a5d] text-lg group-hover:text-[#202a5d] transition-colors">{program}</span>
                  </label>
                ))}
              </div>
              <div className="pt-10 flex justify-between items-center">
                <button 
                  onClick={() => setStep(1)}
                  className="text-gray-400 font-black uppercase tracking-widest text-[10px] hover:text-[#202a5d] transition-colors"
                >
                  &larr; Previous
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="bg-[#202a5d] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-xl hover:bg-[#3d4ba1] transition-all active:scale-95"
                >
                  Confirm Choice
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-fade-in text-center">
              <div className="w-24 h-24 bg-[#f5f8ff] rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-[#a5b4fc]/20">
                <svg className="w-12 h-12 text-[#202a5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-krub text-3xl font-bold text-[#202a5d] tracking-tighter">Final Commitment</h3>
              <p className="text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed font-medium">
                By submitting, you pledge to maintain our standards of academic discipline and excellence.
              </p>
              <button 
                className="w-full bg-[#202a5d] text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-[#3d4ba1] transition-all text-lg active:scale-95"
                onClick={handleSubmit}
              >
                Submit Admission Request
              </button>
              <button 
                onClick={() => setStep(2)}
                className="mt-6 text-gray-400 font-black uppercase tracking-widest text-[10px] hover:text-[#202a5d] transition-colors block w-full text-center"
              >
                Modify Track
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;