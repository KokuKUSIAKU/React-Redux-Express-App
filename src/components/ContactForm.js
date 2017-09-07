/* eslint-disable */
import React from 'react';
/* eslint-enable */

const ContactForm = () => (
  <form action="">
    <fieldset>
      <legend id="contacts"> Contact</legend>
      <label htmlFor="firstname"   >
        Name *:</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
        className="contact-field"
        required
      />

      <label htmlFor="LastName"   >
        LastName *:</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
        className="contact-field"
        required
      />

      <label htmlFor="email"   >
        Email *:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="contact-field"
        required
      />

      <label htmlFor="phone"   >
        Phone :</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone number"
        className="contact-field"
        required
      />

      <label htmlFor="message">Message *</label>
      <textarea id="message" className="contact-field" rows="10" required>
      </textarea>
      <input id="submit" type="submit" aria-describedby="submit" />
    </fieldset>
  </form>
);

export default ContactForm;