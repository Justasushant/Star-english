import React from 'react';

const PageSkeleton: React.FC = () => {
  return (
    <div className="min-h-[60vh] bg-white">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="animate-pulse">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-6" />
          <div className="h-4 w-full bg-gray-200 rounded mb-3" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-3" />
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-56 bg-gray-200 rounded-3xl" />
            <div className="h-56 bg-gray-200 rounded-3xl" />
            <div className="h-56 bg-gray-200 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
