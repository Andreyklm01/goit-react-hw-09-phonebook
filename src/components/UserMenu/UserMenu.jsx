import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout(userName));
  };
  return (
    <div className={s.menu}>
      <p className={s.text}>Welcome, {userName}</p>
      <button type="button" onClick={onLogout} className={s.button}>
        Logout
      </button>
    </div>
  );
}
