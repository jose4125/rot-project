import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link className="header__link header__link--logo" to="/">
            Rule of Thumb.
          </Link>
        </div>
        <ul className="header__links-container">
          <li className="header__item">
            <Link className="header__link" to="/past-trials">
              Past Trials
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/how-it-works">
              How It Works
            </Link>
          </li>
          <li className="header__item">
            <button className="header__link header__link--button">
              Log In
            </button>
            /
            <button className="header__link header__link--button">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
