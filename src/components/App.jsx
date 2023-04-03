import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout';
// import styles from './app.module.scss';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const AboutMovie = lazy(() => import('pages/AboutMovie'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));
// import styled from 'styled-components';

export const App = () => {
  // const StyledLink = styled(NavLink)`
  //   text-decoration: none;
  //   color: black;
  //   font-family: Georgia, 'Times New Roman', Times, serif;
  //   font-weight: bold;
  //   font-size: 28px;

  //   &.active {
  //     color: rgb(124, 12, 109);
  //     border-bottom: 3px solid rgb(124, 12, 109);
  //   }
  // `;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:id" element={<AboutMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
