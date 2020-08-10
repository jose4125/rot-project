import React from 'react';
import PropTypes from 'prop-types';
import VoteNow from '../Vote-now/Vote-now';
import Results from '../Results/Results';

import { ReactComponent as ThumbUp } from '../../common/thumb-up@2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down@2x.svg';

import './Card.scss';

function Card(props) {
  let thumbIcon = null;
  let thumbClass = 'card__thumb';
  let stylesAttr = {
    background: "url('/images/pope@2x.jpg')",
    backgroundImage:
      'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.7)), url("/images/pope@2x.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  if (props.isPositive) {
    thumbClass += ' card__thumb--up';
    thumbIcon = <ThumbUp width="18" />;
  } else {
    thumbClass += ' card__thumb--down';
    thumbIcon = <ThumbDown width="18" />;
  }

  return (
    <li className="card" style={stylesAttr}>
      <div className="card__info-container">
        <div className="card__content">
          <div className="card__headline">
            <div className={thumbClass}>{thumbIcon}</div>
            <h3 className="card__name">Kanye lombana</h3>
          </div>
          <p className="card__time-category">
            <span className="card__time">1 month ago</span>
            in Business
          </p>
          <p className="card__body-copy"> bla bla bla</p>
          <div className="card__buttons">
            <VoteNow />
          </div>
        </div>
        <div className="card__votes">
          <Results />
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  isPositive: PropTypes.bool,
};

export default Card;
