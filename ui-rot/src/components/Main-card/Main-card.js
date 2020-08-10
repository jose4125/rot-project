import React from 'react';
import { ReactComponent as WikiLogo } from './wikipedia-logo-white.svg';
import VoteButton from '../Vote-button/Vote-button';

import './Main-card.scss';

function MainCard() {
  return (
    <div className="main-card">
      <div className="main-card__top">
        <p className="main-card__opinion">What's your opinion on</p>
        <h1 className="main-card__headLine">Pope Francis?</h1>
        <p className="main-card__body-copy">
          He’s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up){' '}
        </p>
        <a href="test" className="main-card__more-info-link">
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

export default MainCard;
