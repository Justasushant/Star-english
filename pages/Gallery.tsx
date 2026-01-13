import React from 'react';
import LazyVideo from '../components/LazyVideo';

import childExample01 from '../assets/CHILD EXAMPLE 01.mp4';
import childExample02 from '../assets/CHILD EXAMPLE 02.mp4';
import childExample03 from '../assets/CHILD EXAMPLE 03.mp4';
import childExample04 from '../assets/CHILD EXAMPLE 04.mp4';
import childExample05 from '../assets/CHILD EXAMPLE 05.mp4';

const Gallery: React.FC = () => {
  const videos = [
    { src: childExample01, title: 'Child Example 01' },
    { src: childExample02, title: 'Child Example 02' },
    { src: childExample03, title: 'Child Example 03' },
    { src: childExample04, title: 'Child Example 04' },
    { src: childExample05, title: 'Child Example 05' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="font-krub text-4xl md:text-7xl font-bold text-[#202a5d] mb-6 tracking-tighter">Children’s Speaking Gallery</h1>
            <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed">
              Real examples of children’s English speaking tone and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video) => (
              <div
                key={video.title}
                className="bg-[#f5f8ff] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a5b4fc]/10 max-w-[360px] mx-auto w-full"
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
                <div className="p-8">
                  <p className="text-[#202a5d] font-black uppercase tracking-widest text-[10px]">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
