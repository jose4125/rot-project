import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ThumbUp } from '../../common/thumb-up2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down2x.svg';

import './Vote-now.scss';

function VoteNow({
  onThumbUp,
  onThumbDown,
  onVoteNow,
  onVoteAgain,
  option,
  voted,
}) {
  let buttonClass = 'vote__thumb';
  let buttonUp = 'vote__thumb--up';
  let buttonDown = 'vote__thumb--down';
  let buttonClassDown = `${buttonClass} ${buttonDown}`;
  let buttonClassUp = `${buttonClass} ${buttonUp}`;

  if (option === 'thumbup') {
    buttonClassDown = `${buttonClass} ${buttonDown}`;
    buttonClassUp = `${buttonClass} ${buttonUp} vote__thumb--active`;
  }

  if (option === 'thumbdown') {
    buttonClassUp = `${buttonClass} ${buttonUp}`;
    buttonClassDown = `${buttonClass} ${buttonDown} vote__thumb--active`;
  }
  return (
    <div className="vote-now">
      {voted ? (
        <div className="vote__again">
          <button
            className="vote__button vote__button--again"
            onClick={onVoteAgain}
          >
            Vote again
          </button>
        </div>
      ) : (
        <div className="vote__buttons">
          <button className={buttonClassUp} onClick={onThumbUp}>
            <ThumbUp width="18" />
          </button>
          <button className={buttonClassDown} onClick={onThumbDown}>
            <ThumbDown width="18" />
          </button>
          <button className="vote__button" onClick={onVoteNow}>
            Vote now
          </button>
        </div>
      )}
    </div>
  );
}

VoteNow.propTypes = {
  onThumbUp: PropTypes.func,
  onThumbDown: PropTypes.func,
  onVoteNow: PropTypes.func,
  onVoteAgain: PropTypes.func,
  option: PropTypes.string,
  voted: PropTypes.bool,
};

export default VoteNow;
