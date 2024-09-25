// components/TrendingMovies.jsx

import MovieList from './MovieList'; 
import { fetchTrendingMovies } from '../services/tmdb'; 

const TrendingMovies = async () => {
  const trendingMovies = await fetchTrendingMovies();

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-white mb-4">Trending Movies</h2>
      <div className="overflow-x-auto bg-gray-200 p-4 rounded-lg">
        <MovieList movies={trendingMovies} />
      </div>
    </section>
  );
};

export default TrendingMovies;
