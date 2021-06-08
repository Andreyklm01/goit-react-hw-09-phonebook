import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthNav from '../components/AuthNav/AuthNav';
import UserMenu from '../components/UserMenu/UserMenu';
import { getIsAuthorized } from '../redux/auth/auth-selectors';
import s from './NavBar.module.css';

const NavBar = ({ isAutorized }) => (
  <div className={s.navigation}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Main
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      </li>
    </ul>
    {isAutorized ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = state => ({
  isAutorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(NavBar);
