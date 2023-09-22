import { Component } from 'react';
import { PhoneForm } from './PhoneForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { name: 'John Doe', id: 'id-99', number: '123-456-7890' },
      { name: 'Jane Smith', id: 'id-43', number: '987-654-3210' },
      { name: 'Alice Johnson', id: 'id-233', number: '555-123-4567' },
      { name: 'Bob Johnson', id: 'id-433', number: '777-888-9999' },
      { name: 'Eva Brown', id: 'id-5', number: '555-987-6543' },
      { name: 'David Williams', id: 'id-6', number: '123-789-4560' },
      { name: 'Olivia Martin', id: 'id-7', number: '999-111-2222' },
      { name: 'William Davis', id: 'id-8', number: '777-333-4444' },
      { name: 'Sophia Wilson', id: 'id-9', number: '888-555-6666' },
      { name: 'Liam Taylor', id: 'id-10', number: '666-888-7777' },
      { name: 'Ava Johnson', id: 'id-11', number: '111-222-3333' },
      { name: 'James Anderson', id: 'id-12', number: '444-555-6666' },
      { name: 'Charlotte White', id: 'id-13', number: '222-333-4444' },
    ],
    filter: '',
  };
  // & Додавання контактів
  addConatct = ({ event, name, number }) => {
    event.preventDefault();
    if (
      this.state.contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This contact alredy exist');
      return;
    }
    this.setState(pervState => ({
      contacts: [
        { name: name, number: number, id: nanoid() },
        ...pervState.contacts,
      ],
    }));
  };

  // & Оновлення стейту при вводі
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    if ((event.target.name = 'filter')) {
    }
  };

  //& ф-кція що повертає масив відфільтрованих контактів
  getFilteredContacts(filter) {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }

  //& Ф-кція для видалення контакту
  handleDelete = id => {
    console.log();
    this.setState(prevState => {
      if (this.state.contacts.find(contact => contact.id === id)) {
        prevState.contacts.splice(
          this.state.contacts.indexOf(
            this.state.contacts.find(contact => contact.id === id)
          ),
          1
        );
      }
      return { contacts: prevState.contacts };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <PhoneForm
          handleAddNumber={this.addConatct}
          state={this.state}
          handleInput={this.handleInput}
        />
        <h2>Contacts</h2>
        <Filter state={this.state} handleInput={this.handleInput} />
        <ContactList
          contacts={this.getFilteredContacts(this.state.filter)}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
