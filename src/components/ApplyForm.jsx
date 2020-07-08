import React from "react";
import "../styles/apply.css";

const ApplyForm = () => {
  return (
    <div id="apply">
      <div id='apply-content'>
        <h1>ANSÖK</h1>
        <form id="applyform" action="">
          <label htmlFor="">Namn:</label>
          <input type="text" />
          <label htmlFor="">Mail:</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Telefon:</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Motivering:</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
