import { connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.menu}>
    <p className={s.text}>Welcome, {name}</p>
    <button type="button" onClick={onLogout} className={s.button}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
