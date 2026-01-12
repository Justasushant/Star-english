
import React from 'react';
import { BLOG_POSTS } from '../constants';

interface DailyLearningProps {
  type: 'articles' | 'blogs' | 'podcasts' | 'tips';
}

const DailyLearning: React.FC<DailyLearningProps> = ({ type }) => {
  const filteredPosts = BLOG_POSTS.filter(post => {
    if (type === 'articles') return post.type === 'article';
    if (type === 'blogs') return post.type === 'blog';
    if (type === 'podcasts') return post.type === 'podcast';
    if (type === 'tips') return post.type === 'tip';
    return true;
  });

  const titles = {
    articles: 'Academic Rhetoric Articles',
    blogs: 'Language Learning Blogs',
    podcasts: 'Elite Immersion Podcasts',
    tips: 'Linguistic Mastery Tips'
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-[#202a5d] text-white py-24 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
          <span className="text-[#a5b4fc] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Immersion Hub</span>
          <h1 className="font-krub text-5xl md:text-7xl font-bold mb-6 tracking-tighter">{titles[type]}</h1>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            Refine your cadence and vocabulary through curated professional resources.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f5f8ff]">
        <div className="container mx-auto px-6 md:px-12">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#a5b4fc]/5 group">
                  <div className="h-72 overflow-hidden relative">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                    {post.type === 'podcast' && (
                       <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                             <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                          </div>
                       </div>
                    )}
                  </div>
                  <div className="p-10">
                    <div className="flex justify-between items-center mb-6">
                      <span className="bg-[#a5b4fc]/10 text-[#202a5d] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                      <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                    </div>
                    <h3 className="font-krub text-3xl font-bold text-[#202a5d] mb-6 leading-tight group-hover:text-[#3d4ba1] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed font-medium">{post.excerpt}</p>
                    <a href="#" className="text-[#202a5d] font-black uppercase tracking-[0.2em] text-[10px] flex items-center space-x-3 border-b-2 border-[#a5b4fc]/20 pb-2 w-fit hover:border-[#202a5d] transition-all">
                      <span>{post.type === 'podcast' ? 'Listen Now' : 'Read Article'}</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white p-20 rounded-[3rem] text-center shadow-sm border border-gray-100">
               <p className="text-[#202a5d] font-krub text-2xl font-bold opacity-30">Fresh content being curated for this track.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DailyLearning;
