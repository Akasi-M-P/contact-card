// src/App.js

import { Provider } from "react-redux";
import store from "./Components/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContactForm from "./Components/AddContactForm";
import Contacts from "./Components/Contacts";
import EditContact from "./Components/EditContact"; // Import EditContact component

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <div className="detail-col">
          <AddContactForm />
        </div>
        <div className="contact-col">
          <Contacts />
        </div>
      </div>
      <EditContact /> {/* Render EditContact component */}
    </Provider>
  );
}

export default App;
