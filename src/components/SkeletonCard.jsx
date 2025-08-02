import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="border rounded-xl shadow-lg bg-white p-6 animate-pulse">
      <div className="h-36 bg-gray-300 rounded mb-2 w-full"></div>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
