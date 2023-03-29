import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';

const AboutMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location.state);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovieById(id);
      setMovies(data);
      // console.log(data);
      setIsLoading(true);
    }
    // setIsLoading(false);
    fetchMovies();
  }, [id]);

  return (
    <div>
      <button>
        <Link to="/movies">Back to products</Link>;
      </button>
      {!isLoading && <h1>Loading</h1>}
      {isLoading && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w780/${movies.backdrop_path}`}
            alt={movies.title}
            height="200"
          />
          <h2>
            {movies.title ?? movies.name} ({movies.release_date})
          </h2>
          <p>User score: {movies.vote_average}</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movies.genres.map(({ name }) => (
              <li key={name}>{name},</li>
            ))}
          </ul>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`/movies/${id}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${id}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default AboutMovie;
