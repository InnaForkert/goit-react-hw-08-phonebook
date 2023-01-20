import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/utils/getContacts';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li key={nanoid()}>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact))}
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
