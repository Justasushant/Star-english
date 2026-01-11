
import React from 'react';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: '2010',
      title: 'The Humble Beginning',
      description: 'Star English was founded in a small quiet studio with just five students and a single vision: to refine local communication skills to a global standard.'
    },
    {
      year: '2014',
      title: 'Academic Accreditation',
      description: 'After four years of rigorous curriculum development, we received official accreditation for our proprietary "Rhetoric Mastery" methodology.'
    },
    {
      year: '2017',
      title: 'The Voice Labs',
      description: 'We opened our first state-of-the-art Voice & Presence Labs, allowing students to record and analyze their speech with professional precision.'
    },
    {
      year: '2020',
      title: 'Global Pivot',
      description: 'Responding to global changes, we launched our Elite Hybrid Coaching, connecting local talent with international articulation mentors virtually.'
    },
    {
      year: '2023',
      title: 'Executive Leadership Hub',
      description: 'Recognition as the region\'s premier communication hub for CEOs and rising leaders, launching our signature "Executive Presence" suite.'
    },
    {
      year: '2024',
      title: 'The Star Legacy',
      description: 'Celebrating 14 years of excellence with over 2,500 alumni who are now leading in diverse fields globally.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-[#F9FAF6] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="font-krub text-5xl md:text-8xl font-bold text-[#3D4127] mb-8">The Star Philosophy</h1>
            <p className="text-xl md:text-3xl text-gray-600 font-light leading-relaxed">
              At Star English, we believe that true mastery is the refinement of one's voice through discipline, specialized coaching, and constant practice.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey Section - Vertical Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="font-krub text-4xl md:text-6xl font-bold text-[#3D4127] mb-6">Our Journey</h2>
            <p className="text-[#636B2F] font-bold uppercase tracking-[0.3em] text-xs">Chronicles of Excellence</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#BAC095]/30 md:-translate-x-1/2"></div>

            <div className="space-y-24">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#636B2F] border-4 border-white rounded-full -translate-x-1/2 z-10 shadow-sm"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-[#F9FAF6] p-8 rounded-[2rem] shadow-sm border border-[#BAC095]/20 hover:border-[#636B2F]/40 transition-colors group">
                      <span className="font-krub text-3xl font-black text-[#636B2F] mb-4 block group-hover:text-[#3D4127] transition-colors">{event.year}</span>
                      <h3 className="font-krub text-2xl font-bold text-[#3D4127] mb-4">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium opacity-90">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Year Display for opposite side (desktop) */}
                  <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? 'pl-16 text-left' : 'pr-16 text-right'}`}>
                    <span className="font-krub text-7xl font-black text-[#BAC095]/20 uppercase select-none">{event.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy and Mission Footer Section */}
      <section className="py-32 bg-[#3D4127] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-krub text-4xl font-bold mb-8 uppercase tracking-widest text-[#D4DE95]">A Legacy of Learning</h2>
              <p className="text-[#BAC095] mb-6 leading-relaxed text-lg">
                Founded to serve our local community, Star English has grown into a beacon of educational excellence. We pride ourselves on small class sizes and personalized attention that larger institutions cannot provide.
              </p>
              <p className="text-[#BAC095] mb-12 leading-relaxed opacity-80">
                Our curriculum is crafted by seasoned educators who understand that every student has a unique path to mastery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-[#636B2F]/20 rounded-2xl border border-white/10">
                  <h4 className="font-krub font-bold text-xl text-[#D4DE95] mb-4 uppercase tracking-tighter">Vision</h4>
                  <p className="text-sm text-[#BAC095]">To empower every local student with the tools for world-class communication.</p>
                </div>
                <div className="p-8 bg-[#636B2F]/20 rounded-2xl border border-white/10">
                  <h4 className="font-krub font-bold text-xl text-[#D4DE95] mb-4 uppercase tracking-tighter">Mission</h4>
                  <p className="text-sm text-[#BAC095]">Cultivating confidence and articulation through expert, bespoke language coaching.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                alt="Star English Environment"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#D4DE95] p-8 rounded-3xl hidden md:block">
                <span className="font-krub text-4xl font-black text-[#3D4127]">14+</span>
                <p className="text-[#3D4127] font-bold text-xs uppercase tracking-widest">Years of Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
