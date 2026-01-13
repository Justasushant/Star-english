import React, { useEffect, useState } from 'react';
import { COURSES, TESTIMONIALS } from '../constants';
import StatsCounter from '../components/StatsCounter';
import LazyVideo from '../components/LazyVideo';
import spokenMasteryVideo from '../assets/star-kids-owner.mp4';
import childExample01 from '../assets/CHILD EXAMPLE 01.mp4';
import childExample02 from '../assets/CHILD EXAMPLE 02.mp4';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isWhyLeadersImageOpen, setIsWhyLeadersImageOpen] = useState(false);

  useEffect(() => {
    if (!isWhyLeadersImageOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsWhyLeadersImageOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isWhyLeadersImageOpen]);

  return (
    <div className="pt-0">
      {isWhyLeadersImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/20 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Why leaders choose Star image"
          onClick={() => setIsWhyLeadersImageOpen(false)}
        >
          <img
            src="https://i.postimg.cc/hGt12HWv/image.png"
            alt="Why leaders choose Star"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-[4px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1600" 
            alt="Star English Background"
            className="w-full h-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#202a5d]/90 via-[#202a5d]/40 to-white/5"></div>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in text-white drop-shadow-2xl">
            <h1 className="font-krub text-5xl md:text-[8rem] font-bold leading-[0.85] mb-12 tracking-tighter">
              The Art of <br />
              <span className="text-[#a5b4fc]">Elite Presence.</span>
            </h1>
            
            <p className="text-lg md:text-2xl opacity-90 mb-16 leading-relaxed font-medium max-w-2xl mx-auto text-balance">
              Unlock global career opportunities with our prestigious articulation coaching and executive communication mastery programs.
            </p>

            <div className="max-w-2xl mx-auto mb-14">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl px-6 py-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Star Spoken English Classes</span>
                <span className="text-white/40">•</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">25+ Years Experience</span>
                <span className="text-white/40">•</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Kids | Adults | No Age Limit</span>
                <span className="text-white/40">•</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Online & Group Classes</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
              <button 
                onClick={() => onNavigate('course-spoken-english-course')}
                className="w-full md:w-auto bg-[#3d4ba1] text-white px-16 py-7 rounded-full font-krub font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#202a5d] transition-all shadow-2xl text-base active:scale-95"
              >
                Explore Programs
              </button>
              
              <div className="flex items-center space-x-8 md:space-x-10">
                <div className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest text-white/80">
                  <span className="w-2 h-2 bg-[#a5b4fc] rounded-full animate-pulse shadow-[0_0_10px_#a5b4fc]"></span>
                  <span>Live Masterclasses</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest text-white/80">
                  <span className="w-2 h-2 bg-[#a5b4fc] rounded-full"></span>
                  <span>1:1 Coaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPOKEN MASTERY VIDEO SECTION (PORTRAIT) */}
      <section className="py-32 bg-[#202a5d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-3/5">
              <span className="text-[#a5b4fc] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Elite Pedagogy</span>
              <h2 className="font-krub text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                The Secret to <br /><span className="italic text-[#a5b4fc]">Spoken Mastery.</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-12 font-medium max-w-xl">
                Experience our unique spoken English methodology. We move beyond textbooks to help you engineer a presence that commands respect in any room, whether in a boardroom or on a global stage.
              </p>
              <div className="flex items-center space-x-6">
                 <div className="w-16 h-1 bg-[#a5b4fc]"></div>
                 <div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Alexander Star</p>
                    <p className="text-[#a5b4fc] text-[10px] uppercase font-black tracking-widest">Director of Spoken Excellence</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full flex justify-center">
               <div className="relative group w-full max-w-[340px] aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/20">
                <LazyVideo
                  src={spokenMasteryVideo}
                  title="The Secret to Spoken Mastery"
                    useFirstFramePreview
                  containerClassName="w-full h-full"
                  videoClassName="w-full h-full object-cover"
                />

                <div className="absolute bottom-10 left-0 right-0 text-center px-8 pointer-events-none">
                  <span className="px-4 py-2 bg-[#202a5d]/60 backdrop-blur-md rounded-full text-white text-[8px] font-black uppercase tracking-widest border border-white/10 mb-4 inline-block">
                   Featured Lesson: Presence & Cadence
                  </span>
                  <p className="text-white/60 text-[9px] font-medium tracking-wide">Click to play video demonstration</p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY US - Replaced the awards strip with a seamless transition */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#a5b4fc]/10 rounded-full blur-3xl"></div>
              <button
                type="button"
                className="relative z-10 w-full text-left rounded-[4px] shadow-2xl overflow-hidden transition-all duration-500"
                onClick={() => setIsWhyLeadersImageOpen(true)}
                aria-label="Expand Why leaders choose Star image"
              >
                <img
                  src="https://i.postimg.cc/hGt12HWv/image.png"
                  className="w-full h-full object-cover"
                  alt="Why leaders choose Star"
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <div className="absolute -bottom-8 -right-8 bg-[#202a5d] p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-white/10">
                <p className="text-[#a5b4fc] font-krub text-5xl font-black">98%</p>
                <p className="text-white text-[10px] font-black uppercase tracking-widest mt-1 text-center">Success Rate</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#202a5d] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Star Protocol</span>
              <h2 className="font-krub text-4xl md:text-7xl font-bold text-[#202a5d] mb-12 leading-none tracking-tighter">Why Leaders <br /><span className="text-[#3d4ba1]">Choose Star.</span></h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
                {[
                  { title: 'Natural Fluency', desc: 'Focus on natural flow and subconscious learning over robotic grammar rules.' },
                  { title: 'Interactive Masterclasses', desc: 'Psychology-backed conversational drills for real-world scenarios.' },
                  { title: 'Executive Presence', desc: 'Curriculum designed directly for corporate articulation and boardroom confidence.' },
                  { title: 'Global Passport', desc: 'Industry-standard accreditation valid for international careers.' }
                ].map((point) => (
                  <div key={point.title} className="group">
                    <div className="w-8 h-1 bg-[#3d4ba1] mb-6 group-hover:w-16 transition-all duration-500"></div>
                    <h4 className="font-krub font-bold text-[#202a5d] uppercase tracking-widest text-sm mb-3">{point.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY */}
      <section className="py-40 bg-[#202a5d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Library" loading="lazy" decoding="async" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-krub text-4xl md:text-7xl font-bold mb-12 leading-[1.1] text-white tracking-tighter text-balance">
              Bridging the gap between <span className="text-[#a5b4fc]">potential and articulation.</span>
            </h2>
            <p className="text-[#f5f8ff] text-xl md:text-3xl leading-relaxed opacity-90 font-light italic mb-16 border-l-4 border-[#3d4ba1] pl-10 max-w-2xl">
              "Intellect without eloquence is a locked treasure. At Star English, we provide the master key through bespoke linguistic coaching."
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="text-white font-bold border-b-2 border-[#a5b4fc] pb-2 text-[10px] uppercase tracking-[0.4em] hover:text-[#a5b4fc] transition-colors"
            >
              Our Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* CHILDREN'S SPEAKING EXAMPLES (PREVIEW) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#202a5d] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Kids Speak</span>
              <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#202a5d] tracking-tighter leading-tight">
                Children’s English <span className="text-[#3d4ba1]">Speaking Tone.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
                Watch real classroom-style examples to hear clarity, tone, and confidence.
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center">
              <button
                onClick={() => onNavigate('gallery')}
                className="w-full sm:w-auto bg-[#202a5d] text-white px-14 py-5 rounded-full font-krub font-bold tracking-[0.2em] uppercase hover:bg-[#3d4ba1] transition-all shadow-lg text-[10px]"
              >
                Visit Gallery
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { src: childExample01, title: 'Child Example 01' },
              { src: childExample02, title: 'Child Example 02' },
            ].map((video) => (
              <div
                key={video.title}
                className="bg-[#f5f8ff] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a5b4fc]/10 max-w-[360px] mx-auto w-full"
              >
                <div className="aspect-[9/16] bg-black">
                  <LazyVideo
                    src={video.src}
                    title={video.title}
                    useFirstFramePreview
                    containerClassName="w-full h-full"
                    videoClassName="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10">
                  <p className="text-[#202a5d] font-black uppercase tracking-widest text-[10px]">{video.title}</p>
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">Click to play.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MAIN COURSE PROMOTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-[#f5f8ff] rounded-[4rem] p-12 md:p-24 lg:p-32 relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24 border border-[#a5b4fc]/20 shadow-xl overflow-hidden">
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <span className="bg-[#202a5d] text-white px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] mb-10 inline-block shadow-lg">Exclusive Batch Open</span>
              <h2 className="font-krub text-5xl md:text-7xl lg:text-[6rem] font-bold text-[#202a5d] mb-10 leading-[0.9] tracking-tighter">Become Fluent. <br /><span className="text-[#3d4ba1]">Dominate Rooms.</span></h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-16 text-left">
                {['Live Interactive Coaching', 'Personality Engineering', 'Executive Portfolio Support', 'Elite Alumni Network'].map(benefit => (
                  <li key={benefit} className="flex items-center space-x-4">
                    <div className="w-5 h-5 rounded-full bg-[#3d4ba1] flex items-center justify-center text-white shrink-0 shadow-inner">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-[#202a5d] uppercase tracking-widest text-[9px] opacity-70">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('enquiry')} className="bg-[#202a5d] text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-[#3d4ba1] transition-all text-sm active:scale-95">Enroll Now</button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 h-full">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1544716124-059002ce3d38?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl h-[350px] object-cover" alt="Mastery 1" />
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg h-[200px] w-full object-cover brightness-90" alt="Learning context" />
              </div>
              <div className="pt-16 space-y-6">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg h-[250px] w-full object-cover" alt="Peer interaction" />
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl h-[300px] object-cover" alt="Mastery 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#202a5d] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Legacy of Impact</span>
              <h2 className="font-krub text-4xl md:text-7xl font-bold text-[#202a5d] tracking-tighter leading-tight">
                Refined by <span className="text-[#3d4ba1]">Experience.</span>
              </h2>
            </div>
            <div className="w-full lg:w-auto flex justify-center">
              <button 
                onClick={() => onNavigate('results')}
                className="w-full sm:w-auto bg-[#3d4ba1] text-white px-14 py-5 rounded-full font-krub font-bold tracking-[0.2em] uppercase hover:bg-[#202a5d] transition-all shadow-lg text-[10px]"
              >
                See Success Gallery
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {TESTIMONIALS.slice(0, 2).map((t, idx) => (
              <div key={t.id} className="bg-[#f5f8ff] p-12 md:p-16 rounded-[3rem] border border-[#a5b4fc]/20 shadow-xl hover:translate-y-[-10px] transition-all duration-500 relative overflow-hidden group">
                <div className="absolute -top-4 -left-4 font-serif text-[12rem] text-[#a5b4fc]/10 leading-none pointer-events-none opacity-50 select-none">“</div>
                <div className="relative z-10">
                  <p className="italic text-[#202a5d] text-xl md:text-2xl font-medium leading-relaxed mb-10">"{t.content}"</p>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-[#202a5d] rounded-full shadow-inner flex items-center justify-center text-white font-black text-xs">S</div>
                    <div>
                      <p className="text-[#202a5d] font-black uppercase tracking-widest text-[9px]">Star Alumni #00{idx + 1}</p>
                      <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.2em]">Verified Graduate</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STATS STRIP */}
      <section className="bg-[#202a5d] py-32 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: 15, suffix: '+', label: 'Years Experience' },
              { val: 2500, suffix: 'k', label: 'Global Students' },
              { val: 25, suffix: '+', label: 'Master Mentors' },
              { val: 98, suffix: '%', label: 'Success Quotient' },
            ].map((stat, idx) => (
              <div key={idx} className="text-white group">
                <div className="font-krub text-5xl md:text-7xl font-bold mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  <StatsCounter end={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-[#a5b4fc] text-[10px] font-black uppercase tracking-[0.3em] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
