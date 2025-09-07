import React, { useState } from 'react';

const ExerciseCard = ({ exercise }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback image for when exercise image is not available
  const fallbackImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  
  // Get exercise image or use fallback
  const exerciseImage = imageError || !exercise.imageUrl ? fallbackImage : exercise.imageUrl;
  
  // Extract exercise information
  const exerciseName = exercise.name || 'Unknown Exercise';
  const categoryName = exercise.category?.name || 'General';
  const muscleNames = exercise.muscleNames && exercise.muscleNames.length > 0 
    ? exercise.muscleNames.slice(0, 2).join(', ') 
    : 'Full Body';

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="exercise-card group bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden border border-gray-100 min-w-[280px] max-w-[320px] mx-auto">
      {/* Image Container with Animation */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Pulsing loading animation */}
            <div className="animate-pulse flex space-x-1">
              <div className="rounded-full bg-orange-400 h-2 w-2 animate-bounce"></div>
              <div className="rounded-full bg-red-400 h-2 w-2 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="rounded-full bg-green-400 h-2 w-2 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}
        
        <img
          src={exerciseImage}
          alt={exerciseName}
          className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Floating motion indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg animate-bounce">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Motion waves overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Exercise Name with motion effect */}
        <h3 className="font-bold text-lg text-gray-900 capitalize leading-tight group-hover:text-orange-600 transition-colors duration-300 transform group-hover:scale-[1.02]">
          {exerciseName.toLowerCase()}
        </h3>

        {/* Category Badge */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
            {categoryName}
          </span>
        </div>

        {/* Target Muscles with animated icons */}
        <div className="flex items-center space-x-2 text-gray-600">
          <div className="flex items-center group-hover:animate-pulse">
            {/* Muscle icon */}
            <svg 
              className="w-4 h-4 text-red-500 mr-1 group-hover:text-red-600 transition-colors duration-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 2L13.09 8.26L20 9L14 14.74L15.18 21L10 18L4.82 21L6 14.74L0 9L6.91 8.26L10 2Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium capitalize">{muscleNames.toLowerCase()}</span>
          </div>
        </div>

        {/* Exercise Motion Indicator */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="ml-2 group-hover:text-orange-600 transition-colors duration-300">Motion Active</span>
          </div>

          {/* Hover CTA */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span className="text-xs font-semibold text-green-600 border-b border-green-300 hover:border-green-500 cursor-pointer">
              View Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
