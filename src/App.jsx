import { Component } from 'react';
import './App.css'
import AddContactForm from './Components/AddContactForm';
import Contacts from './Components/Contacts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
         name: "Peter",
         phoneNumber: "0500141412",
         location: "London",
        }
      ],
    }
  }

  addNewContact= (contact) => {
    this.setState({
      contacts: [... this.state.contacts, contact]
    });
  }

  render() {
  return (
    <>
      <div className="main-container">
        <div className="detail-col">
          <AddContactForm addContact={this.addNewContact}/>
        </div>
        <div className="contact-col">
          <Contacts contactsData={this.state.contacts}/>
        </div>
      </div>
    </>
  );
}
}

export default App
