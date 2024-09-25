import { fetchMovieDetails } from '../../services/tmdb'; // دالة جلب تفاصيل الفيلم

// هذا مكون Server Component بشكل افتراضي
export default async function MoviePage({ params }) {
  // جلب بيانات الفيلم بناءً على معرف الفيلم من URL
  const movie = await fetchMovieDetails(params.id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* يمكنك عرض مزيد من التفاصيل هنا بناءً على بيانات الفيلم */}
    </div>
  );
}
