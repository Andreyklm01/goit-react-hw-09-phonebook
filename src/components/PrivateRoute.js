import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getIsAuthorized } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isAuthorized = useSelector(getIsAuthorized);
  return (
    <Route {...routeProps}>
      {isAuthorized ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
