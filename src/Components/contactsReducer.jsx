// src/redux/contactsReducer.js
const initialState = {
  contacts: [
    {
      name: "Peter",
      phoneNumber: "0500141412",
      location: "London",
      id: "5627241",
    },
  ],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? action.payload.updatedContact
            : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
