import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getIsAuthorized } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isAuthorized = useSelector(getIsAuthorized);
  return (
    <Route {...routeProps}>
      {isAuthorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
