import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const Error = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p className={css.error}>{message}</p>}
      />
    );
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
    number: yup
      .string()
      .required()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  function handleSubmit(values, options) {
    const isInList = contacts.find(contact => contact.name === values.name);
    if (isInList) {
      alert(`${values.name} is already in the list of contacts!`);
    } else {
      dispatch(
        addContact({
          name: values.name,
          id: nanoid(),
          number: values.number,
        })
      );
    }
    options.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.inputContainer}>
          <Field
            type="text"
            name="name"
            key={nanoid()}
            className={css.input}
            id="name"
            placeholder=" "
          />
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Error name="name" />
        </div>
        <div className={css.inputContainer}>
          <Field
            type="tel"
            name="number"
            key={nanoid()}
            className={css.input}
            id="number"
            placeholder=" "
          />
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Error name="number" />
        </div>
        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
