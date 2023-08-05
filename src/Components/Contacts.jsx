/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// import Contact from "./Contact";

// const Contacts = (props) => {
//   return (
//     <>
//       <div className="main-container">
//         <div className="contact-col">
//           {props.contactsData.map((contact) => {
//             return (
//               <Contact
//                 contactsData={contact}
//                 key={contact.id}
//                 deleteContact={props.deleteContact}
//                 editContact={props.editContact}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
// export default Contacts


import { connect } from "react-redux";
import Contact from "./Contact";


const Contacts = (props) => {
  return (
    <>
      <div className="main-container">
        <div className="contact-col">
          {props.contactsData.map((contact) => {
            return <Contact contactsData={contact} key={contact.id} />;
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contactsData: state.contacts.contacts,
  };
};

export default connect(mapStateToProps)(Contacts);
