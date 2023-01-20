import { Link } from 'react-router-dom';
import css from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/utils/createUser';

function SignUp() {
  const dispatch = useDispatch();

  function handleSignUp(e) {
    e.preventDefault();
    const user = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      password: e.target.elements[2].value,
    };
    dispatch(createUser(user));
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
      <input type="password" className={css.input} />
      <button className={css.submit} type="submit">
        Sign Up
      </button>
      <p className={css.text}>Already have an account?</p>
      <Link to="/login" className={css.submit}>
        Login
      </Link>
    </form>
  );
}

export default SignUp;
