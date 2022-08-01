import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FILMS, HEAD_FILM} from './mocks/films';
import { USER } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <App
      headFilm={HEAD_FILM}
      filmCard={FILMS}
      user={USER}
    />
  </React.StrictMode>,
);
