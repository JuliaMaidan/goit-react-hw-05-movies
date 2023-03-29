import { Link } from 'react-router-dom';
import styles from './trending.module.scss';

const Trending = ({ movies }) => {
  return (
    <>
      {movies.map(({ id, title, name }) => (
        <li className={styles.item} key={id}>
          <Link className={styles.link} to={`/movies/${id}`}>
            {title ?? name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Trending;
