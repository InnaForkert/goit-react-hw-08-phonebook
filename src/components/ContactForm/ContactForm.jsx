import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

const ContactForm = ({ onSubmit }) => {
  const Error = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p className={css.error} >{message}</p>} />;
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={css.inputContainer}>
          <Field type="text" name="name" key={nanoid()} className={css.input} id='name' placeholder=" " />
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Error name="name" />
        </div>
        <div className={css.inputContainer}>
          <Field type="tel" name="number" key={nanoid()} className={css.input} id='number' placeholder=' ' />
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Error name="number" />
        </div>
        <button type="submit" className={css.submit}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
