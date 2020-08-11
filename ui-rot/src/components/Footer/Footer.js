import React from 'react';

import { ReactComponent as Facebook } from './facebook2@2x.svg';
import { ReactComponent as Twitter } from './twitter@2x.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__links">
          <li className="footer__item">
            <a href="/terms-and-condition" className="footer__link">
              Termns and Condition
            </a>
          </li>
          <li className="footer__item">
            <a href="privacy-policy" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a href="contact-us" className="footer__link">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__social-item">Follow Us</li>
          <li className="footer__social-item">
            <a href="/" className="footer__social-link">
              <Facebook width="25" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="/" className="footer__social-link">
              <Twitter width="25" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
