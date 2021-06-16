import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './LoginForm.module.css';

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const [{ email, password }, setUser] = useState(initialState);

  const handleChange = ({ target }) => {
    setUser(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));

    setUser(initialState);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
