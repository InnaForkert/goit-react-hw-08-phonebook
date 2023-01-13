import Contact from '../Contact';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact contact={contact} key={nanoid()} />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
