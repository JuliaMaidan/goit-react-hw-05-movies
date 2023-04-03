import { getSearchedMovies } from '../components/services/fetchMovies';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './movies.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    async function fetchMovies() {
      const data = await getSearchedMovies(search);
      setMovies(data.results);
      navigate(`/movies?query=${search}`, { replace: true });

      if (data.results.length === 0) {
        return toast.error('We don`t have any matches(');
      }
    }
    fetchMovies();
    e.reset();
  };

  const elements = movies.map(({ title, name, id }) => (
    <li className={styles.item} key={id}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title ?? name}
      </Link>
    </li>
  ));

  return (
    <div>
      <form className={styles.form} action="submit">
        <input className={styles.input} type="text" onChange={handleChange} />
        <button className={styles.btn} onClick={handleSubmit}>
          <Link to={`/movies?query=${search}`}>
            <FaSearch className={styles.btnLabel} />
          </Link>
        </button>
      </form>
      <ul className={styles.list}>{elements}</ul>
      <ToastContainer />
    </div>
  );
};

export default Movies;
