import s from './MainView.module.css';
import phoneBook from '../images/phoneBook.jpg';

const MainView = () => (
  <section className={s.section}>
    <img
      className={s.image}
      src={phoneBook}
      alt="phonebook"
      width="300"
      height="300"
    />
    <h1 className={s.title}>
      It`s a phonebook App,
      <br /> please login or signup ↗️
    </h1>
  </section>
);

export default MainView;
