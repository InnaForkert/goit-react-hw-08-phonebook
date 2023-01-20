import Contact from '../Contact';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/filter/filterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/utils/getContacts';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const filtered = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
    <ul className={css.list}>
      {filtered.map(contact => (
        <Contact contact={contact} key={nanoid()} />
      ))}
    </ul></>
  );
};
export default ContactList;
