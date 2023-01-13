import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li key={nanoid()}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(removeContact(contact.name))}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
