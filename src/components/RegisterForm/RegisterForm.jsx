import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/auth-operations';
import s from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registration({ name, email, password }));
    resetInput();
  };

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h3 className={s.title}>Name</h3>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChangeName}
            placeholder="Name"
            required
          />
        </label>
        <h3 className={s.title}>Email</h3>
        <label>
          <input
            className={s.input}
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
            placeholder="Email"
            required
          />
        </label>
        <h3 className={s.title}>Password</h3>
        <label>
          <input
            className={s.input}
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
            placeholder="Password"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
