/* eslint-disable react/prop-types */
import { Component } from "react";

export class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactsData.name,
      phoneNumber: props.contactsData.phoneNumber,
      location: props.contactsData.location,
      id: props.contactsData.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editContact(this.state.id, this.state);
    this.setState({
      name: "",
      phoneNumber: "",
      location: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <div className="container">
          <form id="contact" onSubmit={this.handleSubmit}>
            <h3 className="al-center">My Contacts</h3>
            <h4 className="al-center">
              Welcome, You can add or edit existing contacts
            </h4>
            <fieldset>
              <input
                placeholder="Name"
                type="text"
                tabIndex="1"
                required
                autoFocus
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Phone Number"
                type="text"
                tabIndex="2"
                required
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Location"
                type="tel"
                tabIndex="3"
                required
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
              />
            </fieldset>
            <fieldset>
              <button
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}

export default EditContact;
