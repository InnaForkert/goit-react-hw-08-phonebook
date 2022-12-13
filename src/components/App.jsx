import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: monospace;
  font-size: 40px;
  text-align: center;
  color: #393E46;
  margin-top: 50px;
`

class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
  };

  onSubmit = (values, options) => {
    const isInList = this.state.contacts.find(contact => contact.name === values.name);
    if (isInList) {
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
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onSubmit} />
        <Filter value={this.state.filter} onChange={this.onSearch} />
        <Title>Contacts</Title>
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
