'use client';
// components/MovieCategories.jsx
import React, { useEffect, useState } from 'react';
import {
  fetchStreamingMovies,
  fetchOnTVMovies,
  fetchForRentMovies,
  fetchInTheatersMovies,
} from '../services/tmdb';
import PopularNav from './PopularNav';
import MovieCard from './MovieCard'; 

const categories = [
  { id: 2, title: 'Popular', href: '/popular' },
  { id: 3, title: 'Streaming', href: '/streaming' },
  { id: 4, title: 'On TV', href: '/on-tv' },
  { id: 5, title: 'For Rent', href: '/for-rent' },
  { id: 6, title: 'In Theaters', href: '/in-theaters' },
];

const MovieCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [movies, setMovies] = useState([]); // تهيئة movies كقائمة فارغة
  const [error, setError] = useState(null); // حالة الخطأ

  const fetchMoviesByCategoryId = async (categoryTitle) => {
    try {
      switch (categoryTitle) {
        case 'Streaming':
          return await fetchStreamingMovies();
        case 'On TV':
          return await fetchOnTVMovies();
        case 'For Rent':
          return await fetchForRentMovies();
        case 'In Theaters':
          return await fetchInTheatersMovies();
        case 'Popular':
            return await fetchPopularMovies();
        default:
          return [];
      }
    } catch (err) {
      setError('Failed to fetch movies'); 
      return [];
    }
  };

  const handleTabChange = (selectedTab) => {
    const category = categories.find(cat => cat.title === selectedTab);
    if (category) {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetchMoviesByCategoryId(selectedCategory.title); 
      setMovies(results || []); 
    };

    fetchMovies();
  }, [selectedCategory]);

  return (
    <section className="my-8">
      <PopularNav tabs={categories.map(cat => cat.title)} onTabChange={handleTabChange} />
      <div className="overflow-x-auto bg-gray-200 p-4 rounded-lg">
        <div className="flex space-x-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} href={selectedCategory.href} />
            ))
          ) : (
            <p className="text-black text-center">No shows found for {selectedCategory.title}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieCategories;
