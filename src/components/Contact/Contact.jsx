import { nanoid } from 'nanoid';

const Contact = ({ contact }) => {
  return (
    <li key={nanoid()}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </li>
  );
};
export default Contact;
