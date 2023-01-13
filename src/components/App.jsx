import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <>
      <Title text="Phonebook" />
      <ContactForm />
      <Filter value={filter} />
      <Title text="Contacts" />
      <ContactList />
    </>
  );
};

export default App;
