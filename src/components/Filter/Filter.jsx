import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        name="filter"
        id={nanoid()}
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        className={css.input}
        placeholder=" "
      />
      <label className={css.label}>Search:</label>
    </div>
  );
};
export default Filter;
