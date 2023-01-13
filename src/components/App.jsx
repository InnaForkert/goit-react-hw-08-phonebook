import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';

const App = () => {
  return (
    <>
      <Title text="Phonebook" />
      <ContactForm />
      <Filter />
      <Title text="Contacts" />
      <ContactList />
    </>
  );
};

export default App;
