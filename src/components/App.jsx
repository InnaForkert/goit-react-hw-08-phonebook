import { Component } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/),
    });
    const initialValues = {
      name: '',
    };
    return (
      <>
        <Formik
          initialValues={initialValues}
          validate={schema}
          onSubmit={(values, actions) => {
            console.log(values, actions);
          }}
        >
          <Form>
            <Field type="text" name="name" />

            <ErrorMessage name="name" component="div" />
          </Form>
        </Formik>
      </>
    );
  }
}

export default App;
