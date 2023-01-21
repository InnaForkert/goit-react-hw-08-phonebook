import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/utils/getContacts';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li key={nanoid()} className={css.listItem}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(contact))}>
        Delete
      </button>
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
