import AppBar from 'components/AppBar/AppBar';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title';
import { useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/contacts/contactsSlice';
import { selectIsLoggedIn } from 'redux/user/userSlice';
import css from './MainPage.module.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const override = {
  position: 'absolute',
  top: '42%',
  left: '45%',
  display: 'block',
};

function MainPage() {
  const loading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <AppBar />
      {isLoggedIn ? (
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
      ) : (
        <h2 className={css.text}>Please authorize to proceed</h2>
      )}
    </>
  );
}

export default MainPage;
