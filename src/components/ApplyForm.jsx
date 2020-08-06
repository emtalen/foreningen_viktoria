import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/apply.css";
import { animateScroll } from "react-scroll";

const ApplyForm = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    debugger
    emailjs
      .sendForm(
        "applicants_foreningen_victoria",
        "applicants",
        e.target,
        "user_lpLITTsEfzW8hWs6z2ACY" 
      )
      .then(
        (result) => {
          debugger
          document.getElementById("applyform").reset();
          setMessage(
            "Tack för din ansökan. Vi återkopplar dig så snart som möjligt."
          );
        },
        (error) => {
          debugger
          setMessage(
            "Tyvärr gick något snett här och det beror inte på dig. Vänligen kontakta oss så att vi kan undersöka problemet."
          );
        }
      );
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="main-container" id="apply">
      <div className="main-content">
        <span id="apply-header">ANSÖK OM STÖD</span>
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
          <textarea
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
        <p id="apply-questions">
          Vid frågor angående ansökningar, vänligen ta kontakt med Arne Wåhlstedt
        </p>
        <button className="to-the-topp" onClick={scrollToTop}></button>
      </div>
    </div>
  );
};

export default ApplyForm;
