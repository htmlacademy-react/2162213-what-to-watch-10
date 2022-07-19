import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const HeadFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drame',
  yearOfIssue: '2014',
  img: {
    src: 'img/the-grand-budapest-hotel-poster.jpg',
    width: '218',
    height: '327',
  }
};


root.render(
  <React.StrictMode>
    <App
      title={HeadFilm.title}
      genre={HeadFilm.genre}
      yearOfIssue={HeadFilm.yearOfIssue}
      img={HeadFilm.img}
    />
  </React.StrictMode>,
);
