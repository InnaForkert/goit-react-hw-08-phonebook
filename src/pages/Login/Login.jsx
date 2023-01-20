import { Link } from 'react-router-dom';
import css from './Login.module.css';

function Login() {
  return (
    <form className={css.form}>
      <label className={css.label} htmlFor="email">
        Email
      </label>
      <input type="email" className={css.input} />
      <label className={css.label} htmlFor="password">
        Password
      </label>
      <input type="password" className={css.input} />
      <button className={css.submit} type="submit">
        Login
      </button>
      <p className={css.text}>Don't have an account yet?</p>
      <Link className={css.submit} to="/signup">
        Sign Up
      </Link>
    </form>
  );
}

export default Login;
