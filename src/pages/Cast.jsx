import { useParams, Link } from 'react-router-dom';
import { getCast } from 'components/services/fetchMovies';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const data = await getCast(id);
      setCast(data);
      setIsLoading(true);
      console.log(data);
    }
    fetchCast();
  }, [id]);

  return (
    <div>
      <Link to={`/movies/${id}`}>
        <button>Back</button>
      </Link>
      {!isLoading && <h1>Loading</h1>}
      {isLoading && (
        <div>
          <h1>CAST</h1>
          <ul>
            {cast.cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${profile_path}`}
                  alt={name}
                  height="150"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Cast;
