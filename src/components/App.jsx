import { Component } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onSubmit = (values, options) => {
    this.setState(prevState => ({
      contacts: [{ name: values.name, id: nanoid() }, ...prevState.contacts],
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
    });
    const initialValues = {
      name: '',
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
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
