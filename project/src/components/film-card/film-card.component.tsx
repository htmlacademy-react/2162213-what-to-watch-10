export interface FilmCardProps {
  title: string;
  img: {
    src: string;
    width: string;
    height: string;
  };
  linkPage: string;
}

function FilmCardComponent(props: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={props.img.src}
          alt={props.title} width={props.img.width} height={props.img.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.linkPage}>
          {props.title}
        </a>
      </h3>
    </article>
  );
}

export default FilmCardComponent;
