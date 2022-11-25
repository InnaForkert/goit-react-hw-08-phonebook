import Contact from '../Contact';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact contact={contact} key={nanoid()} onDelete={onDelete} />
      ))}
    </ul>
  );
};
export default ContactList;
