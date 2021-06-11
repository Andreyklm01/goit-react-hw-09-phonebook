import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from '../components/AuthNav/AuthNav';
import UserMenu from '../components/UserMenu/UserMenu';
import { getIsAuthorized } from '../redux/auth/auth-selectors';
import s from './NavBar.module.css';

export default function NavBar() {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <div className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
          >
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
      {isAuthorized ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
