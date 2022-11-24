import { Component } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
  };

  onSubmit = (values, options) => {
    this.setState(prevState => ({
      contacts: [
        { name: values.name, id: nanoid(), number: values.number },
        ...prevState.contacts,
      ],
    }));
  };

  render() {
    const Error = ({ name }) => {
      return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
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
      number: '+38',
    };
    return (
      <>
        <h1>Phonebook</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={this.onSubmit}
        >
          <Form>
            <label>
              Name
              <Field type="text" name="name" key={nanoid()} />
            </label>
            <Error name="name" />
            <label>
              Number
              <Field type="tel" name="number" key={nanoid()} />
            </label>
            <Error name="tel" />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={nanoid()}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
