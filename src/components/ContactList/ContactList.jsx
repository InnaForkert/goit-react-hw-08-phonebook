import Contact from '../Contact';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterReducer';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtered = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filtered.map(contact => (
        <Contact contact={contact} key={nanoid()} />
      ))}
    </ul>
  );
};
export default ContactList;
