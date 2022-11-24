import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = (values, options) => {
    this.setState(prevState => ({
      contacts: [
        { name: values.name, id: nanoid(), number: values.number },
        ...prevState.contacts,
      ],
    }));
    options.resetForm();
  };

  onSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filterNormalized = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <Filter value={this.state.filter} onChange={this.onSearch} />
        <h2>Contacts</h2>
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}

export default App;
