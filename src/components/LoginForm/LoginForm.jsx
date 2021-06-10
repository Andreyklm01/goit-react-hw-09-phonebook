import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    resetInput();
  };

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </section>
  );
}
