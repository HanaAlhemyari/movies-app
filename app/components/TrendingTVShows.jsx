
// components/TrendingTVShows.jsx

import React from 'react';
import TVShowList from './TVShowList'; // Assume you have created this component
import { fetchTrendingTVShows } from '../services/tmdb'; // Assume you have a service to fetch shows

const TrendingTVShows = async () => {
  const trendingTVShows = await fetchTrendingTVShows();

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-white mb-4">Trending TV Shows</h2>
      <div className="mb-4">
      </div>
      <div className="overflow-x-auto bg-gray-200 p-4 rounded-lg">
        <TVShowList shows={trendingTVShows} />
      </div>
    </section>
  );
};

export default TrendingTVShows;
