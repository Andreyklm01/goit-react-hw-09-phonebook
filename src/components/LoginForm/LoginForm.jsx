import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className={s.section}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <h3 className={s.title}>Email</h3>
          <label>
            <input
              className={s.input}
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
