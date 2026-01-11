
import React from 'react';
import { COURSES, TESTIMONIALS } from '../constants';
import StatsCounter from '../components/StatsCounter';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/kgk8pfX3/Gemini_Generated_Image_yvf1i6yvf1i6yvf1.png" 
            alt="Star English Mastery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-transparent backdrop-blur-[1px] md:backdrop-blur-0"></div>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#3D4127] via-[#3D4127]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-xl md:max-w-3xl animate-fade-in text-white drop-shadow-2xl">
            <h1 className="font-krub text-5xl md:text-8xl font-bold leading-tight mb-8">
              Premium English <span className="text-[#D4DE95]">Speaking Mastery.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 mb-12 leading-relaxed font-semibold max-w-lg">
              Unlock global opportunities with elite articulation coaching and executive presence training.
            </p>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('course-spoken-english-course')}
                className="bg-[#636B2F] text-white px-12 py-6 rounded-full font-krub font-bold tracking-widest uppercase hover:bg-white hover:text-[#3D4127] transition-all shadow-2xl text-sm md:text-base"
              >
                Know More
              </button>
              <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest opacity-80 pl-2">
                <span>Live Classes</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Personal Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COURSES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-krub text-4xl md:text-5xl font-bold text-[#3D4127] mb-4">Featured Offerings</h2>
              <p className="text-[#636B2F] uppercase tracking-[0.2em] text-xs font-black">Elite Academic Pathways</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-[#F9FAF6] rounded-3xl p-8 border border-[#BAC095]/20 hover:shadow-2xl transition-all group">
                <img src={course.image} className="w-full h-48 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" alt={course.title} />
                <h3 className="font-krub text-2xl font-bold text-[#3D4127] mb-4">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">{course.description}</p>
                <button onClick={() => onNavigate(`course-${course.slug}`)} className="w-full py-4 bg-[#636B2F] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#3D4127] transition-colors">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MORE COURSES SECTION */}
      <section className="py-24 bg-[#F9FAF6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-krub text-4xl font-bold text-[#3D4127] mb-4">Specialized Curriculums</h2>
            <div className="w-20 h-1 bg-[#636B2F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COURSES.map((course) => (
              <div key={course.id} onClick={() => onNavigate(`course-${course.slug}`)} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all text-center border border-[#BAC095]/10 cursor-pointer group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">💎</div>
                <h4 className="font-krub font-bold text-[#3D4127] uppercase tracking-tighter text-sm">{course.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AWARDS / RECOGNITION SECTION */}
      <section className="py-16 bg-white border-y border-[#BAC095]/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale text-center">
            {['ISO Certified', 'Excellence 2024', 'Best Pedagogy', 'Tech Ed Award'].map(award => (
              <div key={award} className="font-krub font-black text-xl md:text-2xl tracking-tighter text-[#3D4127] uppercase italic">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US / KYA KHAAS HAI SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-10 leading-tight">What Makes Us <span className="text-[#636B2F]">Elite?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { title: 'Easy Learning', desc: 'Complex concepts simplified for rapid retention.' },
                  { title: 'Fun Method', desc: 'Interactive psychological approach to language.' },
                  { title: 'No Grammar Stress', desc: 'Focus on natural flow and practical usage.' },
                  { title: 'Job Useful', desc: 'Directly applicable in professional settings.' },
                  { title: 'Certificate', desc: 'Recognized industry-standard accreditation.' }
                ].map((point) => (
                  <div key={point.title}>
                    <div className="w-10 h-1 bg-[#D4DE95] mb-4"></div>
                    <h4 className="font-krub font-bold text-[#3D4127] uppercase tracking-widest text-sm mb-2">{point.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4DE95] rounded-[4rem] translate-x-6 translate-y-6"></div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="relative z-10 rounded-[4rem] shadow-2xl grayscale" alt="Why Star English" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. DAILY FREE LESSONS SECTION (Updated Order) */}
      <section className="py-24 bg-[#F9FAF6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-krub text-4xl md:text-5xl font-bold text-[#3D4127] mb-4">Daily Free Lessons</h2>
            <p className="text-gray-400 font-medium italic">Update: Nov 05, 2024</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { type: 'Word of the Day', item: 'Eloquence', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400' },
              { type: 'Sentence of the Day', item: 'Persistence is key.', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400' },
              { type: 'Idiom of the Day', item: 'A Blessing in Disguise', img: 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?auto=format&fit=crop&q=80&w=400' }
            ].map((lesson) => (
              <div key={lesson.type} className="bg-white rounded-3xl overflow-hidden border border-[#BAC095]/10 group cursor-pointer shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src={lesson.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={lesson.type} />
                </div>
                <div className="p-8">
                  <span className="text-[#636B2F] font-black uppercase tracking-widest text-[10px] mb-4 block">{lesson.type}</span>
                  <h4 className="font-krub text-2xl font-bold text-[#3D4127] mb-6">{lesson.item}</h4>
                  <div className="w-full h-px bg-[#BAC095]/20 mb-6"></div>
                  <span className="text-[#BAC095] text-[10px] font-bold uppercase tracking-widest">Learn More &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WELCOME / ABOUT INTRO SECTION */}
      <section className="py-24 bg-[#3D4127] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-krub text-4xl md:text-6xl font-bold mb-10 leading-tight">Elite English for Every Local Talent</h2>
            <p className="text-[#BAC095] text-xl leading-relaxed opacity-90 font-light italic">
              "We realized that the barrier to global success wasn't intelligence, but the confidence to articulate it. Star English was born to bridge that gap with premium coaching."
            </p>
          </div>
        </div>
      </section>

      {/* 9. MAIN COURSE PROMOTION CTA SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-[#F9FAF6] rounded-[4rem] p-12 md:p-24 relative flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 relative z-10">
              <span className="bg-[#636B2F] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 inline-block">Enrollment Open</span>
              <h2 className="font-krub text-4xl md:text-7xl font-bold text-[#3D4127] mb-8 leading-tight">Master English in Just 90 Days.</h2>
              <ul className="space-y-6 mb-12">
                {['Live Interactive Sessions', 'Zero-Grammar Complexity', 'Elite Certification', 'Career Support'].map(benefit => (
                  <li key={benefit} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-[#D4DE95] flex items-center justify-center text-[#3D4127]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-[#3D4127] opacity-80 uppercase tracking-widest text-xs md:text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('enquiry')} className="bg-[#3D4127] text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-[#636B2F] transition-all text-sm">Enroll Now - Limited Seats</button>
            </div>
            <div className="lg:w-2/5">
              <img src="https://images.unsplash.com/photo-1544716124-059002ce3d38?auto=format&fit=crop&q=80&w=800" className="relative z-10 rounded-3xl shadow-xl grayscale" alt="Main Course" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-white border-t border-[#BAC095]/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-8 leading-tight">
                Stories from our <span className="text-[#636B2F]">Students</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 opacity-80">
                Our students consistently achieve the highest standards in their pursuits.
              </p>
              <button 
                onClick={() => onNavigate('results')}
                className="bg-[#D4DE95] text-[#3D4127] px-10 py-5 rounded-full font-krub font-bold tracking-widest uppercase hover:bg-[#636B2F] hover:text-white transition-all shadow-lg inline-block text-center"
              >
                View Success Stories
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-8 w-full">
              {TESTIMONIALS.slice(0, 2).map((t, idx) => (
                <div key={t.id} className="bg-[#F9FAF6] p-10 md:p-12 rounded-[2.5rem] border-2 border-[#BAC095]/40 shadow-xl hover:border-[#636B2F] transition-all relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#636B2F] font-krub font-black uppercase tracking-[0.3em] text-sm">Test {idx + 1}</span>
                  </div>
                  <p className="italic text-[#3D4127] text-xl md:text-2xl font-medium leading-relaxed mb-4">"{t.content}"</p>
                  <p className="text-[#BAC095] text-xs font-bold uppercase tracking-widest mt-6">Verified Alumni</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. SOCIAL / COMMUNITY */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#BAC095]/10 p-10 rounded-3xl border border-[#BAC095]/20">
            <h4 className="font-krub font-bold text-[#3D4127] uppercase tracking-widest">Join our community of 100k+ learners</h4>
            <div className="flex space-x-12">
              {['YouTube', 'Instagram', 'Facebook'].map(social => (
                <a key={social} href="#" className="font-krub font-black text-[#636B2F] uppercase tracking-tighter text-sm md:text-lg hover:text-[#3D4127] transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOUNDER INTRO */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" className="rounded-[4rem] shadow-2xl grayscale" alt="Founder" />
            </div>
            <div className="md:w-2/3">
              <span className="text-[#636B2F] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Legacy of Excellence</span>
              <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-10 leading-tight">Teaching the Art of Silence & Speech.</h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                Star English was founded on the principle that language is the architecture of your reality. Our mentors are handpicked masters of communication.
              </p>
              <button onClick={() => onNavigate('about')} className="text-[#3D4127] font-bold border-b-2 border-[#3D4127] pb-1 text-xs uppercase tracking-widest">Read Our Philosophy</button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. STATS STRIP */}
      <section className="bg-[#636B2F] py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: 15, suffix: '+', label: 'Years Experience' },
              { val: 2500, suffix: 'k', label: 'Successful Students' },
              { val: 25, suffix: '+', label: 'Expert Mentors' },
              { val: 98, suffix: '%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="font-krub text-5xl md:text-6xl font-bold mb-3">
                  <StatsCounter end={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-[#D4DE95] text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
