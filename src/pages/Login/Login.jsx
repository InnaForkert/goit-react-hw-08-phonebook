import { Link, useNavigate } from 'react-router-dom';
import css from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/utils/createUser';
import { selectIsLoggedIn } from 'redux/user/userSlice';
import { useEffect } from 'react';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    const user = {
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    };
    if (!user.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      alert('Invalid email!');
    } else {
      dispatch(loginUser(user));
    }
  }

  return (
    <form className={css.form} onSubmit={handleLogin}>
      <label className={css.label} htmlFor="email">
        Email
      </label>
      <input type="email" className={css.input} />
      <label className={css.label} htmlFor="password">
        Password
      </label>
      <input type="password" className={css.input} minLength="8" />
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
