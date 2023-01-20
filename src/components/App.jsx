import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import CircleLoader from "react-spinners/ClipLoader";
import { selectIsLoading } from 'redux/contacts/contactsSlice';

const override = {
  position: 'absolute',
  top: '42%',
  left: '45%',
  display: "block",
};

const App = () => {
  const loading = useSelector(selectIsLoading);
  return (
    <>
      <Title text="Phonebook" />
      <ContactForm />
      <Filter />
      <Title text="Contacts" />
      <ContactList />
      <CircleLoader
      cssOverride={override}
        color={'black'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default App;
