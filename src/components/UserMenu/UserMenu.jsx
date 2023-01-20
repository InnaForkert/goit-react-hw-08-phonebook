import css from './UserMenu.module.css';

function UserMenu() {
  return (
    <div>
      <p className={css.text}>Name</p>
      <button className={css.submit}>Logout</button>
    </div>
  );
}

export default UserMenu;
