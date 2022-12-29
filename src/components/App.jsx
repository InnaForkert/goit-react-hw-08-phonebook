import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactList')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = values => {
    const isInList = contacts.find(contact => contact.name === values.name);
    if (isInList) {
      alert(`${values.name} is already in the list of contacts!`);
    } else {
      setContacts(prevState => [
        { name: values.name, id: nanoid(), number: values.number },
        ...prevState,
      ]);
    }
  };

  const onSearch = e => {
    setFilter(e.target.value);
  };

  const onDelete = name => {
    setContacts(prevState =>
      prevState.filter(contact => contact.name !== name)
    );
  };

  const filterNormalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized)
  );

  return (
    <>
      <Title text="Phonebook" />
      <ContactForm onSubmit={onSubmit} />
      <Filter value={filter} onChange={onSearch} />
      <Title text="Contacts" />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </>
  );
};

export default App;
