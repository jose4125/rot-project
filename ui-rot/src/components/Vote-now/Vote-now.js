import React from 'react';

import { ReactComponent as ThumbUp } from '../../common/thumb-up@2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down@2x.svg';

import './Vote-now.scss';

function VoteNow() {
  return (
    <div className="vote-now">
      <div className="vote__buttons">
        <button className="vote__thumb vote__thumb--up">
          <ThumbUp width="18" />
        </button>
        <button className="vote__thumb vote__thumb--down">
          <ThumbDown width="18" />
        </button>
        <button className="vote__button">Vote now</button>
      </div>
      <div className="vote__again">
        <button className="vote__button vote__button--again">Vote again</button>
      </div>
    </div>
  );
}

export default VoteNow;
