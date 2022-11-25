import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (values, options) => {
    const names = this.state.contacts.map(contact => contact.name);
    if (names.includes(values.name)) {
      alert(`${values.name} is already in the list of contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [
          { name: values.name, id: nanoid(), number: values.number },
          ...prevState.contacts,
        ],
      }));
      options.resetForm();
    }
  };

  onSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDelete = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name)
    }))
  }

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
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
