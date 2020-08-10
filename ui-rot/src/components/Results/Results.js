import React from 'react';

import { ReactComponent as ThumbUp } from '../../common/thumb-up@2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down@2x.svg';

import './Results.scss';

function Results() {
  let stylesUps = {
    width: '64%',
  };

  let stylesDown = {
    width: '36%',
  };

  return (
    <div className="results">
      <div className="results__thumb results__thumb--up" style={stylesUps}>
        <ThumbUp className="thumb-up__icon" width="27" />
        64%
      </div>
      <div className="results__thumb results__thumb--down" style={stylesDown}>
        36%
        <ThumbDown className="thumb-down__icon" width="27" />
      </div>
    </div>
  );
}

export default Results;
