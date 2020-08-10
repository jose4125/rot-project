import React from 'react';
import { ReactComponent as Close } from './close@2x.svg';

import './Info.scss';

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__left">
          <div className="info__title">
            Speak out. Be heard. <span className="info__bold">Be counted</span>
          </div>
          <div className="info__body-copy">
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. It’s easy: You
            share your opinion, we analyze and put the data in a public report.
          </div>
        </div>
        <div className="info__close">
          <Close width="15" />
        </div>
      </div>
    </section>
  );
}

export default Info;
