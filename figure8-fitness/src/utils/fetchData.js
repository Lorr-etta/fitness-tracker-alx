// Enhanced WGER fetch: exercises (EN), categories, muscles, and images
export const fetchExercises = async () => {
  const base = 'https://wger.de/api/v2';
  const exercisesUrl = `${base}/exercise/?language=2&status=2&limit=200`; // status=2 (verified), EN only
  const categoriesUrl = `${base}/exercisecategory/?limit=200`;
  const musclesUrl = `${base}/muscle/?limit=200`;
  const imagesUrl = `${base}/exerciseimage/?limit=500`;

  const [exRes, catRes, musRes, imgRes] = await Promise.all([
    fetch(exercisesUrl),
    fetch(categoriesUrl),
    fetch(musclesUrl),
    fetch(imagesUrl),
  ]);

  const [exData, catData, musData, imgData] = await Promise.all([
    exRes.json(),
    catRes.json(),
    musRes.json(),
    imgRes.json(),
  ]);

  const catMap = new Map((catData.results || []).map(c => [c.id, c.name]));
  const muscleMap = new Map((musData.results || []).map(m => [m.id, m.name]));

  // Map exercise id -> first (main) image
  const imageMap = new Map();
  for (const img of (imgData.results || [])) {
    if (!imageMap.has(img.exercise)) {
      imageMap.set(img.exercise, img.image);
    }
  }

  const results = (exData.results || []).map(ex => {
    const primaryMuscles = Array.isArray(ex.muscles) ? ex.muscles : [];
    const secondaryMuscles = Array.isArray(ex.muscles_secondary) ? ex.muscles_secondary : [];
    const muscleNames = [...primaryMuscles, ...secondaryMuscles]
      .map(id => muscleMap.get(id))
      .filter(Boolean);

    return {
      ...ex,
      category: typeof ex.category === 'number'
        ? { id: ex.category, name: catMap.get(ex.category) || 'Unknown' }
        : ex.category,
      muscleNames,
      imageUrl: imageMap.get(ex.id) || null,
    };
  });

  return results;
};

// YouTube API options (keep if needed, optional)
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
  },
};