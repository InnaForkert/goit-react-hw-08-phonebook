import Contact from '../Contact';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact contact={contact} key={nanoid()} onDelete={onDelete} />
      ))}
    </ul>
  );
};
export default ContactList;
