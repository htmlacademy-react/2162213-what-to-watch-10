import MainPage, {HeadFilmMainProps} from '../../pages/main/main.page';


function App(props: HeadFilmMainProps): JSX.Element {
  return (
    <MainPage
      title={props.title}
      genre={props.genre}
      yearOfIssue={props.yearOfIssue}
      img={props.img}
    />
  );
}

export default App;
