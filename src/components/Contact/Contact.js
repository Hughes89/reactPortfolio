import React from 'react';

import './Contact.scss';

export const Contact = () => {

  let field = {
    name: '',
    email: '',
    message: ''
  };

  const updateField = (e, fieldName) => {
    console.log('EVENT', e.target.value)
    console.log('FIELD', field);
    field[fieldName] = e.target.value;
  };

  const isDisabled = () => {
    return field.name.length > 0 && field.email.length > 0 && field.message.length > 0;
  };

  const sendMessage = () => {
    console.log(field)
    if (!isDisabled()) {
      console.log('submit');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-content">
      <p>If you wanna get in touch, talk to me about a project collaboration or just say hi. Simply fill out the form below or just shoot an email to <a href="mailto:mik3h89@gmail.com">mik3h89@gmail.com</a>.</p>
      <div className="contact-form">
        <div className="contact-label">
          <label htmlFor="fullname"><span>Full Name</span></label>
        </div>
        <div className="contact-input">
          <input type="text" placeholder="Michael Hughes" name="fullname"/>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-label">
          <label htmlFor="email"><span>Email Address</span></label>
        </div>
        <div className="contact-input">
          <input type="text" placeholder="mik3h89@gmail.com" name="email"/>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-label">
          <label htmlFor="message"><span>Message</span></label>
        </div>
        <div className="contact-input">
          <textarea type="text" placeholder="" name="message" rows="4"/>
        </div>
      </div>
      <div className="center">
        <button className="contact-button" onClick={ () => sendMessage()}>Send Message</button>
      </div>
      <p>Of course you can always find me on GitHub and LinkedIn.<br />
      <span className="social-icon">
        <a href="https://github.com/Hughes89" target="blank"><i className="fa fa-github fa-2x" aria-hidden="true" title="Github"></i></a>
      </ span>
      <span className="social-icon">
        <a href="https://www.linkedin.com/in/mhughesiii/" target="blank"><i className="fa fa-linkedin-square fa-2x" title="LinkedIn" aria-hidden="true"></i></a>
      </span>
      </p>
      
      </div>
    </div>
  )
}