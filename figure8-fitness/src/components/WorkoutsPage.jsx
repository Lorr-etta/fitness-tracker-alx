import React, { useState } from 'react';
import Workouts from './WorkLogs/Workouts';
import SearchExercises from './WorkLogs/SearchExercises';
import HorizontalScrollbar from './WorkLogs/HorizontalScrollbar';
import BodyPart from './WorkLogs/BodyPart';
import { Box, Stack, Typography } from '@mui/material';

const WorkoutsPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <Box>
      {/* Main Workouts Section */}
      <Workouts />
      
      {/* Search Exercises Section */}
      <SearchExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      
      {/* Body Parts Horizontal Scroll Section */}
      {bodyParts.length > 0 && (
        <Box sx={{ padding: '20px 0', marginTop: '2rem' }}>
          <Stack sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#1f2937', marginBottom: '0.5rem' }}>
              Target Your <span style={{ color: '#50a963' }}>Goals</span>
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280' }}>
              Select a body part to filter exercises and focus your workout
            </Typography>
          </Stack>
          <Box sx={{ overflowX: 'hidden' }}>
            <HorizontalScrollbar 
              data={bodyParts} 
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              bodyParts={true}
            />
          </Box>
        </Box>
      )}
      
      {/* Exercises Display Section */}
      {exercises.length > 0 && (
        <Stack sx={{ padding: '20px' }}>
          <HorizontalScrollbar 
            data={exercises} 
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            bodyParts={false}
          />
        </Stack>
      )}
    </Box>
  );
};

export default WorkoutsPage;
