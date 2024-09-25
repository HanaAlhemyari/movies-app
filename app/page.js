// app/page.js
import MovieList from './components/MovieList'; // مكون MovieList لعرض الأفلام
import { fetchTrendingMovies } from './services/tmdb'; // لاستدعاء API

export default async function HomePage() {
  // استدعاء API لجلب الأفلام الشائعة
  const trendingMovies = await fetchTrendingMovies();

  return (
    <div>
      <h1>
        
      </h1>
    </div>
  );
}
