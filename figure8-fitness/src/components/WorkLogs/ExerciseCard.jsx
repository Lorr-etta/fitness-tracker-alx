// src/components/WorkLogs/ExerciseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import FallbackImg from '../../assets/images/workout.jpg';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img
      src={exercise.gifUrl || FallbackImg}
      alt={exercise.name || 'exercise'}
      loading="lazy"
    />
    <Stack direction="row" mt="10px" gap={1}>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#50a963',
          fontSize: '12px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          '&:hover': { background: '#3e8a50' }
        }}
      >
        {exercise.bodyPart || 'body'}
      </Button>
      <Button
        sx={{
          color: '#fff',
          background: 'orangered',
          fontSize: '12px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          '&:hover': { background: '#cc3a00' }
        }}
      >
        {exercise.target || 'target'}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '22px', xs: '18px' } }}
      mt="11px"
      pb="14px"
      textTransform="capitalize"
    >
      {exercise.name || 'Exercise'}
    </Typography>
  </Link>
);

export default ExerciseCard;