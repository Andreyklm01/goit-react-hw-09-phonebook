import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        {' '}
        Log In{' '}
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        to="/registration"
        className={s.link}
        activeClassName={s.activeLink}
      >
        {' '}
        Sign Up{' '}
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
