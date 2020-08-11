import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ThumbUp } from '../../common/thumb-up@2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down@2x.svg';

import './Results.scss';

function calcPercentage(num) {
  return (total) => {
    return Math.round((num * 100) / total);
  };
}

function percentageNum(positive) {
  return (negative) => {
    if (positive === 0 && negative === 0) {
      return {
        positiveNum: positive,
        positivePer: 50,
        negativeNum: negative,
        negativePer: 50,
      };
    }

    return {
      positiveNum: calcPercentage(positive)(positive + negative),
      positivePer: calcPercentage(positive)(positive + negative),
      negativeNum: calcPercentage(negative)(positive + negative),
      negativePer: calcPercentage(negative)(positive + negative),
    };

    return [positive, negative];
  };
}

function Results({ total, positive, negative }) {
  //let positivePercentage = calcPercentage(positive)(total);
  //let negativePercentage = calcPercentage(negative)(total);
  let { positiveNum, positivePer, negativeNum, negativePer } = percentageNum(
    positive
  )(negative);
  let thumbUpClass = 'results__thumb results__thumb--up';
  let thumbDownClass = 'results__thumb results__thumb--down';

  if (positivePer === 0) {
    thumbUpClass += ' result-thumb--up-zero';
  }

  if (negativePer === 0) {
    thumbDownClass += ' result-thumb--down-zero';
  }

  let stylesUps = {
    width: `${positivePer}%`,
  };

  let stylesDown = {
    width: `${negativePer}%`,
  };

  return (
    <div className="results">
      <div className={thumbUpClass} style={stylesUps}>
        <ThumbUp className="thumb-up__icon" width="27" />
        {positiveNum}%
      </div>
      <div className={thumbDownClass} style={stylesDown}>
        {negativeNum}%
        <ThumbDown className="thumb-down__icon" width="27" />
      </div>
    </div>
  );
}

Results.propTypes = {
  total: PropTypes.number,
  positive: PropTypes.number,
  negative: PropTypes.number,
};

export default Results;
