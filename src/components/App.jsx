import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import styled from 'styled-components';
import AboutMovie from 'pages/AboutMovie';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import styles from './app.module.scss';

export const App = () => {
  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 28px;

    &.active {
      color: rgb(124, 12, 109);
      border-bottom: 3px solid rgb(124, 12, 109);
    }
  `;

  return (
    <div>
      <nav className={styles.nav}>
        <StyledLink className={styles.nav__link} to="/" end>
          Home
        </StyledLink>
        <StyledLink className={styles.nav__link} to="/movies">
          Movies
        </StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:id" element={<AboutMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
