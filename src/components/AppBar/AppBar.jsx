import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/userSlice';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.header}>
      <h1 className={css.logo}>Contact Book</h1>
      <div className={css.buttons}>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <Link className={css.button} to={'/signup'}>
              Sign Up
            </Link>
            <Link className={css.button} to={'/login'}>
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default AppBar;
