// app/layout.js
import "./styles/globals.css"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import TrendingMovies from "./components/TrendingMovies"; 
import TrendingTVShows from "./components/TrendingTVShows"; 
import MovieCategories from "./components/MovieCategories";
import ThemeToggle from './components/ThemeToggle';

export const metadata = {
  title: "TMDB App",
  description: "Explore a vast collection of movies and TV shows. Discover detailed information, watch trailers, and stay updated with the latest releases in the world of entertainment. Your ultimate destination for cinematic knowledge",
};

const Layout = ({ children }) => {
  const dropdownItems = {
    Movies: [
      { label: 'Popular', href: '/movies/popular' },
      { label: 'Now Playing', href: '/movies/now-playing' },
      { label: 'Upcoming', href: '/movies/upcoming' },
      { label: 'Top Rated', href: '/movies/top-rated' },
    ],
    TvShows: [
      { label: 'Popular', href: '/tvshows/popular' },
      { label: 'Airing Now', href: '/tvshows/airing-now' },
      { label: 'On TV', href: '/tvshows/on-tv' },
      { label: 'Top Rated', href: '/tvshows/top-rated' },
    ],
    People: [
      { label: 'Popular People', href: '/people/popular' },
    ],
    More: [
      { label: 'Discussions', href: '/discussions' },
      { label: 'Leaderboard', href: '/leaderboard' },
      { label: 'Sport', href: '/sport' },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className=" text-white"> 
      <ThemeToggle /> {/*Dark Mood */}

        <Header dropdownItems={dropdownItems} />
        <main className="p-4">
          <div className="bg-gray-800 min-h-screen p-4">
            <TrendingMovies />
            <TrendingTVShows />
            <MovieCategories />
            {children} 
          </div>
        </main>
        <Footer /> 
      </body>
    </html>
  );
};

export default Layout;
