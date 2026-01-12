import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
          <h1 className="font-krub text-5xl md:text-7xl font-bold text-[#202a5d] mb-6 tracking-tighter">The Star Journal</h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Insights on communication, language learning, and personal growth from our expert faculty.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f5f8ff]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#a5b4fc]/5 group">
                <div className="h-72 overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#a5b4fc]/10 text-[#202a5d] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                    <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                  </div>
                  <h3 className="font-krub text-3xl font-bold text-[#202a5d] mb-6 leading-tight group-hover:text-[#3d4ba1] transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed font-medium">{post.excerpt}</p>
                  <a href="#" className="text-[#202a5d] font-black uppercase tracking-[0.2em] text-[10px] flex items-center space-x-3 border-b-2 border-[#a5b4fc]/20 pb-2 w-fit hover:border-[#202a5d] transition-all">
                    <span>Read Article</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;