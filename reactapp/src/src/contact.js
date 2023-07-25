import React, { useState } from 'react';
import './contact.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submission logic, e.g., send form data to backend

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    alert("Form submitted")
  };

  return (
    <div className="contact-page-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries regarding our insurance services, feel free to get in touch with us. Our dedicated team is ready to assist you.
      </p>
      <div className="contact-form-container">
        <h3>Contact Information</h3>
        <p>Phone: 123-456-7890</p>
        <p>Email: starinsurance@gmail.com</p>
      </div>
      <div className="contact-form-container">
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-field">
            <label>Message:</label>
            <textarea value={message} onChange={handleMessageChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
