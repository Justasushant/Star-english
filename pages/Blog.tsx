
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-white py-24 border-b border-[#BAC095]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="font-krub text-5xl md:text-7xl font-bold text-[#3D4127] mb-6">The Star Journal</h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Insights on communication, language learning, and personal growth from our expert faculty.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F9FAF6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <img src={post.image} className="w-full h-72 object-cover" alt={post.title} />
                <div className="p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#D4DE95] text-[#3D4127] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{post.category}</span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-krub text-3xl font-bold text-[#3D4127] mb-6 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-2">{post.excerpt}</p>
                  <a href="#" className="text-[#636B2F] font-bold uppercase tracking-widest text-sm flex items-center space-x-2 border-b-2 border-[#636B2F] pb-1 w-fit">
                    Read Article
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
