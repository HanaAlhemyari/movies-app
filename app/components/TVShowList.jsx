// components/TVShowList.jsx

import React from 'react';
import MovieCard from './MovieCard';

const TVShowList = ({ shows, herf }) => {
  if (!shows || shows.length === 0) {
    return <p className="text-white text-center">No TV shows found</p>;
  }

  return (
    <div className="flex space-x-4">
      {shows.map((show) => (
        <div key={show.id}>
          <MovieCard movie={show} herf={'/tv'} /> {/* تمرير النوع هنا */}
        </div>
      ))}
    </div>
  );
};

export default TVShowList;
