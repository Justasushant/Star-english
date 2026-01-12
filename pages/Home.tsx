import React from 'react';
import { COURSES, TESTIMONIALS } from '../constants';
import StatsCounter from '../components/StatsCounter';
import LazyVideo from '../components/LazyVideo';
import spokenMasteryVideo from '../assets/star-kids-owner.mp4';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
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
              <button 
                onClick={() => onNavigate('learning-tips')}
                className="mt-12 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#202a5d] transition-all"
              >
                Watch More Lessons
              </button>
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
              <div className="relative z-10 border-[1.5rem] border-[#f5f8ff] rounded-[4rem] shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Elite Education" loading="lazy" decoding="async" />
              </div>
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

      {/* 4. DAILY FREE LESSONS PREVIEW */}
      <section className="py-32 bg-[#f5f8ff]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="mb-24">
            <span className="text-[#202a5d] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Daily Updates</span>
            <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#202a5d] mb-4 tracking-tighter">Linguistic Insights</h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Fresh Lessons Every 24 Hours</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { type: 'Word of the Day', item: 'Eloquence', detail: 'Fluent or persuasive speaking or writing.', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400' },
              { type: 'Strategic Tool', item: 'Active Listening', detail: 'The secret to winning boardroom negotiations.', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400' },
              { type: 'Idiom of the Day', item: 'Cutting Edge', detail: 'The most advanced or exciting stage.', img: 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?auto=format&fit=crop&q=80&w=400' }
            ].map((lesson) => (
              <div key={lesson.type} className="bg-white rounded-[3rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a5b4fc]/10">
                <div className="h-56 overflow-hidden relative">
                  <img src={lesson.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={lesson.type} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-10">
                  <span className="text-[#202a5d] font-black uppercase tracking-widest text-[9px] mb-4 block">{lesson.type}</span>
                  <h4 className="font-krub text-2xl font-bold text-[#202a5d] mb-4">{lesson.item}</h4>
                  <p className="text-gray-500 text-xs mb-8 leading-relaxed">{lesson.detail}</p>
                  <div className="flex items-center text-[#202a5d] font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    <span>Explore Lesson</span>
                    <span className="ml-2">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY */}
      <section className="py-40 bg-[#202a5d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale pointer-events-none">
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
                <img src="https://images.unsplash.com/photo-1544716124-059002ce3d38?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl grayscale h-[350px] object-cover" alt="Mastery 1" />
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg h-[200px] w-full object-cover brightness-90" alt="Learning context" />
              </div>
              <div className="pt-16 space-y-6">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg h-[250px] w-full object-cover grayscale" alt="Peer interaction" />
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
