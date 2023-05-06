import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContactForm from "./Components/AddContactForm";
import Contacts from "./Components/Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Peter",
          phoneNumber: "0500141412",
          location: "London",
          id: "5627241",
        },
      ],
    };
  }

  addNewContact = (contact) => {
    contact.id = Math.random().toString;
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    const undeletedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: undeletedContacts,
    });
  };

  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="detail-col">
            <AddContactForm addContact={this.addNewContact} />
          </div>
          <div className="contact-col">
            <Contacts
              contactsData={this.state.contacts}
              deleteContact={this.deleteContact}
              editContact={this.editContact}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App
