import Contact from '../Contact';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact contact={contact} key={nanoid()} />
      ))}
    </ul>
  );
};
export default ContactList;
