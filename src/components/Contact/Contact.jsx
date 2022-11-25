import { nanoid } from 'nanoid';

const Contact = ({ contact, onDelete }) => {
  return (
    <li key={nanoid()}>
      <p>{contact.name}: {contact.number}</p>
      <button type='button' onClick={() => { onDelete(contact.name) }}>Delete</button>
    </li>
  );
};
export default Contact;
