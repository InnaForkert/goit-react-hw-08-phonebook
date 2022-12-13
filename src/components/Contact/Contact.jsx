import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Contact = ({ contact, onDelete }) => {
  return (
    <li key={nanoid()}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDelete(contact.name);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};
