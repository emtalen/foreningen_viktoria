import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/apply.css";

const ApplyForm = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          document.getElementById("applyform").reset();
          setMessage(
            "Tack för din ansökan. Vi återkopplar dig så snart som möjligt."
          );
        },
        (error) => {
          console.log(error.text);
          setMessage(
            "Tyvärr gick något snett, har du fyllt i alla fälten korrekt?"
          );
        }
      );
  };
  return (
    <div className="main-container" id="apply">
      <div className="main-content">
        <span id="apply-header">ANSÖK</span>
        <br />
        <form id="applyform" onSubmit={sendEmail}>
          <input
            placeholder="Namn:"
            name="name"
            id="name"
            type="text"
            required="true"
          />
          <br />
          <input
            placeholder="Email:"
            type="email"
            name="email"
            id=""
            required="true"
          />
          <br />
          <input
            placeholder="Telefonnummer:"
            type="text"
            name="phone"
            id=""
            required="true"
          />
          <br />
          <input
            placeholder="Motivering:"
            id="motivation"
            type="text"
            name="message"
            rows="6"
            cols="40"
            multiline
            required="true"
          />
          <br />
          <button id="submit-button" type="submit">
            Skicka Ansökan
          </button>
        </form>
        <p id="message">{message}</p>
        <p>Vid frågor, vänligen kontakta Arne Wåhlstedt</p>
      </div>
    </div>
  );
};

export default ApplyForm;
