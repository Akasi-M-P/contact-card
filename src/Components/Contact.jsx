/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import EditContact from "./EditContact";

const Contact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactsData.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact
            contactsData={props.contactsData}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <div className="card">
        <div className="banner">
          <div className="avatar"></div>
        </div>
        <h3>{props.contactsData.name}</h3>
        <a href="">📱 {props.contactsData.phoneNumber}</a>
        <a href="">🌏 {props.contactsData.location}</a>
        <div className="ud-card">
          <p onClick={handleShow}>Edit</p>
          <p onClick={handleDelete}>Delete</p>
        </div>
        <ul>
          <li>
            <a href="https://www.twitter.com/callumbrown___">
              <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/callumbrown---">
              <i className="fa fa-linkedin" style={{ fontSize: "16px" }}></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.codepen.io/callumbrown___">
              <i className="fa fa-codepen" style={{ fontSize: "16px" }}></i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/callumbrown___">
              <i className="fa fa-dribbble" style={{ fontSize: "16px" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;
