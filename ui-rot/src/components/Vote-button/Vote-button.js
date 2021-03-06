import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ThumbUp } from '../../common/thumb-up2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down2x.svg';

import './Vote-button.scss';

function VoteButton(props) {
  let elClass = 'vote';
  let icon = null;

  if (props.isThumbUp) {
    elClass += ' vote--thumb-up';
    icon = <ThumbUp className="thumb-up" />;
  } else {
    elClass += ' vote--thumb-down';
    icon = <ThumbDown className="thumb-down" />;
  }

  return <button className={elClass}>{icon}</button>;
}

VoteButton.propTypes = {
  isThumbUp: PropTypes.bool,
};

export default VoteButton;
