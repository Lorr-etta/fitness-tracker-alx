// src/components/WorkLogs/Exercises.jsx
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchExercises } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = await fetchExercises();
      if (bodyPart !== 'all') {
        exercisesData = exercisesData.filter(ex => ex.category?.name.toLowerCase() === bodyPart.toLowerCase());
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 px-6 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">
              {bodyPart === 'all' ? 'All Exercises' : `${bodyPart} Exercises`}
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Results</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover {exercises.length} carefully curated exercises to help you reach your fitness goals
          </p>
        </div>

        {/* Exercise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentExercises.map((exercise, idx) => (
            <div key={idx} className="flex justify-center">
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {exercises.length > exercisesPerPage && (
          <div className="flex justify-center">
            <Pagination
              color="primary"
              shape="rounded"
              page={currentPage}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              onChange={paginate}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#374151',
                  borderColor: '#e5e7eb',
                  '&:hover': {
                    backgroundColor: '#f97316',
                    color: 'white',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#f97316',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#ea580c',
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Exercises;