import MainPage, {HeadFilmMainProps} from '../../pages/main/main.page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorNotFound from '../../pages/error-not-found/error-not-found';
import {AppRoute, AuthStatus} from '../../const';
import SignInPage from '../../pages/sign-in/sign-in.page';
import PrivateRoutes from '../private-routes/private-routes';
import MyListPage from '../../pages/my-list/my-list.page';
import MoviePage from '../../pages/movie/movie.page';
import AddReviewPage from '../../pages/add-review/add-review.page';
import PlayerPage from '../../pages/player/player.page';


function App(props: HeadFilmMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              title={props.title}
              genre={props.genre}
              yearOfIssue={props.yearOfIssue}
              img={props.img}
            />
          }
        />
        <Route path={AppRoute.Login} element={<SignInPage/>} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoutes isAuth={AuthStatus.NoAuth}>
              <MyListPage/>
            </PrivateRoutes>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage/>} />
        <Route path={AppRoute.AddReview} element={<AddReviewPage/>} />
        <Route path={AppRoute.Player} element={<PlayerPage/>} />
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
