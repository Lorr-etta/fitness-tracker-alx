// Fetch exercises from wGER API (English only)
export const fetchExercises = async () => {
  const url = 'https://wger.de/api/v2/exercise/?language=2';
  const res = await fetch(url);
  const data = await res.json();
  return data.results; // array of exercises
};

// YouTube API options (keep if needed, optional)
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
  },
};