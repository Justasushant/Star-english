import React from 'react';
import { SUCCESS_STORIES } from '../constants';

const Results: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-[#202a5d] text-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="font-krub text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Alumni Success</h1>
          <p className="text-xl text-[#a5b4fc] opacity-90 max-w-2xl font-medium leading-relaxed">
            Where brilliance meets opportunity. Our graduates don't just find jobs; they redefine their respective fields.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg border border-gray-100">
                  <img src={story.image} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" alt={story.name} />
                  <div className="absolute inset-0 bg-[#202a5d] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="font-krub text-2xl font-bold text-[#202a5d] mb-2">{story.name}</h3>
                <p className="text-[#3d4ba1] font-bold uppercase tracking-widest text-xs mb-4">{story.achievement}</p>
                <p className="text-gray-600 leading-relaxed italic">"{story.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;