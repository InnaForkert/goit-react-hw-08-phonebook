import { Link, useNavigate } from 'react-router-dom';
import css from './SignUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'redux/utils/createUser';
import { selectIsLoggedIn } from 'redux/user/userSlice';
import { useEffect } from 'react';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  function handleSignUp(e) {
    e.preventDefault();
    const user = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      password: e.target.elements[2].value,
    };
    if (!user.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      alert('Invalid email!');
    } else {
      dispatch(createUser(user));
    }
  }

  return (
    <form className={css.form} onSubmit={handleSignUp}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input type="text" className={css.input} />
      <label className={css.label} htmlFor="email">
        Email
      </label>
      <input type="email" className={css.input} />
      <label className={css.label} htmlFor="password">
        Password
      </label>
      <input type="password" className={css.input} minLength="8" />
      <button className={css.submit} type="submit">
        Sign Up
      </button>
      <p className={css.text}>Already have an account?</p>
      <Link to="/login" className={css.submit}>
        Login
      </Link>
      {isLoggedIn && <p>Success!</p>}
    </form>
  );
}

export default SignUp;
