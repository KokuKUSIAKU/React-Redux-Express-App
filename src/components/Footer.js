/* eslint-disable */
import React from "react";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
/*  eslint-enable */

const Footer = () => (
  <footer className="footer border-box-item">
    <section className="footer-about-wrap border-box-item" aria-labelledby="abouthitcho">
      <div className="footer-about footer-item-align border-box-item">
        <h2 id="abouthitcho">About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae hendrerit libero. Pellentesque habitant morbi tristique senectus et netus et</p>
        <Logo />
      </div>
    </section>
    <section className="footer-contact-wrap border-box-item" aria-labelledby="contacts">
      <div className="footer-contact-form footer-item-align border-box-item">
        <ContactForm />
      </div>
    </section>
  </footer>

);
export default Footer; 