import s from './MainView.module.css';
import { useSelector } from 'react-redux';
import { getIsAuthorized } from '../redux/auth/auth-selectors';
import phoneBook from '../images/phoneBook.jpg';

const MainView = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  return (
    <section className={s.section}>
      <img
        className={s.image}
        src={phoneBook}
        alt="phonebook"
        width="300"
        height="300"
      />
      {isAuthorized ? (
        <h1 className={s.title}>Welcome! 👋</h1>
      ) : (
        <h1 className={s.title}>
          It`s a phonebook App,
          <br /> please login or signup ↗️
        </h1>
      )}
    </section>
  );
};

export default MainView;
