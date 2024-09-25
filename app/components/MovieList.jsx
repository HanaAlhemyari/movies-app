// components/MovieList.jsx
'use client'; // Next.js 13+ for client-side rendering

import Link from 'next/link';
import MovieCard from './MovieCard';

const MovieList = ({ movies, herf }) => { // إضافة type كمعامل
  if (!movies || movies.length === 0) {
    return <p className="text-white text-center">No movies found</p>;
  }

  return (
    <div className="flex space-x-4">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <MovieCard movie={movie} href={'/movie'} /> {/* تمرير type إلى MovieCard */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
