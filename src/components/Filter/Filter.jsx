import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Search:
      <input
        type="text"
        name="filter"
        id={nanoid()}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
