// components/MovieCard.jsx
import React from 'react';
import Link from 'next/link';
const MovieCard = ({ movie, href }) => {
  const { title, release_date, vote_average, poster_path } = movie;

  // احسب نسبة التصويت كنسبة مئوية
  const votePercentage = (vote_average / 10) * 100;

  return (
    <div className="relative block rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105" style={{ width: '130px', height: '230px' }}>
      <div className="w-full h-[180px] overflow-hidden relative">
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/placeholder.png'}
            alt={`${title} Poster`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Rating Circle */}
        <div className="p-1">
          <h3 className="text-black font-semibold text-xs">{title}</h3>
          <p className="text-gray-400 text-xs">{new Date(release_date).getFullYear()}</p>
        </div>
    </div>
  );
};

export default MovieCard;
