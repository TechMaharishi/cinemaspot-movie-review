import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Popular from './pages/Popular';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import PopularWith from './pages/PopularWith';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/popular-with" element={<PopularWith />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
