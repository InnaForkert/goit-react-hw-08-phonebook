import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { Link } from 'react-router-dom';

function AppBar() {
  return (
    <div className={css.header}>
      <h1 className={css.logo}>Contact Book</h1>
      <div className={css.buttons}>
        <Link className={css.button} to={'/signup'}>
          Sign Up
        </Link>
        <Link className={css.button} to={'/login'}>
          Log In
        </Link>
        <UserMenu />
      </div>
    </div>
  );
}

export default AppBar;
