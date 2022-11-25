import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css'


const Filter = ({ value, onChange }) => {
  return (
    <div className={css.inputContainer}>


      <input
        type="text"
        name="filter"
        id={nanoid()}
        value={value}
        onChange={onChange}
        className={css.input}
        placeholder=' '
      />
      <label className={css.label}>
        Search:
      </label>
    </div>
  );
};
export default Filter;
