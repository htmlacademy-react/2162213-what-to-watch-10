import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';

interface IPrivateRoutes {
  isAuth: AuthStatus;
  children: JSX.Element;
}

function PrivateRoutes(props: IPrivateRoutes): JSX.Element {
  const { isAuth, children } = props;
  return (
    isAuth === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoutes;
