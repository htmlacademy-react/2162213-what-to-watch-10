import {useState} from 'react';
import {Link} from 'react-router-dom';

export interface IFilmCardProps {
  id: number;
  title: string;
  genre: string;
  yearOfIssue: string;
  rating: string;
  description: string;
  director: string;
  starring: string[];
  img: {
    src: string;
    width: string;
    height: string;
  };
  linkPage: string;
  videoSrc: string;
}

function FilmCardComponent(props: { filmCard: IFilmCardProps }): JSX.Element {
  const [selectedFilm, setSelectedFilm] = useState<number | null>( null);
  const handleSelectedFilm = () => setSelectedFilm(props.filmCard.id);
  // eslint-disable-next-line no-console
  console.log(selectedFilm);
  // Выключение линтера для console.log обусловленно тем, что переменая selectedFilm - не используется
  return (
    <article onMouseOver={handleSelectedFilm} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={props.filmCard.img.src}
          alt={props.filmCard.title} width={props.filmCard.img.width} height={props.filmCard.img.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`films/${props.filmCard.linkPage}`}
          key={props.filmCard.id}
        >
          {props.filmCard.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCardComponent;
