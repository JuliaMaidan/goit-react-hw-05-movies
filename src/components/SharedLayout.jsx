import { NavLink } from 'react-router-dom';
import styles from './app.module.scss';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from './Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <NavLink className={styles.nav__link} to="/" end>
            Home
          </NavLink>
          <NavLink className={styles.nav__link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
