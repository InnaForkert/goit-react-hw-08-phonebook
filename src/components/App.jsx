import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const filterNormalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized)
  );

  return (
    <>
      <Title text="Phonebook" />
      <ContactForm />
      <Filter value={filter} />
      <Title text="Contacts" />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default App;
