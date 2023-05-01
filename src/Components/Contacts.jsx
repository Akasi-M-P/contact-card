/* eslint-disable react/prop-types */
import Contact from "./Contact";

const Contacts = (props) => {
  return (
    <>
      <div className="main-container">
        <div className="contact-col">
          {props.contactsData.map((contact, index) => {
            return <Contact contactsData={contact} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Contacts