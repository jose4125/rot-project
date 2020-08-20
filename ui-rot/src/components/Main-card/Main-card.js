import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as WikiLogo } from './wikipedia-logo-white.svg';
import VoteButton from '../Vote-button/Vote-button';

import './Main-card.scss';

function MainCard(props) {
  let { name, body_copy, more_info_url } = props.info;
  return (
    <div className="main-card" data-testid="maincard">
      <div className="main-card__top">
        <p className="main-card__opinion">What's your opinion on</p>
        <h1 className="main-card__headLine">{name}?</h1>
        <p className="main-card__body-copy">{body_copy}</p>
        <a href={more_info_url} className="main-card__more-info-link">
          <WikiLogo width="25" />
          <span className="main-card__more-info">More information</span>
        </a>
        <p className="main-card__veredict">What's Your Verdict?</p>
      </div>
      <div className="main-card__bottom">
        <div className="main-card__button-left">
          <VoteButton isThumbUp />
        </div>
        <div className="main-card__button-right">
          <VoteButton isThumbDown />
        </div>
      </div>
    </div>
  );
}

MainCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    body_copy: PropTypes.string,
    more_info_url: PropTypes.string,
  }),
};

export default MainCard;
