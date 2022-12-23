import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const storedContacts = JSON.parse(localStorage.getItem('contactList'));
    if (storedContacts && this.state.contacts.length === 0) {
      this.setState({
        contacts: storedContacts,
      });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.contacts.length !== this.state.length) {
      localStorage.setItem('contactList', JSON.stringify(this.state.contacts));
    }
  };

  onSubmit = values => {
    const isInList = this.state.contacts.find(
      contact => contact.name === values.name
    );
    if (isInList) {
      alert(`${values.name} is already in the list of contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [
          { name: values.name, id: nanoid(), number: values.number },
          ...prevState.contacts,
        ],
      }));
    }
  };

  onSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDelete = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    const filterNormalized = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );

    return (
      <>
        <Title text="Phonebook" />
        <ContactForm onSubmit={this.onSubmit} />
        <Filter value={this.state.filter} onChange={this.onSearch} />
        <Title text="Contacts" />
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
