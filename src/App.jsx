import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
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
          id: uuidv4,
        },
      ],
    };
  }

  addNewContact = (contact) => {
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
            />
          </div>
        </div>
      </>
    );
  }
}

export default App
