import { useParams, Link } from 'react-router-dom';
import { getReviews } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const data = await getReviews(id);
      setReviews(data);
      setIsLoading(true);
      // console.log(data);
    }
    fetchReviews();
  }, [id]);

  return (
    <div>
      <Link to={`/movies/${id}`}>
        <button>Back</button>
      </Link>
      {!isLoading && <h1>Loading</h1>}
      {isLoading && (
        <div>
          <ul>
            {reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Reviews;
