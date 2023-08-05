// src/redux/contactsActions.js
export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const editContact = (id, updatedContact) => {
  return {
    type: "EDIT_CONTACT",
    payload: { id, updatedContact },
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};
