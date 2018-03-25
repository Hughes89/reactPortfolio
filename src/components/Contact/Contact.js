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

  const sendEmail = () => {
    console.log(name);
    console.log(field);
  };

  const sendMessage = () => {

  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-content">
      <p>If you wanna get in touch, talk to me about a project collaboration or just say hi, simply shoot an email to <a href="mailto:mik3h89@gmail.com">mik3h89@gmail.com</a>.</p>

      <p>Of course you can always find me on GitHub, or LinkedIn.<br />
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