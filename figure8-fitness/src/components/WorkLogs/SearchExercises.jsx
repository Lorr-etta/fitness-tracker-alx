// src/components/WorkLogs/SearchExercises.jsx
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchExercises } from '../../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ exercises, setExercises, bodyPart, setBodyPart, bodyParts, setBodyParts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clicked, setClicked] = useState(false);

  // helper to make exercises unique by id
  const uniqueById = (arr = []) => {
    const map = new Map();
    for (const ex of arr) {
      if (!map.has(ex.id)) map.set(ex.id, ex);
    }
    return Array.from(map.values());
  };

  // Fetch exercises and body parts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const exercisesData = await fetchExercises();
        const cleanExercises = uniqueById(exercisesData.filter(ex => ex.name));
        setExercises(cleanExercises); // store all exercises
        const res = await fetch('https://wger.de/api/v2/exercisecategory/');
        const bodyPartsData = await res.json();
        // Normalize names (lowercase), de-duplicate; display capitalization handled by CSS
        const unique = Array.from(
          new Set(
            (bodyPartsData.results || []).map(bp => (bp.name || '').toLowerCase().trim())
          )
        ).filter(Boolean);
        setBodyParts(['all', ...unique]);
      } catch (error) {
        console.error('Error fetching exercises or body parts:', error);
      }
    };
    fetchData();
  }, [setExercises, setBodyParts]);

  const handleChange = e => setSearchTerm(e.target.value);

  const handleSearch = () => {
    if (!searchTerm) return;

    // Filter exercises safely
    const searchedExercises = uniqueById((exercises || []).filter(ex => {
      const term = searchTerm.toLowerCase();
      return (
        (ex.name && ex.name.toLowerCase().includes(term)) ||
        (ex.category?.name && ex.category.name.toLowerCase().includes(term))
      );
    }));

    setExercises(searchedExercises);
    setSearchTerm('');
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" width="100%" maxWidth="600px">
        <TextField
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Exercises"
          sx={{ backgroundColor: '#ffe5e5ff', color: '#3f3b3b' }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            backgroundColor: '#f1f1f1',
            color: '#FF4500',
            borderRadius: '12px',
            border: '2px solid rgb(79, 152, 79)',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            transform: clicked ? 'translateX(10px) scale(1.05)' : 'translateX(0) scale(1)',
            '&:hover': {
              backgroundColor: '#f1bcfc',
              transform: clicked
                ? 'translateX(10px) scale(1.05)'
                : 'translateX(0) scale(1.05)',
            },
          }}
        >
          Search
        </Button>
      </Box>

      {/* Removed internal body parts scrollbar to avoid duplication; using Goals section instead */}
    </Stack>
  );
};

export default SearchExercises;