import { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }
  render() {
    return (
      <Container>
        <NavBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={MainView} />
            <PublicRoute
              path="/registration"
              component={RegisterForm}
              redirectTo="/contacts"
              restricted
            />
            <PublicRoute
              path="/login"
              component={LoginForm}
              redirectTo="/contacts"
              restricted
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
