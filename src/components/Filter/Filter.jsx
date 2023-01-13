import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/reducers';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
