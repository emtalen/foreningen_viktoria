import React from "react";
import "../styles/apply.css";

const ApplyForm = () => {
  return (
    <div className="main-container">
      <div className='main-content'>
        <span id='apply-header'>ANSÖK</span>
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
