import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <form className="form">
        <h1>Contact Us 🤳</h1>

        <label>Name</label>
        <input placeholder="Name" />

        <label>Email</label>
        <input placeholder="Email" />

        <label>Message</label>
        <textarea placeholder="Message"></textarea>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
