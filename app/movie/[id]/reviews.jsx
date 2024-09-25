// app/movie/[id]/reviews/page.js
import { fetchMovieReviews } from '../../../services/tmdb';

export default function MovieReviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
          <small>By {review.author}</small>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const reviews = await fetchMovieReviews(id);
  return { props: { reviews } };
}
