// services/tmdb.js
const API_KEY = '7945a4965e711e4f191d5e4b9e0274ce';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
}

export const fetchTrendingTVShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending TV shows');
    }
    const data = await response.json();
    return data.results; // ارجع قائمة العروض التلفزيونية
  } catch (error) {
    console.error('Error fetching trending TV shows:', error);
    return []; // ارجع مصفوفة فارغة في حالة حدوث خطأ
  }
};

export async function fetchLatestTrailers() {
  const res = await fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results; 
}

export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchStreamingMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&with_watch_providers=8`); // 8 كمثال لمزود البث
  const data = await res.json();
  return data.results;
}

export async function fetchOnTVMovies() {
  const res = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchForRentMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); // هذا مجرد مثال، يجب أن تقوم بتحديثه حسب ما يتطلبه API للإيجار
  const data = await res.json();
  return data.results;
}

export async function fetchInTheatersMovies() {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchSearchResults(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
}
