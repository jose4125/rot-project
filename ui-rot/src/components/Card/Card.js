import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DB from '../../utils/db';

import VoteNow from '../Vote-now/Vote-now';
import Results from '../Results/Results';
import DateFormatDistance from '../Date-format-distance/Date-format-distance';

import { ReactComponent as ThumbUp } from '../../common/thumb-up2x.svg';
import { ReactComponent as ThumbDown } from '../../common/thumb-down2x.svg';

import './Card.scss';

function isPositive(positive) {
  return (negative) => {
    return positive >= negative;
  };
}

function setThumbIcon(isPositive) {
  let thumbIcon = null;
  let thumbClass = 'card__thumb';

  if (isPositive) {
    thumbClass += ' card__thumb--up';
    thumbIcon = <ThumbUp width="18" />;
  } else {
    thumbClass += ' card__thumb--down';
    thumbIcon = <ThumbDown width="18" />;
  }
  return [thumbClass, thumbIcon];
}

function updateInfo(info) {
  return (option) => {
    info[option] += 1;
    info.total_votes += 1;
    return info;
  };
}

function updateLocalStorage(info) {
  const db = DB('persons');
  db.update(info.id, info);
}

function Card(props) {
  let {
    name,
    body_copy,
    image,
    category,
    positive_votes,
    negative_votes,
    total_votes,
    created_at,
  } = props.info;

  let [vote, setVote] = useState('');
  let [voted, setVoted] = useState(false);
  let [positiveVotes, setPositiveVotes] = useState(positive_votes);
  let [negativeVotes, setNegativeVotes] = useState(negative_votes);
  let [totalVotes, setTotalVotes] = useState(total_votes);

  let stylesAttr = {
    background: "url('/images/pope@2x.jpg')",
    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.8)), url("${image}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  let [thumbClass, thumbIcon] = setThumbIcon(
    isPositive(positive_votes)(negative_votes)
  );

  const handleThumbClick = (option) => {
    setVote(option);
  };

  const handleVoteNow = () => {
    if (vote === '') {
      return;
    }

    if (vote === 'thumbup') {
      setVoted(true);
      setPositiveVotes(positiveVotes + 1);
      updateLocalStorage(updateInfo(props.info)('positive_votes'));
    }

    if (vote === 'thumbdown') {
      setVoted(true);
      setNegativeVotes(negativeVotes + 1);
      updateLocalStorage(updateInfo(props.info)('negative_votes'));
    }

    setTotalVotes(totalVotes + 1);
    setVote('');
  };

  const handleVoteAgain = () => {
    setVoted(false);
  };

  return (
    <li className="card" style={stylesAttr}>
      <div className="card__info-container">
        <div className="card__content">
          <div className="card__headline">
            <div className={thumbClass}>{thumbIcon}</div>
            <h3 className="card__name">{name}</h3>
          </div>
          <p className="card__time-category">
            <span className="card__time">
              <DateFormatDistance created_at={created_at} /> ago
            </span>
            in {category}
          </p>
          {voted ? (
            <p className="card__body-copy">Thank you for voting!</p>
          ) : (
            <p className="card__body-copy">{body_copy}</p>
          )}

          <div className="card__buttons">
            <VoteNow
              onThumbUp={() => handleThumbClick('thumbup')}
              onThumbDown={() => handleThumbClick('thumbdown')}
              onVoteNow={() => handleVoteNow()}
              onVoteAgain={() => handleVoteAgain()}
              voted={voted}
              option={vote}
            />
          </div>
        </div>
        <div className="card__votes">
          <Results
            total={totalVotes}
            positive={positiveVotes}
            negative={negativeVotes}
          />
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body_copy: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    positive_votes: PropTypes.number,
    negative_votes: PropTypes.number,
    total_votes: PropTypes.number,
    created_at: PropTypes.number,
  }),
};

export default Card;
