import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './components/Container/Container';
import NavBar from './Views/NavBar';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const MainView = lazy(() => import('./Views/MainView'));
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const RegisterForm = lazy(() =>
  import('./components/RegisterForm/RegisterForm'),
);
const ContactsView = lazy(() => import('./Views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <Container>
      <NavBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={MainView} />
          <PublicRoute path="/registration" redirectTo="/contacts" restricted>
            <RegisterForm />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginForm />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

//+++ Задеплоить!
