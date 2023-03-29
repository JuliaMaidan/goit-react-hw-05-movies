import { getSearchedMovies } from '../components/services/fetchMovies';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './movies.module.scss';
import { FaSearch } from 'react-icons/fa';

const Movies = () => {
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
      console.log(data);
    }
    fetchMovies();
    console.log(movies.results);
  };

  const elements = movies.map(({ title, name, id }) => (
    <li className={styles.item} key={id}>
      <Link className={styles.link} to={`/movies/${id}`}>
        {title ?? name}
      </Link>
    </li>
  ));

  return (
    <div>
      <form className={styles.form} action="submit">
        <input className={styles.input} type="text" onChange={handleChange} />
        <button className={styles.btn} onClick={handleSubmit}>
          <FaSearch className={styles.btnLabel} />
        </button>
      </form>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default Movies;
