// src/components/WorkLogs/ExerciseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FallbackImg from '../../assets/images/workout.jpg';

const ExerciseCard = ({ exercise = {} }) => {
  const { id, name, category, muscleNames = [], imageUrl } = exercise;
  const primaryMuscle = muscleNames[0] || '—';
  const categoryName = category?.name || 'General';
  const imgSrc = imageUrl || exercise.gifUrl || FallbackImg;

  return (
    <Link to={`/exercise/${id || ''}`} className="exercise-card group" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="relative overflow-hidden">
        <img
          src={imgSrc}
          alt={name || 'exercise'}
          loading="lazy"
          className="w-full h-[180px] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold text-white bg-[#50a963]">{categoryName}</span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold text-white bg-orange-500">{primaryMuscle}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-[18px] md:text-[20px] leading-snug capitalize line-clamp-2">{name || 'Exercise'}</h3>
      </div>
    </Link>
  );
};

export default ExerciseCard;