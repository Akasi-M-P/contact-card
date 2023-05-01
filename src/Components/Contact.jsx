/* eslint-disable react/prop-types */
const Contact = (props) => {
  return (
    <>
      <div className="card">
        <div className="banner">
          <div className="avatar"></div>
        </div>
        <h3>{props.contactsData.name}</h3>
        <a href="">📱 {props.contactsData.phoneNumber}</a>
        <a href="">🌏 {props.contactsData.location}</a>
        <div className="ud-card">
          <p>Edit</p>
          <p>Delete</p>
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
}
export default Contact